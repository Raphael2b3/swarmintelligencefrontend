import { findConnectiveInDatabaseFor, getEntityFromDatabase } from '$lib/database';
import type {
	IConnection,
	IDuplicationMarker,
	IEntity,
	IEntityCache,
	IFilterOptions,
	IStatement,
	IStatementToConnective,
	entityType
} from '$lib/interfaces';
import { historyManager } from './history.svelte';

function getFallbackEntity(entityType: 'connection' | 'duplication' | 'statement') {
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
			} as IDuplicationMarker;

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

function cacheEntities(entities: IEntity[], entity: 'connection' | 'duplication' | 'statement') {
	for (const _entity of entities) {
		entityCache[entity][_entity.id] = _entity as any;
	}
}

function getEntityInstancesFromCache(
	keys: string[],
	entity: 'connection' | 'duplication' | 'statement'
) {
	const out: IEntity[] = []; // init
	for (const key in keys || []) {
		const _entity = entityCache[entity][key];
		out.push(_entity);
	}
	return out;
}

export function getEntity(id: string, entityType: 'connection' | 'duplication' | 'statement') {
	try {
		let stm = getEntityInstancesFromCache([id], entityType);
		return stm[0];
	} catch (e) {
		let stm = getEntityFromDatabase(id, entityType);
		if (!stm) return getFallbackEntity(entityType);
		cacheEntities([stm], entityType);
		return stm;
	}
}

export function getConnectiveFor(
	id: string,
	connectiveType: 'argument' | 'thesis' | 'duplication',
	useCache = true
) {
	const entityType = connectiveType !== 'duplication' ? 'connection' : 'duplication';

	let out: IEntity[] = []; // init
	if (useCache) {
		//connections from cache
		out = getEntityInstancesFromCache(statementToConnective[connectiveType][id], entityType);
	}

	const db_entities = findConnectiveInDatabaseFor(
		id,
		connectiveType,
		statementToConnective[connectiveType][id]
	); // grab new connections
	cacheEntities(db_entities, entityType);
	return out;
}
export function clearCache() {
	console.log('clearCache');
	entityCache['statement'] = {};
	entityCache['connection'] = {};
	entityCache['duplication'] = {};
}

export function searchEntites(searchTerm: string, entityType: IFilterOptions) {
	const entities = getEntitiesFromDatabase(searchTerm, entityType);
	cacheEntities(entities, entityType);
	return entities;
}


function searchEntities() {

}