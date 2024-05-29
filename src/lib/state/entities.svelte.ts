
import { findEntityInDatabaseFor, getStatementFromDatabase } from '$lib/database';
import type { IEntity, IStatement } from '$lib/interfaces';
import { historyManager } from './history.svelte';

const fallbackStatement: IStatement = {
	author: 'unknown',
	id: 'fallback',
	lastSeasonTruth: 0,
	numberOfVotes: 0,
	text: 'The Statement was not found',
	voteRatio: 0
}
const entityCache: Record<string, Record<string, IEntity>> = { "statement": {}, "connection": {}, "duplication": {} }
const statementToEntity: Record<string, Record<string, string[]>> = { "argument": {}, "thesis": {}, "duplication": {} }


export function getStatement(id: string) {
	console.log("Get statement");
	let stm = entityCache["statement"][id];
	if (!stm) {
		stm = getStatementFromDatabase(id);
		if (!stm) return fallbackStatement;
		entityCache["statement"][stm.id] = stm;
	}

	historyManager.watch(stm.id);
	return stm;
}

function getEntityFromCache(id: string, entity: "argument" | "thesis" | "duplication") {
	//connections from cache
	const out: IEntity[] = [] // init
	const except = statementToEntity[entity][id] || []; // grab already known connections for Statement
	for (const key in except) {
		const _entity = entityCache[entity][key]
		out.push(_entity);
		historyManager.watch(_entity.id);
	}
	return out;

}


export function getEntityFor(id: string, entity: "argument" | "thesis" | "duplication", useCache = true) {
	let out: IEntity[] = [] // init
	let except: string[] = []
	if (useCache) {
		out = getEntityFromCache(id, entity);
		//connections from cache
		except = statementToEntity[entity][id] || []; // grab already known connections for Statement

	}

	const db_entities = findEntityInDatabaseFor(id, entity, except);  // grab new connections

	for (const db_entity of db_entities) {
		statementToEntity[entity][id].push(db_entity.id);
		entityCache[entity][db_entity.id] = db_entity;
		out.push(db_entity);
		historyManager.watch(db_entity.id);
	}
	return out

}

export function clearCache() {
	console.log('clearCache');
	entityCache["statement"] = {};
	entityCache["connection"] = {};
	entityCache["duplication"] = {};
}