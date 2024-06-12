import { createConnectionDB, createDuplicationDB, createStatementDB, findConnectiveForDB, getEntityDB, searchForEntitiesDB, voteForEntityDB } from '$lib/database';
import type {
	IConnection,
	IDuplication,
	IEntity,
	IEntityCache,
	IFilterOptions,
	IStatement,
	IStatementToConnective,
	IEntityType,
	IConnectiveType
} from '$lib/interfaces';
import { historyManager } from './history.svelte';

function getFallbackEntity(entityType: IEntityType) {
	switch (entityType) {
		case 'connection':
			return {
				id: 'fallback',
				thesis: 'fallback',
				argument: 'fallback',
				isProArgument: false,
				weight: 0,
				numberOfVotes: 0,
				isTrueVotes: 0,
				creator: 'fallback'
			} as IConnection;

		case 'duplication': // is equal to duplicationmarker
			return {
				// return Iduplicationmarker
				id: 'fallback',
				statementA: 'fallback',
				statementB: 'fallback',
				numberOfVotes: 0,
				isDuplicateVotes: 0
			} as IDuplication;

		case 'statement': // is equal to IStatement
			return {
				id: 'fallback',
				text: 'fallback',
				lastSeasonTruth: 0,
				numberOfVotes: 0,
				voteRatio: 0,
				author: 'fallback'
			} as IStatement;
	}
}

const entityCache: IEntityCache = {
	statement: {},
	connection: {},
	duplication: {}
};

const statementToConnective: IStatementToConnective = {
	argument: {},
	thesis: {},
	duplication: {}
};

function cacheEntities(entities: IEntity[]) {
	for (const _entity of entities) {
		entityCache[_entity.type][_entity.id] = _entity as any;
	}
}

function getEntityInstancesFromCache(
	keys: string[],
	entity: IEntityType
) {
	console.log('getEntityInstancesFromCache', keys, entity, entityCache);
	const out: IEntity[] = []; // init
	for (const key in keys || []) {
		const _entity = entityCache[entity][key];
		if (_entity)
			out.push(_entity);
	}
	return out;
}

export function getEntity(id: string | undefined, entityType: IEntityType) {
	if (!id) return;
	console.log('getEntity', id, entityType);
	let stm: IEntity | IEntity[];
	stm = getEntityInstancesFromCache([id], entityType);
	if (stm.length > 0) {
		console.log('getEntityFromCache', stm);
		return stm[0];
	}
	stm = getEntityDB(id, entityType);
	console.log('getEntityFromDB', stm);
	if (!stm)
		return getFallbackEntity(entityType);
	cacheEntities([stm]);

	return stm;
}


export function getConnectiveFor(
	id: string,
	connectiveType: IConnectiveType,
	useCache = true
) {
	const entityType = connectiveType !== 'duplication' ? 'connection' : 'duplication';

	let out: IEntity[] = []; // init
	if (useCache) {
		//connections from cache
		out = getEntityInstancesFromCache(statementToConnective[connectiveType][id], entityType);
	}

	const db_entities = findConnectiveForDB(
		id,
		connectiveType,
		statementToConnective[connectiveType][id]
	); // grab new connections
	cacheEntities(db_entities);
	out.push(...db_entities);
	return out.slice(0, 4);
}
export function clearCache() {
	console.log('clearCache');
	entityCache['statement'] = {};
	entityCache['connection'] = {};
	entityCache['duplication'] = {};
}

export function searchEntites(searchTerm: string, filterOptions: IFilterOptions, useCache = true): IEntity[] {
	const entities: IEntity[] = []
	if (useCache) {
		// search in cache
		entities.push(...searchEntitiesInCache(searchTerm, filterOptions));
	}
	const db_entities = searchForEntitiesDB(searchTerm, filterOptions);
	cacheEntities(db_entities);
	entities.push(...db_entities);
	return entities;
}

