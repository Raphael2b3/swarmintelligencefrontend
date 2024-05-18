import type { IConnection, IDuplicationMarker, IStatement } from '$lib/interfaces';

const randomIndex = (length: number) => Math.floor(Math.random() * length);

export function getRecommendation() {
	const statements: IStatement[] = [
		{
			text: 'The earth is flat',
			lastSeasonTruth: 0.1,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'John Doe'
		},
		{
			text: 'The earth is round',
			lastSeasonTruth: 0.9,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'Jane Doe'
		},
		{
			text: 'The earth is a cube',
			lastSeasonTruth: 0.1,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'John Doe'
		},
		{
			text: 'The earth is a pyramid',
			lastSeasonTruth: 0.1,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'John Doe'
		},
		{
			text: 'The earth is a sphere',
			lastSeasonTruth: 0.9,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'Jane Doe'
		},
		{
			text: 'The earth is a cylinder',
			lastSeasonTruth: 0.1,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'John Doe'
		},
		{
			text: 'The earth is a cone',
			lastSeasonTruth: 0.1,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'John Doe'
		},
		{
			text: 'The earth is a dodecahedron',
			lastSeasonTruth: 0.1,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'John Doe'
		},
		{
			text: 'The earth is a tetrahedron',
			lastSeasonTruth: 0.1,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'John Doe'
		},
		{
			text: 'The earth is a octahedron',
			lastSeasonTruth: 0.1,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'John Doe'
		},
		{
			text: 'The earth is an oblate spheroid',
			lastSeasonTruth: 0.9,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'Jane Doe'
		},
		{
			text: 'The earth is hollow',
			lastSeasonTruth: 0.1,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'John Doe'
		},
		{
			text: 'The earth is a torus',
			lastSeasonTruth: 0.1,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'John Doe'
		},
		{
			text: 'The earth is an ellipsoid',
			lastSeasonTruth: 0.9,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'Jane Doe'
		},
		{
			text: 'The earth is a geoid',
			lastSeasonTruth: 0.9,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'Jane Doe'
		},
		{
			text: 'The sun is a star',
			lastSeasonTruth: 0.9,
			numberOfVotes: 100,
			voteRatio: 0.8,
			author: 'Alice Smith'
		},
		{
			text: 'Water boils at 100 degrees Celsius',
			lastSeasonTruth: 0.9,
			numberOfVotes: 100,
			voteRatio: 0.7,
			author: 'Bob Johnson'
		},
		{
			text: 'The moon is made of cheese',
			lastSeasonTruth: 0.1,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'Charlie Brown'
		},
		{
			text: 'Humans can breathe underwater without equipment',
			lastSeasonTruth: 0.1,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'David Williams'
		},
		{
			text: 'Light travels faster than sound',
			lastSeasonTruth: 0.9,
			numberOfVotes: 100,
			voteRatio: 0.85,
			author: 'Eve Thompson'
		},
		{
			text: 'The Great Wall of China is visible from space',
			lastSeasonTruth: 0.2,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'Frank Clark'
		},
		{
			text: 'The speed of light is approximately 300,000 km/s',
			lastSeasonTruth: 0.9,
			numberOfVotes: 100,
			voteRatio: 0.9,
			author: 'Grace Lee'
		},
		{
			text: 'Bananas are berries',
			lastSeasonTruth: 0.8,
			numberOfVotes: 100,
			voteRatio: 0.65,
			author: 'Henry Adams'
		},
		{
			text: 'Sharks are mammals',
			lastSeasonTruth: 0.1,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'Isabella Martinez'
		},
		{
			text: 'A year on Venus is shorter than a day on Venus',
			lastSeasonTruth: 0.9,
			numberOfVotes: 100,
			voteRatio: 0.7,
			author: 'Jack Davis'
		},
		{
			text: 'Goldfish have a memory span of three seconds',
			lastSeasonTruth: 0.1,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'Karen Wilson'
		},
		{
			text: 'Honey never spoils',
			lastSeasonTruth: 0.9,
			numberOfVotes: 100,
			voteRatio: 0.8,
			author: 'Linda Scott'
		},
		{
			text: 'Humans have more than five senses',
			lastSeasonTruth: 0.8,
			numberOfVotes: 100,
			voteRatio: 0.75,
			author: 'Michael Young'
		},
		{
			text: 'Tomatoes are vegetables',
			lastSeasonTruth: 0.1,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'Nancy King'
		}
	];
	const connections: IConnection[] = [
		{
			thesis: statements[randomIndex(statements.length)],
			argument: statements[randomIndex(statements.length)],
			isProArgument: true,
			weight: 0.8,
			numberOfVotes: 100,
			isTrueVotes: 80,
			creator: 'Oscar Brown'
		},
		{
			thesis: statements[randomIndex(statements.length)],
			argument: statements[randomIndex(statements.length)],
			isProArgument: true,
			weight: 0.8,
			numberOfVotes: 100,
			isTrueVotes: 80,
			creator: 'Oscar Brown'
		},
		{
			thesis: statements[randomIndex(statements.length)],
			argument: statements[randomIndex(statements.length)],
			isProArgument: true,
			weight: 0.8,
			numberOfVotes: 100,
			isTrueVotes: 80,
			creator: 'Oscar Brown'
		},
		{
			thesis: statements[randomIndex(statements.length)],
			argument: statements[randomIndex(statements.length)],
			isProArgument: true,
			weight: 0.8,
			numberOfVotes: 100,
			isTrueVotes: 80,
			creator: 'Oscar Brown'
		},
		{
			thesis: statements[randomIndex(statements.length)],
			argument: statements[randomIndex(statements.length)],
			isProArgument: true,
			weight: 0.8,
			numberOfVotes: 100,
			isTrueVotes: 80,
			creator: 'Oscar Brown'
		},
		{
			thesis: statements[randomIndex(statements.length)],
			argument: statements[randomIndex(statements.length)],
			isProArgument: true,
			weight: 0.8,
			numberOfVotes: 100,
			isTrueVotes: 80,
			creator: 'Oscar Brown'
		},
		{
			thesis: statements[randomIndex(statements.length)],
			argument: statements[randomIndex(statements.length)],
			isProArgument: true,
			weight: 0.8,
			numberOfVotes: 100,
			isTrueVotes: 80,
			creator: 'Oscar Brown'
		},
		{
			thesis: statements[randomIndex(statements.length)],
			argument: statements[randomIndex(statements.length)],
			isProArgument: true,
			weight: 0.8,
			numberOfVotes: 100,
			isTrueVotes: 80,
			creator: 'Oscar Brown'
		},
		{
			thesis: statements[randomIndex(statements.length)],
			argument: statements[randomIndex(statements.length)],
			isProArgument: true,
			weight: 0.8,
			numberOfVotes: 100,
			isTrueVotes: 80,
			creator: 'Oscar Brown'
		},
		{
			thesis: statements[randomIndex(statements.length)],
			argument: statements[randomIndex(statements.length)],
			isProArgument: true,
			weight: 0.8,
			numberOfVotes: 100,
			isTrueVotes: 80,
			creator: 'Oscar Brown'
		},
		{
			thesis: statements[randomIndex(statements.length)],
			argument: statements[randomIndex(statements.length)],
			isProArgument: false,
			weight: 0.7,
			numberOfVotes: 100,
			isTrueVotes: 70,
			creator: 'Oscar Brown'
		},
		{
			thesis: statements[randomIndex(statements.length)],
			argument: statements[randomIndex(statements.length)],
			isProArgument: true,
			weight: 0.8,
			numberOfVotes: 100,
			isTrueVotes: 80,
			creator: 'Oscar Brown'
		},
		{
			thesis: statements[randomIndex(statements.length)],
			argument: statements[randomIndex(statements.length)],
			isProArgument: false,
			weight: 0.6,
			numberOfVotes: 100,
			isTrueVotes: 60,
			creator: 'Oscar Brown'
		},
		{
			thesis: statements[randomIndex(statements.length)],
			argument: statements[randomIndex(statements.length)],
			isProArgument: true,
			weight: 0.8,
			numberOfVotes: 100,
			isTrueVotes: 80,
			creator: 'Oscar Brown'
		},
		{
			thesis: statements[randomIndex(statements.length)],
			argument: statements[randomIndex(statements.length)],
			isProArgument: false,
			weight: 0.75,
			numberOfVotes: 100,
			isTrueVotes: 75,
			creator: 'Oscar Brown'
		},
		{
			thesis: statements[randomIndex(statements.length)],
			argument: statements[randomIndex(statements.length)],
			isProArgument: true,
			weight: 0.8,
			numberOfVotes: 100,
			isTrueVotes: 80,
			creator: 'Oscar Brown'
		},
		{
			thesis: statements[randomIndex(statements.length)],
			argument: statements[randomIndex(statements.length)],
			isProArgument: false,
			weight: 0.65,
			numberOfVotes: 100,
			isTrueVotes: 65,
			creator: 'Oscar Brown'
		},
		{
			thesis: statements[randomIndex(statements.length)],
			argument: statements[randomIndex(statements.length)],
			isProArgument: true,
			weight: 0.8,
			numberOfVotes: 100,
			isTrueVotes: 80,
			creator: 'Oscar Brown'
		},
		{
			thesis: statements[randomIndex(statements.length)],
			argument: statements[randomIndex(statements.length)],
			isProArgument: false,
			weight: 0.7,
			numberOfVotes: 100,
			isTrueVotes: 70,
			creator: 'Oscar Brown'
		},
		{
			thesis: statements[randomIndex(statements.length)],
			argument: statements[randomIndex(statements.length)],
			isProArgument: true,
			weight: 0.8,
			numberOfVotes: 100,
			isTrueVotes: 80,
			creator: 'Oscar Brown'
		},
		{
			thesis: statements[randomIndex(statements.length)],
			argument: statements[randomIndex(statements.length)],
			isProArgument: false,
			weight: 0.6,
			numberOfVotes: 100,
			isTrueVotes: 60,
			creator: 'Oscar Brown'
		},
		{
			thesis: statements[randomIndex(statements.length)],
			argument: statements[randomIndex(statements.length)],
			isProArgument: true,
			weight: 0.8,
			numberOfVotes: 100,
			isTrueVotes: 80,
			creator: 'Oscar Brown'
		},
		{
			thesis: statements[randomIndex(statements.length)],
			argument: statements[randomIndex(statements.length)],
			isProArgument: false,
			weight: 0.75,
			numberOfVotes: 100,
			isTrueVotes: 75,
			creator: 'Oscar Brown'
		},
		{
			thesis: statements[randomIndex(statements.length)],
			argument: statements[randomIndex(statements.length)],
			isProArgument: true,
			weight: 0.8,
			numberOfVotes: 100,
			isTrueVotes: 80,
			creator: 'Oscar Brown'
		}
	];

	const duplactonMarkers: IDuplicationMarker[] = [
		{
			statementA: statements[randomIndex(statements.length)],
			statementB: statements[randomIndex(statements.length)],
			numberOfVotes: 100,
			isDuplicateVotes: 80
		},
		{
			statementA: statements[randomIndex(statements.length)],
			statementB: statements[randomIndex(statements.length)],
			numberOfVotes: 100,
			isDuplicateVotes: 80
		},
		{
			statementA: statements[randomIndex(statements.length)],
			statementB: statements[randomIndex(statements.length)],
			numberOfVotes: 100,
			isDuplicateVotes: 75
		},
		{
			statementA: statements[randomIndex(statements.length)],
			statementB: statements[randomIndex(statements.length)],
			numberOfVotes: 100,
			isDuplicateVotes: 70
		},
		{
			statementA: statements[randomIndex(statements.length)],
			statementB: statements[randomIndex(statements.length)],
			numberOfVotes: 100,
			isDuplicateVotes: 85
		},
		{
			statementA: statements[randomIndex(statements.length)],
			statementB: statements[randomIndex(statements.length)],
			numberOfVotes: 100,
			isDuplicateVotes: 90
		},
		{
			statementA: statements[randomIndex(statements.length)],
			statementB: statements[randomIndex(statements.length)],
			numberOfVotes: 100,
			isDuplicateVotes: 65
		},
		{
			statementA: statements[randomIndex(statements.length)],
			statementB: statements[randomIndex(statements.length)],
			numberOfVotes: 100,
			isDuplicateVotes: 78
		},
		{
			statementA: statements[randomIndex(statements.length)],
			statementB: statements[randomIndex(statements.length)],
			numberOfVotes: 100,
			isDuplicateVotes: 82
		},
		{
			statementA: statements[randomIndex(statements.length)],
			statementB: statements[randomIndex(statements.length)],
			numberOfVotes: 100,
			isDuplicateVotes: 88
		},
		{
			statementA: statements[randomIndex(statements.length)],
			statementB: statements[randomIndex(statements.length)],
			numberOfVotes: 100,
			isDuplicateVotes: 77
		},
		{
			statementA: statements[randomIndex(statements.length)],
			statementB: statements[randomIndex(statements.length)],
			numberOfVotes: 100,
			isDuplicateVotes: 85
		},
		{
			statementA: statements[randomIndex(statements.length)],
			statementB: statements[randomIndex(statements.length)],
			numberOfVotes: 100,
			isDuplicateVotes: 80
		},
		{
			statementA: statements[randomIndex(statements.length)],
			statementB: statements[randomIndex(statements.length)],
			numberOfVotes: 100,
			isDuplicateVotes: 90
		},
		{
			statementA: statements[randomIndex(statements.length)],
			statementB: statements[randomIndex(statements.length)],
			numberOfVotes: 100,
			isDuplicateVotes: 75
		},
		{
			statementA: statements[randomIndex(statements.length)],
			statementB: statements[randomIndex(statements.length)],
			numberOfVotes: 100,
			isDuplicateVotes: 70
		}
	];

	const recommendations = [...connections, ...duplactonMarkers, ...statements];
	//shuffle array

	return recommendations.sort(() => Math.random() - 0.5);
}

