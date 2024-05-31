import { findEntityInDatabaseFor, getStatementFromDatabase } from '$lib/database';
import type { IEntity, IEntityCache, IStatement, IStatementToConnective } from '$lib/interfaces';
import { historyManager } from './history.svelte';
const fallbackStatement: IStatement = {
	author: 'unknown',
	id: 'fallback',
	lastSeasonTruth: 0,
	numberOfVotes: 0,
	text: 'The Statement was not found',
	voteRatio: 0
};

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

export function getStatement(id: string) {
	console.log('Get statement');
	let stm = entityCache['statement'][id];
	if (!stm) {
		stm = getStatementFromDatabase(id);
		if (!stm) return fallbackStatement;
		entityCache['statement'][stm.id] = stm;
	}

	historyManager.watch(stm.id);
	return stm;
}
function getEntityInstancesFromCache(
	keys: string[],
	entity: 'connection' | 'duplication' | 'statement'
) {
	const out: IEntity[] = []; // init
	for (const key in keys || []) {
		const _entity = entityCache[entity][key];
		out.push(_entity);
		historyManager.watch(_entity.id);
	}
	return out;
}

function cacheEntities(entities: IEntity[]) {}
function getConnectiveFromCacheFor(
	id: string,
	connectiveType: 'argument' | 'thesis' | 'duplication'
) {
	//connections from cache
	const entityType = connectiveType !== 'duplication' ? 'connection' : 'duplication';

	return getEntityInstancesFromCache(statementToConnective[connectiveType][id], entityType);
}

export function getConnectiveFor(
	id: string,
	connectiveType: 'argument' | 'thesis' | 'duplication',
	useCache = true
) {
	let out: IEntity[] = []; // init
	if (useCache) {
		out = getConnectiveFromCacheFor(id, connectiveType);
		//connections from cache
	}

	const db_entities = findEntityInDatabaseFor(
		id,
		connectiveType,
		statementToConnective[connectiveType][id]
	); // grab new connections

	getEntityInstancesFromCache(db_entities, entity);
	return out;
}

export function clearCache() {
	console.log('clearCache');
	entityCache['statement'] = {};
	entityCache['connection'] = {};
	entityCache['duplication'] = {};
}
