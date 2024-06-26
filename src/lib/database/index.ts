import type { IConnection, IConnectiveType, IDuplication, IEntity, IEntityType, IFilterOptions, IStatement } from '$lib/interfaces';
const statements: IStatement[] = [
	{
		id: '1',
		type: 'statement',
		text: 'The earth is flat',
		lastSeasonTruth: 0.1,
		numberOfVotes: 100,
		voteRatio: 0.5,
		author: 'John Doe'
	},
	{
		id: '1',
		type: 'statement',
		text: 'The earth is round',
		lastSeasonTruth: 0.9,
		numberOfVotes: 100,
		voteRatio: 0.5,
		author: 'Jane Doe'
	},
	{
		id: '1',
		type: 'statement',
		text: 'The earth is a cube',
		lastSeasonTruth: 0.1,
		numberOfVotes: 100,
		voteRatio: 0.5,
		author: 'John Doe'
	},
	{
		id: '1',
		type: 'statement',
		text: 'The earth is a pyramid',
		lastSeasonTruth: 0.1,
		numberOfVotes: 100,
		voteRatio: 0.5,
		author: 'John Doe'
	},
	{
		id: '1',
		type: 'statement',
		text: 'The earth is a sphere',
		lastSeasonTruth: 0.9,
		numberOfVotes: 100,
		voteRatio: 0.5,
		author: 'Jane Doe'
	},
	{
		id: '1',
		type: 'statement',
		text: 'The earth is a cylinder',
		lastSeasonTruth: 0.1,
		numberOfVotes: 100,
		voteRatio: 0.5,
		author: 'John Doe'
	},
	{
		id: '1',
		type: 'statement',
		text: 'The earth is a cone',
		lastSeasonTruth: 0.1,
		numberOfVotes: 100,
		voteRatio: 0.5,
		author: 'John Doe'
	},
	{
		id: '1',
		type: 'statement',
		text: 'The earth is a dodecahedron',
		lastSeasonTruth: 0.1,
		numberOfVotes: 100,
		voteRatio: 0.5,
		author: 'John Doe'
	},
	{
		id: '1',
		type: 'statement',
		text: 'The earth is a tetrahedron',
		lastSeasonTruth: 0.1,
		numberOfVotes: 100,
		voteRatio: 0.5,
		author: 'John Doe'
	},
	{
		id: '1',
		type: 'statement',
		text: 'The earth is a octahedron',
		lastSeasonTruth: 0.1,
		numberOfVotes: 100,
		voteRatio: 0.5,
		author: 'John Doe'
	},
	{
		id: '1',
		type: 'statement',
		text: 'The earth is an oblate spheroid',
		lastSeasonTruth: 0.9,
		numberOfVotes: 100,
		voteRatio: 0.5,
		author: 'Jane Doe'
	},
	{
		id: '1',
		type: 'statement',
		text: 'The earth is hollow',
		lastSeasonTruth: 0.1,
		numberOfVotes: 100,
		voteRatio: 0.5,
		author: 'John Doe'
	},
	{
		id: '1',
		type: 'statement',
		text: 'The earth is a torus',
		lastSeasonTruth: 0.1,
		numberOfVotes: 100,
		voteRatio: 0.5,
		author: 'John Doe'
	},
	{
		id: '1',
		type: 'statement',
		text: 'The earth is an ellipsoid',
		lastSeasonTruth: 0.9,
		numberOfVotes: 100,
		voteRatio: 0.5,
		author: 'Jane Doe'
	},
	{
		id: '1',
		type: 'statement',
		text: 'The earth is a geoid',
		lastSeasonTruth: 0.9,
		numberOfVotes: 100,
		voteRatio: 0.5,
		author: 'Jane Doe'
	},
	{
		id: '1',
		type: 'statement',
		text: 'The sun is a star',
		lastSeasonTruth: 0.9,
		numberOfVotes: 100,
		voteRatio: 0.8,
		author: 'Alice Smith'
	},
	{
		id: '1',
		type: 'statement',
		text: 'Water boils at 100 degrees Celsius',
		lastSeasonTruth: 0.9,
		numberOfVotes: 100,
		voteRatio: 0.7,
		author: 'Bob Johnson'
	},
	{
		id: '1',
		type: 'statement',
		text: 'The moon is made of cheese',
		lastSeasonTruth: 0.1,
		numberOfVotes: 100,
		voteRatio: 0.5,
		author: 'Charlie Brown'
	},
	{
		id: '1',
		type: 'statement',
		text: 'Humans can breathe underwater without equipment',
		lastSeasonTruth: 0.1,
		numberOfVotes: 100,
		voteRatio: 0.5,
		author: 'David Williams'
	},
	{
		id: '1',
		type: 'statement',
		text: 'Light travels faster than sound',
		lastSeasonTruth: 0.9,
		numberOfVotes: 100,
		voteRatio: 0.85,
		author: 'Eve Thompson'
	},
	{
		id: '1',
		type: 'statement',
		text: 'The Great Wall of China is visible from space',
		lastSeasonTruth: 0.2,
		numberOfVotes: 100,
		voteRatio: 0.5,
		author: 'Frank Clark'
	},
	{
		id: '1',
		type: 'statement',
		text: 'The speed of light is approximately 300,000 km/s',
		lastSeasonTruth: 0.9,
		numberOfVotes: 100,
		voteRatio: 0.9,
		author: 'Grace Lee'
	},
	{
		id: '1',
		type: 'statement',
		text: 'Bananas are berries',
		lastSeasonTruth: 0.8,
		numberOfVotes: 100,
		voteRatio: 0.65,
		author: 'Henry Adams'
	},
	{
		id: '1',
		type: 'statement',
		text: 'Sharks are mammals',
		lastSeasonTruth: 0.1,
		numberOfVotes: 100,
		voteRatio: 0.5,
		author: 'Isabella Martinez'
	},
	{
		id: '1',
		type: 'statement',
		text: 'A year on Venus is shorter than a day on Venus',
		lastSeasonTruth: 0.9,
		numberOfVotes: 100,
		voteRatio: 0.7,
		author: 'Jack Davis'
	},
	{
		id: '1',
		type: 'statement',
		text: 'Goldfish have a memory span of three seconds',
		lastSeasonTruth: 0.1,
		numberOfVotes: 100,
		voteRatio: 0.5,
		author: 'Karen Wilson'
	},
	{
		id: '1',
		type: 'statement',
		text: 'Honey never spoils',
		lastSeasonTruth: 0.9,
		numberOfVotes: 100,
		voteRatio: 0.8,
		author: 'Linda Scott'
	},
	{
		id: '1',
		type: 'statement',
		text: 'Humans have more than five senses',
		lastSeasonTruth: 0.8,
		numberOfVotes: 100,
		voteRatio: 0.75,
		author: 'Michael Young'
	},
	{
		id: '1',
		type: 'statement',
		text: 'Tomatoes are vegetables',
		lastSeasonTruth: 0.1,
		numberOfVotes: 100,
		voteRatio: 0.5,
		author: 'Nancy King'
	}
];

