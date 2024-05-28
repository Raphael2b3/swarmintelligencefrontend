import { findStatementInDatabase, getRecommendation } from '$lib/database';
import type { IConnection, IDuplicationMarker, IStatement } from '$lib/interfaces';
const fallbackStatement: IStatement = {
	author: 'unknown',
	id: 'fallback',
	lastSeasonTruth: 0,
	numberOfVotes: 0,
	text: 'The Statement was not found',
	voteRatio: 0
}
let statementsCache: Record<string, IStatement> = {};
let connectionCache: Record<string, IConnection> = {};
let duplicationCache: Record<string, IDuplicationMarker> = {};

let recommendationsPool = getRecommendation();

export function getStatement(id: string) {
	let stm = statementsCache[id];
	if (!stm) {
		stm = findStatementInDatabase(id);
		if (!stm) return fallbackStatement;
		statementsCache[stm.id] = stm;
	}
	return stm;
}

export function clearCache() {
	console.log('clearCache');
	statementsCache = {};
	connectionCache = {};
	duplicationCache = {};
}