import { getRecommendationDB } from '$lib/database';
import type { IEntity, IEntityType } from '$lib/interfaces';
import { getEntity } from './entities.svelte';

let recommendationsPool: Record<string, IEntityType> = {};

class RecommendationManager {
	constructor() {
		this.refresh();
	}
	index = 0;
	current_entity?: IEntity = $state();
	refresh() {
		recommendationsPool = getRecommendationDB();
		const id = Object.keys(recommendationsPool)[0];
		this.current_entity = getEntity(id, recommendationsPool[id]);
	}
	get current() {
		return this.current_entity;
	}
	getNext() {

		const id = recommendationsPool[(this.index + 1) % Object.keys(recommendationsPool).length];
		this.current_entity = getEntity(id, recommendationsPool[id]);
	}
	getPrevious() {
		const id = recommendationsPool[(this.index - 1) % recommendationsPool.keys.length];
		this.current_entity = getEntity(id, recommendationsPool[id]);
	}
}
export const recommendationManager = new RecommendationManager();