const connections: IConnection[] = [
	{
		id: '1',
		type: 'connection',
		thesis: '1',
		argument: '1',
		isProArgument: true,
		weight: 0.8,
		numberOfVotes: 100,
		isTrueVotes: 80,
		creator: 'Oscar Brown'
	},
	{
		id: '1',
		type: 'connection',
		thesis: '1',
		argument: '1',
		isProArgument: true,
		weight: 0.8,
		numberOfVotes: 100,
		isTrueVotes: 80,
		creator: 'Oscar Brown'
	},
	{
		id: '1',
		type: 'connection',
		thesis: '1',
		argument: '1',
		isProArgument: true,
		weight: 0.8,
		numberOfVotes: 100,
		isTrueVotes: 80,
		creator: 'Oscar Brown'
	},
	{
		id: '1',
		type: 'connection',
		thesis: '1',
		argument: '1',
		isProArgument: true,
		weight: 0.8,
		numberOfVotes: 100,
		isTrueVotes: 80,
		creator: 'Oscar Brown'
	},
	{
		id: '1',
		type: 'connection',
		thesis: '1',
		argument: '1',
		isProArgument: true,
		weight: 0.8,
		numberOfVotes: 100,
		isTrueVotes: 80,
		creator: 'Oscar Brown'
	},
	{
		id: '1',
		type: 'connection',
		thesis: '1',
		argument: '1',
		isProArgument: true,
		weight: 0.8,
		numberOfVotes: 100,
		isTrueVotes: 80,
		creator: 'Oscar Brown'
	},
	{
		id: '1',
		type: 'connection',
		thesis: '1',
		argument: '1',
		isProArgument: true,
		weight: 0.8,
		numberOfVotes: 100,
		isTrueVotes: 80,
		creator: 'Oscar Brown'
	},
	{
		id: '1',
		type: 'connection',
		thesis: '1',
		argument: '1',
		isProArgument: true,
		weight: 0.8,
		numberOfVotes: 100,
		isTrueVotes: 80,
		creator: 'Oscar Brown'
	},
	{
		id: '1',
		type: 'connection',
		thesis: '1',
		argument: '1',
		isProArgument: true,
		weight: 0.8,
		numberOfVotes: 100,
		isTrueVotes: 80,
		creator: 'Oscar Brown'
	},
	{
		id: '1',
		type: 'connection',
		thesis: '1',
		argument: '1',
		isProArgument: true,
		weight: 0.8,
		numberOfVotes: 100,
		isTrueVotes: 80,
		creator: 'Oscar Brown'
	},
	{
		id: '1',
		type: 'connection',
		thesis: '1',
		argument: '1',
		isProArgument: false,
		weight: 0.7,
		numberOfVotes: 100,
		isTrueVotes: 70,
		creator: 'Oscar Brown'
	},
	{
		id: '1',
		type: 'connection',
		thesis: '1',
		argument: '1',
		isProArgument: true,
		weight: 0.8,
		numberOfVotes: 100,
		isTrueVotes: 80,
		creator: 'Oscar Brown'
	},
	{
		id: '1',
		type: 'connection',
		thesis: '1',
		argument: '1',
		isProArgument: false,
		weight: 0.6,
		numberOfVotes: 100,
		isTrueVotes: 60,
		creator: 'Oscar Brown'
	},
	{
		id: '1',
		type: 'connection',
		thesis: '1',
		argument: '1',
		isProArgument: true,
		weight: 0.8,
		numberOfVotes: 100,
		isTrueVotes: 80,
		creator: 'Oscar Brown'
	},
	{
		id: '1',
		type: 'connection',
		thesis: '1',
		argument: '1',
		isProArgument: false,
		weight: 0.75,
		numberOfVotes: 100,
		isTrueVotes: 75,
		creator: 'Oscar Brown'
	},
	{
		id: '1',
		type: 'connection',
		thesis: '1',
		argument: '1',
		isProArgument: true,
		weight: 0.8,
		numberOfVotes: 100,
		isTrueVotes: 80,
		creator: 'Oscar Brown'
	},
	{
		id: '1',
		type: 'connection',
		thesis: '1',
		argument: '1',
		isProArgument: false,
		weight: 0.65,
		numberOfVotes: 100,
		isTrueVotes: 65,
		creator: 'Oscar Brown'
	},
	{
		id: '1',
		type: 'connection',
		thesis: '1',
		argument: '1',
		isProArgument: true,
		weight: 0.8,
		numberOfVotes: 100,
		isTrueVotes: 80,
		creator: 'Oscar Brown'
	},
	{
		id: '1',
		type: 'connection',
		thesis: '1',
		argument: '1',
		isProArgument: false,
		weight: 0.7,
		numberOfVotes: 100,
		isTrueVotes: 70,
		creator: 'Oscar Brown'
	},
	{
		id: '1',
		type: 'connection',
		thesis: '1',
		argument: '1',
		isProArgument: true,
		weight: 0.8,
		numberOfVotes: 100,
		isTrueVotes: 80,
		creator: 'Oscar Brown'
	},
	{
		id: '1',
		type: 'connection',
		thesis: '1',
		argument: '1',
		isProArgument: false,
		weight: 0.6,
		numberOfVotes: 100,
		isTrueVotes: 60,
		creator: 'Oscar Brown'
	},
	{
		id: '1',
		type: 'connection',
		thesis: '1',
		argument: '1',
		isProArgument: true,
		weight: 0.8,
		numberOfVotes: 100,
		isTrueVotes: 80,
		creator: 'Oscar Brown'
	},
	{
		id: '1',
		type: 'connection',
		thesis: '1',
		argument: '1',
		isProArgument: false,
		weight: 0.75,
		numberOfVotes: 100,
		isTrueVotes: 75,
		creator: 'Oscar Brown'
	},
	{
		id: '1',
		type: 'connection',
		thesis: '1',
		argument: '1',
		isProArgument: true,
		weight: 0.8,
		numberOfVotes: 100,
		isTrueVotes: 80,
		creator: 'Oscar Brown'
	}
];

