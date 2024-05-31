import { getRecommendation } from '$lib/database';
import type { IEntity } from '$lib/interfaces';
import { getStatement } from './entities.svelte';

let recommendationsPool: string[] = [];

class RecommendationManager {
	constructor() {
		this.refresh();
	}
	index = 0;
	current_entity?: IEntity = $state();
	refresh() {
		recommendationsPool = getRecommendation();
		this.current_entity = getStatement(recommendationsPool[0]);
	}
	get current() {
		return this.current_entity;
	}
	getNext() {
		const id = recommendationsPool[(this.index + 1) % recommendationsPool.length];
		this.current_entity = getStatement(id);
	}
	getPrevious() {
		const id = recommendationsPool[(this.index - 1) % recommendationsPool.length];
		this.current_entity = getStatement(id);
	}
}
export const recommendationManager = new RecommendationManager();
