import {makeAutoObservable} from 'mobx'
import {Category} from "../types/categoryType";



const menu = [
	{
		id: 1,
		title: 'Химчистка',
		options: [
			{id: 1, title: 'Аксессуары'},
			{id: 2, title: 'Верхняя одежда'},
			{id: 3, title: 'Деловой костюм'},
			{id: 4, title: 'Джинса'},
			{id: 5, title: 'Куртка и пуховик'},
			{id: 6, title: 'Пальто и плащ'},
		]
	},
	{
		id: 2,
		title: 'Аквачистка',
		options: [
			{id: 7, title: 'Пальто'},
			{id: 8, title: 'Верхняя пуховик'},
			{id: 9, title: 'Куртка костюм'},
			{id: 10, title: 'Джинса'},
			{id: 11, title: 'Куртка и пуховик'},
			{id: 12, title: 'Пальто и плащ'},
		]
	},
	{
		id: 3,
		title: 'Ремонт одежды',
		options: [
			{id: 13, title: 'Аксессуары'},
			{id: 14, title: 'Верхняя Джинса'},
			{id: 15, title: 'Деловой Джинса'},
			{id: 16, title: 'Джинса'},
			{id: 17, title: 'Куртка и Джинса'},
			{id: 18, title: 'Пальто и Джинса'},
		]
	},
	{
		id: 4,
		title: 'Химчистка',
		options: [
			{id: 19, title: 'Аксессуары'},
			{id: 20, title: 'Верхняя одежда'},
			{id: 21, title: 'Деловой одежда'},
			{id: 22, title: 'Джинса'},
			{id: 23, title: 'Куртка и одежда'},
			{id: 24, title: 'Пальто и одежда'},
		]
	},
	{
		id: 5,
		title: 'Аквачистка',
		options: [
			{id: 25, title: 'Аксессуары'},
			{id: 26, title: 'Верхняя одежда'},
			{id: 27, title: 'Деловой костюм'},
			{id: 28, title: 'Джинса'},
			{id: 29, title: 'Куртка и пуховик'},
			{id: 30, title: 'Пальто и плащ'},
		]
	},
	{
		id: 6,
		title: 'Ремонт одежды',
		options: [
			{id: 31, title: 'Аксессуары'},
			{id: 32, title: 'Верхняя Верхняя'},
			{id: 33, title: 'Верхняя костюм'},
			{id: 34, title: 'Верхняя'},
			{id: 35, title: 'Верхняя и пуховик'},
			{id: 36, title: 'Пальто и Верхняя'},
		]
	}
]

export default class CategoryStore {

	_categories: Category[]
	_selectedCategory: number
	_selectedOption: number
	_activeCat: number
	constructor() {
		this._categories = menu
		this._selectedCategory = 1
		this._selectedOption = 0
		this._activeCat = 0
		makeAutoObservable(this)
	}

	get categories() {
		return this._categories
	}

	get selectedCategory() {
		return this._selectedCategory
	}

	get selectedOption() {
		return this._selectedOption
	}

	get activeCat() {
		return this._activeCat
	}

	setCategories(value: Category[]) {
		this._categories = value
	}

	setSelectedCategory(value: number) {
		this._selectedCategory = value
	}

	setSelectedOption(value: number) {
		this._selectedOption = value
	}

	getTitleById(id: number) {
		let item  = this._categories.find((category) => {
			return category.id === id
		})
		return item ? item.title : ''
	}

	setActiveCat(value: number) {
		this._activeCat = value
	}


}