import { getHistory } from '$lib/database';
import { getStatement } from './entities.svelte';

const PAGE_SIZE = 10;

let history: string[] = $state([]);

function current_entities(_history: string[], index: number) {

	let start = PAGE_SIZE * index;
	if (start >= history.length)
		return [];

	const end = PAGE_SIZE * (index + 1) <= history.length ? PAGE_SIZE * (index + 1) : history.length;

	return history.slice(start, end).map(getStatement)
}

class HistoryManager {

	constructor() {
		//this.refresh();
	}

	index = $state(0);
	current_entities = $derived(current_entities(history, this.index));

	refresh() {
		this.index = 0;
		history = getHistory();
	}

	get current() {
		return this.current_entities;
	}

	getNext() {
		this.index++;
	}

	getPrevious() {
		this.index--;
	}

	watch(id: string) {
		const index = history.indexOf(id, 0);
		if (index > -1) {
			history.splice(index, 1);
		}
		history = [id, ...history];
	}
}
export const historyManager = new HistoryManager();
