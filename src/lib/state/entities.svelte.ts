
import { getStatementFromDatabase, searchForEntitiesInDatabase, searchRelationInDatabaseFor } from '$lib/database';
import { isIConnection, isIStatement, type IConnection, type IDuplicationMarker, type IEntity, type IFilterOptions, type IStatement } from '$lib/interfaces';
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


export function getStatement(id: string, effectHistory = true) {
	console.log("Get statement");
	let stm = entityCache["statement"][id];
	if (!stm) {
		stm = getStatementFromDatabase(id);
		if (!stm) return fallbackStatement;
		entityCache["statement"][stm.id] = stm;
	}
	if (effectHistory)
		historyManager.watch(stm.id);
	return stm;
}

function getEntityFromCache(id: string, entity: "argument" | "thesis" | "duplication") {
	//connections from cache
	const out: IEntity[] = [] // init
	const except = statementToEntity[entity][id] || []; // grab already known connections for Statement
	for (const key in except) {
		const _entity = entityCache["statement"][key]
		out.push(_entity);
		historyManager.watch(_entity.id);
	}
	return out;

}

function filterStatement(entity: IStatement, filter: IFilterOptions, searchTerm: string) {
	const searchTermCriteria = (entity.author?.includes(searchTerm)
		|| entity.text?.includes(searchTerm)
		|| entity.id?.includes(searchTerm));
	const tagCriteria = filter.tags?.length === 0 || filter.tags?.every(tag => entity.tags?.includes(tag));
	const controversialCriteria =
		!filter.controversial || (Math.abs(entity.voteRatio - 0.5) < 0.2)
	return searchTermCriteria && tagCriteria && controversialCriteria;
}

export function searchEntitiesInCache(searchTerm: string, filter: IFilterOptions) {
	const out = [];
	const except = [];
	const entitities = filter.entitytype ? filter.entitytype : ["statement", "connection", "duplication"];
	for (const entitytype in entitities)
		for (const key2 in entityCache[entitytype]) {
			const entity = entityCache[entitytype][key2];
			switch (entitytype) {
				case "statement":
					if (filterStatement(entity as IStatement, filter, searchTerm)) {
						out.push(entity);
						except.push(entity.id);
					}
					break;
				default:
					out.push(entity);
					except.push(entity.id);
					break;
			}

		}

	return { out, except }
}

export function searchEntity(searchTerm: string, filter: IFilterOptions, useCache = true) {


	let out: IEntity[] = [] // init
	let except: string[] = [] // init

	if (useCache) {
		const entities = searchEntitiesInCache(searchTerm, filter);
		out = entities.out;
		except = entities.except;
	}

	const db_entities = searchForEntitiesInDatabase(searchTerm, filter);  // grab new connections

	for (const db_entity of db_entities) {
		const entityType = isIStatement(db_entity) ? "statement" : isIConnection(db_entity) ? "connection" : "duplication";
		entityCache[entityType][db_entity.id] = db_entity;
		out.push(db_entity);
		historyManager.watch(db_entity.id);
	}
	return out

}
function updateContext(entityType: "statement" | "connection" | "duplication", id: string, entity: IEntity) {
	if (entityType == "statement")
		return;
	if (entityType == "duplication") {
		const A = (entity as IDuplicationMarker).statementA
		const B = (entity as IDuplicationMarker).statementB
		statementToEntity["duplication"][A].push(id)
		statementToEntity["duplication"][B].push(id)
	}
	if (entityType == "connection") {
		const thesis = (entity as IConnection).thesis
		const argument = (entity as IConnection).argument
		statementToEntity["argument"][thesis].push(id)
		statementToEntity["thesis"][argument].push(id)
	}
}

export function getEntityFor(id: string, entity: "argument" | "thesis" | "duplication", useCache = true) {
	let out: IEntity[] = [] // init
	let except: string[] = []
	if (useCache) {
		out = getEntityFromCache(id, entity);
		//connections from cache
		except = statementToEntity[entity][id] || []; // grab already known connections for Statement

	}

	const db_entities = searchRelationInDatabaseFor(id, entity, except);  // grab new connections

	for (const db_entity of db_entities) {
		statementToEntity[entity][id].push(db_entity.id);
		entityCache["statement"][db_entity.id] = db_entity;
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