const duplictons: IDuplication[] = [
	{
		id: '1',
		type: 'duplication',
		statementA: '1',
		statementB: '1',
		numberOfVotes: 100,
		isDuplicateVotes: 80
	},
	{
		id: '1',
		type: 'duplication',
		statementA: '1',
		statementB: '1',
		numberOfVotes: 100,
		isDuplicateVotes: 80
	},
	{
		id: '1',
		type: 'duplication',
		statementA: '1',
		statementB: '1',
		numberOfVotes: 100,
		isDuplicateVotes: 75
	},
	{
		id: '1',
		type: 'duplication',
		statementA: '1',
		statementB: '1',
		numberOfVotes: 100,
		isDuplicateVotes: 70
	},
	{
		id: '1',
		type: 'duplication',
		statementA: '1',
		statementB: '1',
		numberOfVotes: 100,
		isDuplicateVotes: 85
	},
	{
		id: '1',
		type: 'duplication',
		statementA: '1',
		statementB: '1',
		numberOfVotes: 100,
		isDuplicateVotes: 90
	},
	{
		id: '1',
		type: 'duplication',
		statementA: '1',
		statementB: '1',
		numberOfVotes: 100,
		isDuplicateVotes: 65
	},
	{
		id: '1',
		type: 'duplication',
		statementA: '1',
		statementB: '1',
		numberOfVotes: 100,
		isDuplicateVotes: 78
	},
	{
		id: '1',
		type: 'duplication',
		statementA: '1',
		statementB: '1',
		numberOfVotes: 100,
		isDuplicateVotes: 82
	},
	{
		id: '1',
		type: 'duplication',
		statementA: '1',
		statementB: '1',
		numberOfVotes: 100,
		isDuplicateVotes: 88
	},
	{
		id: '1',
		type: 'duplication',
		statementA: '1',
		statementB: '1',
		numberOfVotes: 100,
		isDuplicateVotes: 77
	},
	{
		id: '1',
		type: 'duplication',
		statementA: '1',
		statementB: '1',
		numberOfVotes: 100,
		isDuplicateVotes: 85
	},
	{
		id: '1',
		type: 'duplication',
		statementA: '1',
		statementB: '1',
		numberOfVotes: 100,
		isDuplicateVotes: 80
	},
	{
		id: '1',
		type: 'duplication',
		statementA: '1',
		statementB: '1',
		numberOfVotes: 100,
		isDuplicateVotes: 90
	},
	{
		id: '1',
		type: 'duplication',
		statementA: '1',
		statementB: '1',
		numberOfVotes: 100,
		isDuplicateVotes: 75
	},
	{
		id: '1',
		type: 'duplication',
		statementA: '1',
		statementB: '1',
		numberOfVotes: 100,
		isDuplicateVotes: 70
	}
];

