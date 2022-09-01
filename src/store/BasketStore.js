import {makeAutoObservable} from 'mobx'

export default class BasketStore {
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

	plusItem(id, sum) {
		let isExist = false
		this._basket = this._basket.map((item) => {
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

	minusItem(id, sum) {
		this._basket = this._basket.map((item) => {
			if (item.id === id) {
				if (item.amount - 1 === 0) {
					this.minusBasket(sum)
					return {id: id, amount: null, sum: sum}
				}
				this.minusBasket(sum)
				return {id: id, amount: item.amount - 1, sum: sum}
			} else return item
		})
		this._basket = this._basket.filter((item) => {
			return item.amount
		})
	}

	minusBasket(price) {
		this._basketAmount--
		this._basketPrice -= price
	}

	plusBasket(price) {
		this._basketAmount++
		this._basketPrice += price
	}

	getAmountById(id) {
		const item = this._basket.find((item) => {
			return item.id === id
		})
		return item ? item.amount : null
	}

	deleteById(id) {
		this._basket = this._basket.filter((item) => {
			if (item.id === id) {
				this._basketAmount -= item.amount
				this._basketPrice -= (item.sum * item.amount)
			}
			return item.id !== id
		})
	}
}
