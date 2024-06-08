import { getHistoryDB } from '$lib/database';
import type { IEntityType } from '$lib/interfaces';
import { getEntity } from './entities.svelte';

const PAGE_SIZE = 10;
// history = [ [id,entityType],...]




class HistoryManager {
	#bypass = false;
	historyKeys: string[] = $state([]);
	entityTypes: IEntityType[] = [];
	index = $state(0);
	start = $derived(PAGE_SIZE * this.index);
	end = $derived(PAGE_SIZE * (this.index + 1) <= this.historyKeys.length ? PAGE_SIZE * (this.index + 1) : this.historyKeys.length);
	current_entities = $derived(this.historyKeys.slice(this.start, this.end).map((k, index) => getEntity(k, this.entityTypes[index])));

	constructor() {

		this.refresh();
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
		if (this.index + 1 >= this.historyKeys.length) return;
		this.index++;
	}

	getPrevious() {
		if (this.index - 1 < 0) return;
		this.index--;

	}

	watch(id: string, entityType: IEntityType) {
		if (this.#bypass) return;
		const index = this.historyKeys.indexOf(id, 0);
		if (index > -1) {
			this.historyKeys.splice(index, 1);
			this.entityTypes.splice(index, 1);
		}
		this.historyKeys = [id, ...this.historyKeys];
		this.entityTypes = [entityType, ...this.entityTypes];
	}

	get bypass() {
		return this.#bypass;
	}

	set bypass(bypass: boolean) {
		this.#bypass = bypass;
	}
}
export const historyManager = new HistoryManager();