export function getEntityDB(
	id: string,
	entityType: IEntityType
) {
	switch (entityType) {
		case 'connection': {
			let i = Math.floor(Math.random() * connections.length);
			return connections[i];
		}
		case 'duplication': {

			let i = Math.floor(Math.random() * duplictons.length);
			return duplictons[i];
		}
		case 'statement': {
			const i = Math.floor(Math.random() * statements.length);
			return statements[0];
		}
	}
}
export function findConnectiveForDB(
	id: string,
	entity: IConnectiveType,
	except?: string[]
): IConnection[] | IDuplication[] {
	console.log("helloooooooooo");
	switch (entity) {
		case 'argument':
			return connections;

		case 'thesis':
			return connections;

		case 'duplication':
			return duplictons;
	}
}

export function getRecommendationDB(): Record<string, IEntityType> {
	return { "1": 'statement', "2": 'connection', "3": 'duplication' };
}

export function getHistoryDB(
	skip?: number,
	limit?: number
): { ids: string[]; types: IEntityType[] } {
	return { ids: ["1"], types: ["statement"] };
}

export function searchForEntitiesDB(searchTerm: string, filterOptions: IFilterOptions) {
	return statements.sort(() => Math.random() - 0.5);
}

export function createDuplicationDB(statementA: string, statementB: string) {
	return "1" // id 
}


export function createConnectionDB(statementThesis: string, statementArgument: string, isProArgument: boolean) {
	return "1" // id 
}

export function createStatementDB(text: string, tags?: string[]) {
	return "1" // id 
}

export function voteForEntityDB(id: string, entityType: IEntityType, value: number) {
	if (entityType == 'duplication')
		return "1" // id
	else if (entityType == 'connection')
		return "1" // id
	else
		return "1" // id 
}