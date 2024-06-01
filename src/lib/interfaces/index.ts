export interface IStatement {
	id: string;
	text: string;
	lastSeasonTruth: number; // der letzten season
	numberOfVotes: number;
	voteRatio: number;
	author: string;
	tags?: string[];
}
export function isIStatement(object: any): object is IStatement {
	return (
		`id` in object &&
		'text' in object &&
		'lastSeasonTruth' in object &&
		'numberOfVotes' in object &&
		'voteRatio' in object &&
		'author' in object
	);
}

export interface IConnection {
	id: string;
	thesis: string;
	argument: string;
	isProArgument: boolean;
	weight: number;
	numberOfVotes: number;
	isTrueVotes: number;
	creator: string;
}
export function isIConnection(object: any): object is IConnection {
	return (
		"id" in object &&
		'thesis' in object &&
		'argument' in object &&
		'isProArgument' in object &&
		'weight' in object &&
		'numberOfVotes' in object &&
		'isTrueVotes' in object &&
		'creator' in object
	);
}

export interface IDuplicationMarker {
	id: string;
	statementA: string;
	statementB: string;
	numberOfVotes: number;
	isDuplicateVotes: number;
}

export function isIDuplicationMarker(object: any): object is IDuplicationMarker {
	return (
		"id" in object &&
		'statementA' in object &&
		'statementB' in object &&
		'numberOfVotes' in object &&
		'isDuplicateVotes' in object
	);
}

export type IEntity = IStatement | IConnection | IDuplicationMarker;


export interface IFilterOptions {
	sortByTruth?: 'asc' | 'desc';
	sortByVotes?: 'asc' | 'desc';
	controversial?: boolean;
	entitytype: ('statement' | 'connection' | 'duplication')[];
	tags?: string[];
	_tagstring?: string;
}


export enum ELoadingState {
	LOADING = 'loading',
	LOADED = 'loaded',
	FAILED = 'failed',
}
