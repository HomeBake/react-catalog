import {makeAutoObservable} from 'mobx'
import {Item} from "../types/itemType";


const itemInfo = [
	{id: 1, title: 'Пальто, полупальто с подстежкой из натурального меха', price: 1400, type: 1, option: 1},
	{id: 2, title: 'Пиджак', price: 20, type: 1, option: 2},
	{id: 3, title: 'Пиджак натуральный шелк', price: 123, type: 1, option: 3},
	{id: 4, title: 'Пиджак с коротким рукавом без подклада', price: 12312321, type: 1, option: 4},
	{id: 5, title: 'Пиджак натуральный шёлк с коротким рукавом', price: 210, type: 1, option: 5},
	{id: 6, title: ' с подстежкой из натурального меха', price: 1600, type: 2, option: 7},
	{id: 7, title: 'Пальто, полупальто с подстежкой из  меха', price: 1800, type: 3, option: 13},
	{id: 8, title: 'натурального меха', price: 14800, type: 4, option: 19},
	{id: 9, title: 'Пальто, полупальто с из натурального меха', price: 14080, type: 5, option: 25},
	{id: 10, title: 'Пальто,  из натурального меха', price: 14040, type: 6, option: 31},
]


export default class ItemStore {

	_itemInfo: Item[]
	_itemSearch: string

	constructor() {
		this._itemInfo = itemInfo
		this._itemSearch = '' // Better do store for search
		makeAutoObservable(this)
	}
	get itemSearch(): string {
		return this._itemSearch;
	}

	setItemSearch(value: string) {
		this._itemSearch = value;
	}

	get items() {
		return this._itemInfo
	}

	setItems(value: Item[]) {
		this._itemInfo = value
	}

	getByCategory(categoryId: number) {
		return this._itemInfo.filter((item) => {
			return item.type === categoryId
		})
	}

	getItemNyFilters(categoryId: number, optionId:number) {
		return this._itemInfo.filter((item) => {
			const isItemCategory = item.type === categoryId
			const isItemSearch = item.title.includes(this._itemSearch)
			const isItemOption = item.option === optionId
			if (optionId) {
				return (
					isItemCategory &&
					isItemSearch &&
					isItemOption
				)
			}
			else {
				return (
					isItemCategory &&
					isItemSearch
				)
			}

		})
	}

	getById(id: number) {
		return this._itemInfo.find((item) => {
			return item.id === id
		})
	}
}