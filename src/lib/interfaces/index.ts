export interface IStatement {
	id: string;
	type: IEntityType;
	text: string;
	lastSeasonTruth: number; // der letzten season
	numberOfVotes: number;
	voteRatio: number;
	author: string;
	tags?: string[];
}
export function isIStatement(object: any): object is IStatement {
	return object.type == 'statement';
}

export interface IConnection {
	id: string;
	type: IEntityType;
	thesis: string;
	argument: string;
	isProArgument: boolean;
	weight: number;
	numberOfVotes: number;
	isTrueVotes: number;
	creator: string;
}
export function isIConnection(object: any): object is IConnection {
	return object.type == 'connection';
}

export interface IDuplication {
	id: string;
	type: IEntityType;
	statementA: string;
	statementB: string;
	numberOfVotes: number;
	isDuplicateVotes: number;
}

export function isIDuplication(object: any): object is IDuplication {
	return object.type == 'duplication';
}

export type IEntity = IStatement | IConnection | IDuplication;

export interface IFilterOptions {
	sortByTruth?: 'asc' | 'desc';
	sortByVotes?: 'asc' | 'desc';
	controversial?: boolean;
	entitytype: IEntityType[];
	tags?: string[];
	_tagstring?: string;
}

export enum ELoadingState {
	LOADING = 'loading',
	LOADED = 'loaded',
	FAILED = 'failed'
}

export interface IStatementToConnective {
	argument: Record<string, string[]>;
	thesis: Record<string, string[]>;
	duplication: Record<string, string[]>;
}
export type IEntityCache = {
	statement: Record<string, IStatement>;
	connection: Record<string, IConnection>;
	duplication: Record<string, IDuplication>;
}

export type IEntityType = "statement" | "connection" | "duplication";
export type IConnectiveType = "argument" | "thesis" | "duplication";
