export interface IStatement {
	text: string;
	lastSeasonTruth: number; // der letzten season
	numberOfVotes: number | undefined;
	voteRatio: number | undefined;
	author: string | undefined;
}
export function isIStatement(object: any): object is IStatement {
	return (
		'text' in object &&
		'lastSeasonTruth' in object &&
		'numberOfVotes' in object &&
		'voteRatio' in object &&
		'author' in object
	);
}

export interface IConnection {
	thesis: IStatement;
	argument: IStatement;
	isProArgument: boolean;
	weight: number;
	numberOfVotes: number;
	isTrueVotes: number;
	creator: string;
}
export function isIConnection(object: any): object is IConnection {
	return (
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
	statementA: IStatement;
	statementB: IStatement;
	numberOfVotes: number;
	isDuplicateVotes: number;
}

export function isIDuplicationMarker(object: any): object is IDuplicationMarker {
	return (
		'statementA' in object &&
		'statementB' in object &&
		'numberOfVotes' in object &&
		'isDuplicateVotes' in object
	);
}