function searchEntitiesInCache(searchTerm: string, filterOptions: IFilterOptions) {

	function filterStatement(statement: IStatement, searchTerm: string, filterOptions: IFilterOptions) {
		const searchTermCondition = (statement.text.toLowerCase() + statement.id.toLowerCase()).includes(searchTerm.toLowerCase());
		const tagCondition = filterOptions.tags ? filterOptions.tags.every((tag) => statement.tags?.includes(tag)) : true;
		const entityTypeCondition = !filterOptions.entitytype || filterOptions.entitytype.includes('statement');
		const controversialCondition = filterOptions.controversial ? Math.abs(statement.lastSeasonTruth - 0.5) < 2 : true;
		return searchTermCondition && tagCondition && entityTypeCondition && controversialCondition;
	}

	function filterConnection(connection: IConnection, searchTerm: string, filterOptions: IFilterOptions) {
		const searchTermCondition = connection.id.toLowerCase().includes(searchTerm.toLowerCase());
		const tagCondition = true; //filterOptions.tags ? filterOptions.tags.every((tag) => connection.tags?.includes(tag)) : true;
		const entityTypeCondition = !filterOptions.entitytype || filterOptions.entitytype.includes('connection');
		const controversialCondition = true;//filterOptions.controversial ? Math.abs(connection.lastSeasonTruth - 0.5) < 2 : true;
		return searchTermCondition && tagCondition && entityTypeCondition && controversialCondition;
	}

	function filterDuplication(duplication: IDuplication, searchTerm: string, filterOptions: IFilterOptions) {
		const searchTermCondition = duplication.id.toLowerCase().includes(searchTerm.toLowerCase());
		const tagCondition = true; //filterOptions.tags ? filterOptions.tags.every((tag) => duplication.tags?.includes(tag)) : true;
		const entityTypeCondition = !filterOptions.entitytype || filterOptions.entitytype.includes('duplication');
		const controversialCondition = true;//filterOptions.controversial ? Math.abs(duplication.lastSeasonTruth - 0.5) < 2 : true;
		return searchTermCondition && tagCondition && entityTypeCondition && controversialCondition;
	}

	function sortStatement(statementFirst: IStatement, statementSecond: IStatement, filterOptions: IFilterOptions) {
		const lastSeasonTruthDff = statementFirst.lastSeasonTruth - statementSecond.lastSeasonTruth;
		const numberOfVotesDff = statementFirst.numberOfVotes - statementSecond.numberOfVotes;
		if (filterOptions.sortByTruth && lastSeasonTruthDff != 0) {
			return filterOptions.sortByTruth == 'asc' ? lastSeasonTruthDff : -lastSeasonTruthDff;
		}
		if (filterOptions.sortByVotes) {
			return filterOptions.sortByVotes == 'asc' ? numberOfVotesDff : -numberOfVotesDff;
		}
		return 0;
	}

	function sortConnection(connectionFirst: IConnection, connectionSecond: IConnection, filterOptions: IFilterOptions) {
		return 0;
	}
	function sortDuplication(duplicationFirst: IDuplication, duplicationSecond: IDuplication, filterOptions: IFilterOptions) {
		return 0;
	}
	const tags = filterOptions.entitytype || ["statement", "connection", "duplication"];
	let out = [];
	if (tags.includes('statement')) {
		const keys = Object.keys(entityCache.statement);
		const _out = keys
			.filter((key) => filterStatement(entityCache.statement[key], searchTerm, filterOptions)).
			map((key) => entityCache.statement[key])
			.sort((statementFirst, statementSecond) => sortStatement(statementFirst, statementSecond, filterOptions));
		out.push(..._out);
	}

	if (tags.includes('connection')) {
		const keys = Object.keys(entityCache.connection);
		const _out = keys.filter((key) => filterConnection(entityCache.connection[key], searchTerm, filterOptions)).
			map((key) => entityCache.connection[key])
			.sort((connectionFirst, connectionSecond) => sortConnection(connectionFirst, connectionSecond, filterOptions));
		out.push(..._out);
	}

	if (tags.includes('duplication')) {
		const keys = Object.keys(entityCache.duplication);
		const _out = keys.filter((key) => filterDuplication(entityCache.duplication[key], searchTerm, filterOptions)).
			map((key) => entityCache.duplication[key])
			.sort((duplicationFirst, duplicationSecond) => sortDuplication(duplicationFirst, duplicationSecond, filterOptions));
		out.push(..._out);

	}
	return out;
}

export function watchEntity(entity: IStatement | IConnection | IDuplication) {
	voteForEntityDB(entity.id, entity.type, 1);
}

export function createDuplicationFor(statementA: string, statementB: string) {
	const id = createDuplicationDB(statementA, statementB);
	voteForEntityDB(id, 'duplication', 1);
}

export function createConnectionFor(statementThesis: string, statementArgument: string, isProArgument: boolean, value: number) {
	const id = createConnectionDB(statementThesis, statementArgument, isProArgument);
	voteForEntityDB(id, 'connection', value);
}

export function createStatement(text: string, tags: string[], userVote: 1 | -1) {
	const id = createStatementDB(text, tags);
	voteForEntityDB(id, 'statement', userVote);

}