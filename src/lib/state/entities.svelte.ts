import { getRecommendation } from '$lib/database';

let recommendationsPool = getRecommendation();
let index = $state(0);
class RecommendationManager {
	_current = $derived(recommendationsPool ? recommendationsPool[index] : undefined);
	get current() {
		return this._current;
	}
	getNext() {
		console.log('getNext');
		index = index + 1;
		console.log(index);
	}
	getPrevious() {
		index = (index - 1) % recommendationsPool.length;
	}
}

export const recommendationManager = new RecommendationManager();
