import { getRecommendationDB } from '$lib/database';
import type { IEntity, IEntityType } from '$lib/interfaces';
import { getEntity } from './entities.svelte';


class RecommendationManager {
	constructor() {
		this.refresh();
	}
	recommendationsPool: Record<string, IEntityType> = $state({});
	index = $state(0);

	keys = $derived(Object.keys(this.recommendationsPool));
	id = $derived(this.keys[this.index % this.keys.length]);
	current_entity?: IEntity = $derived(getEntity(this.id, this.recommendationsPool[this.id]));

	get current() {
		return this.current_entity;
	}
	refresh() {
		this.recommendationsPool = getRecommendationDB();
		this.index = 0;
	}
	getNext() {
		this.index++;
	}
	getPrevious() {
		this.index--;
	}
}
export const recommendationManager = new RecommendationManager();