export function searchForStatement(searchTerm: string) {
	const statements: IStatement[] = [
		{
			text: 'The earth is flat',
			lastSeasonTruth: 0.1,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'John Doe'
		},
		{
			text: 'The earth is round',
			lastSeasonTruth: 0.9,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'Jane Doe'
		},
		{
			text: 'The earth is a cube',
			lastSeasonTruth: 0.1,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'John Doe'
		},
		{
			text: 'The earth is a pyramid',
			lastSeasonTruth: 0.1,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'John Doe'
		},
		{
			text: 'The earth is a sphere',
			lastSeasonTruth: 0.9,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'Jane Doe'
		},
		{
			text: 'The earth is a cylinder',
			lastSeasonTruth: 0.1,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'John Doe'
		},
		{
			text: 'The earth is a cone',
			lastSeasonTruth: 0.1,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'John Doe'
		},
		{
			text: 'The earth is a dodecahedron',
			lastSeasonTruth: 0.1,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'John Doe'
		},
		{
			text: 'The earth is a tetrahedron',
			lastSeasonTruth: 0.1,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'John Doe'
		},
		{
			text: 'The earth is a octahedron',
			lastSeasonTruth: 0.1,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'John Doe'
		},
		{
			text: 'The earth is an oblate spheroid',
			lastSeasonTruth: 0.9,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'Jane Doe'
		},
		{
			text: 'The earth is hollow',
			lastSeasonTruth: 0.1,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'John Doe'
		},
		{
			text: 'The earth is a torus',
			lastSeasonTruth: 0.1,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'John Doe'
		},
		{
			text: 'The earth is an ellipsoid',
			lastSeasonTruth: 0.9,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'Jane Doe'
		},
		{
			text: 'The earth is a geoid',
			lastSeasonTruth: 0.9,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'Jane Doe'
		},
		{
			text: 'The sun is a star',
			lastSeasonTruth: 0.9,
			numberOfVotes: 100,
			voteRatio: 0.8,
			author: 'Alice Smith'
		},
		{
			text: 'Water boils at 100 degrees Celsius',
			lastSeasonTruth: 0.9,
			numberOfVotes: 100,
			voteRatio: 0.7,
			author: 'Bob Johnson'
		},
		{
			text: 'The moon is made of cheese',
			lastSeasonTruth: 0.1,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'Charlie Brown'
		},
		{
			text: 'Humans can breathe underwater without equipment',
			lastSeasonTruth: 0.1,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'David Williams'
		},
		{
			text: 'Light travels faster than sound',
			lastSeasonTruth: 0.9,
			numberOfVotes: 100,
			voteRatio: 0.85,
			author: 'Eve Thompson'
		},
		{
			text: 'The Great Wall of China is visible from space',
			lastSeasonTruth: 0.2,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'Frank Clark'
		},
		{
			text: 'The speed of light is approximately 300,000 km/s',
			lastSeasonTruth: 0.9,
			numberOfVotes: 100,
			voteRatio: 0.9,
			author: 'Grace Lee'
		},
		{
			text: 'Bananas are berries',
			lastSeasonTruth: 0.8,
			numberOfVotes: 100,
			voteRatio: 0.65,
			author: 'Henry Adams'
		},
		{
			text: 'Sharks are mammals',
			lastSeasonTruth: 0.1,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'Isabella Martinez'
		},
		{
			text: 'A year on Venus is shorter than a day on Venus',
			lastSeasonTruth: 0.9,
			numberOfVotes: 100,
			voteRatio: 0.7,
			author: 'Jack Davis'
		},
		{
			text: 'Goldfish have a memory span of three seconds',
			lastSeasonTruth: 0.1,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'Karen Wilson'
		},
		{
			text: 'Honey never spoils',
			lastSeasonTruth: 0.9,
			numberOfVotes: 100,
			voteRatio: 0.8,
			author: 'Linda Scott'
		},
		{
			text: 'Humans have more than five senses',
			lastSeasonTruth: 0.8,
			numberOfVotes: 100,
			voteRatio: 0.75,
			author: 'Michael Young'
		},
		{
			text: 'Tomatoes are vegetables',
			lastSeasonTruth: 0.1,
			numberOfVotes: 100,
			voteRatio: 0.5,
			author: 'Nancy King'
		}
	];
	return statements.sort(() => Math.random() - 0.5);
}
