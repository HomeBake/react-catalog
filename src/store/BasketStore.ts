import {makeAutoObservable} from 'mobx'

interface BasketItem {
	id: number
	amount: number
	sum: number
}

export default class BasketStore {
	_basket: BasketItem[]
	_basketAmount: number
	_basketPrice: number
	constructor() {
		this._basket = [] // [{id: 1, amount: 5, sum: 1400}]
		this._basketAmount = 0
		this._basketPrice = 0
		makeAutoObservable(this)
	}

	get basket() {
		return this._basket
	}

	get basketAmount() {
		return this._basketAmount
	}

	get basketPrice() {
		return this._basketPrice
	}

	plusItem(id: number, sum: number) {
		let isExist = false
		this._basket = this._basket.map((item: BasketItem) => {
			if (item.id === id) {
				isExist = true
				this.plusBasket(sum)
				return {id: id, amount: item.amount + 1, sum: sum}
			} else return item
		})
		if (!isExist) {
			this.plusBasket(sum)
			this._basket = [...this._basket, {id: id, amount: 1, sum: sum}]
		}
	}

	minusItem(id: number, sum: number) {
		this._basket = this._basket.map((item) => {
			if (item.id === id) {
				if (item.amount - 1 === 0) {
					this.minusBasket(sum)
					return {id: id, amount: 0, sum: sum}
				}
				this.minusBasket(sum)
				return {id: id, amount: item.amount - 1, sum: sum}
			} else return item
		})
		this._basket = this._basket.filter((item) => {
			return item.amount
		})
	}

	minusBasket(price: number) {
		this._basketAmount--
		this._basketPrice -= price
	}

	plusBasket(price: number) {
		this._basketAmount++
		this._basketPrice += price
	}

	getAmountById(id: number) {
		const item = this._basket.find((item) => {
			return item.id === id
		})
		return item ? item.amount : null
	}

	deleteById(id: number) {
		this._basket = this._basket.filter((item) => {
			if (item.id === id) {
				this._basketAmount -= item.amount
				this._basketPrice -= (item.sum * item.amount)
			}
			return item.id !== id
		})
	}
}
