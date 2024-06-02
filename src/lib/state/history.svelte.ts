import { getHistory } from '$lib/database';
import type { entityType } from '$lib/interfaces';
import { getEntity } from './entities.svelte';

const PAGE_SIZE = 10;
// history = [ [id,entityType],...]
let historyKeys: string[] = $state([]);
let entityTypes: entityType[] = ['statement', 'connection', 'duplication'];
function current_entities(_history: string[], index: number) {
	let start = PAGE_SIZE * index;

	if (start >= _history.length) return [];

	const end = PAGE_SIZE * (index + 1) <= _history.length ? PAGE_SIZE * (index + 1) : _history.length;

	return _history.slice(start, end).map((k, index) => getEntity(k, entityTypes[index]));
}

class HistoryManager {
	_bypass = false;
	constructor() {
		this.refresh();
	}

	index = $state(0);
	current_entities = $derived(current_entities(historyKeys, this.index));

	refresh() {
		this.index = 0;
		const history_objects = getHistory();
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
		if (this._bypass) return;
		const index = historyKeys.indexOf(id, 0);
		if (index > -1) {
			historyKeys.splice(index, 1);
		}
		historyKeys = [id, ...historyKeys];
	}

	get bypass() {
		return this._bypass;
	}

	set bypass(bypass: boolean) {
		this._bypass = bypass;
	}
}
export const historyManager = new HistoryManager();
