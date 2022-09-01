import {makeAutoObservable} from "mobx";

function sortByField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}

export default class BasketStore {
    constructor() {
        this._basket = [] // [{id: 1, amount: 5, sum: 1400, type: 'Химчистка'}]
        this._basketAmount = 0
        this._basketPrice = 0
        makeAutoObservable(this)
    }

    get basket() {
        return this._basket;
    }

    setBasket(id, num, sum, type) {
        let isExist = false;
        this._basket = this._basket.map((item)=>{
            if (item.id === id) {
                isExist = true;
                if (num === 0) {
                    return {id: id, amount: null, sum: sum, type: type}
                }
                return {id: id, amount: num, sum: sum, type: type}
            }
            else return item
        })
        this._basket = this._basket.filter((item) => {
            return item.amount
        })
        if (!isExist) {
            this._basket = [...this._basket,{id: id, amount: 1, sum: sum, type: type}]
        }
        this._basket.sort(sortByField('type'))
    }

    get basketAmount() {
        return this._basketAmount;
    }

    get basketPrice() {
        return this._basketPrice;
    }

    minusBasket(price) {
        this._basketAmount --
        this._basketPrice -= price
    }

    plusBasket(price) {
        this._basketAmount = this.basketAmount + 1
        this._basketPrice += price
    }

}
