import { getRecommendation } from '$lib/database';
import type { IEntity } from '$lib/interfaces';
import { getEntity } from './entities.svelte';

let recommendationsPool: Record<string, 'statement' | 'connection' | 'duplication'> = {};

class RecommendationManager {
	constructor() {
		this.refresh();
	}
	index = 0;
	current_entity?: IEntity = $state();
	refresh() {
		recommendationsPool = getRecommendation();
		const id = Object.keys(recommendationsPool)[0];
		this.current_entity = getEntity(id, recommendationsPool[id]);
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
