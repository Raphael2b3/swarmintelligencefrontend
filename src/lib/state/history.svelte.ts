import { getHistoryDB } from '$lib/database';
import type { IEntityType } from '$lib/interfaces';
import { getEntity } from './entities.svelte';

const PAGE_SIZE = 10;
// history = [ [id,entityType],...]


class HistoryManager {
	_bypass = false;
	historyKeys: string[] = $state([]);
	entityTypes: IEntityType[] = [];

	index = $state(0);
	current_entities = $derived(this.get_current_entities());

	constructor() {
		this.refresh();
	}
	get_current_entities() {
		let start = PAGE_SIZE * this.index;
		if (start >= this.historyKeys.length) return [];
		const end = PAGE_SIZE * (this.index + 1) <= this.historyKeys.length ? PAGE_SIZE * (this.index + 1) : this.historyKeys.length;
		return this.historyKeys.slice(start, end).map((k, index) => getEntity(k, this.entityTypes[index]));
	}

	refresh() {
		this.index = 0;
		const obj = getHistoryDB();
		this.historyKeys = obj.ids;
		this.entityTypes = obj.types;

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
		const index = this.historyKeys.indexOf(id, 0);
		if (index > -1) {
			this.historyKeys.splice(index, 1);
		}
		this.historyKeys = [id, ...this.historyKeys];
	}

	get bypass() {
		return this._bypass;
	}

	set bypass(bypass: boolean) {
		this._bypass = bypass;
	}
}
export const historyManager = new HistoryManager();
