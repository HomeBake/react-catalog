import {makeAutoObservable} from "mobx";

const itemInfo1 = [
    {id: 1, title: 'Пальто, полупальто с подстежкой из натурального меха', price: 1400, type: 1},
    {id: 2, title: 'Пиджак', price: 20, type: 1},
    {id: 3, title: 'Пиджак натуральный шелк', price: 123, type: 1},
    {id: 4, title: 'Пиджак с коротким рукавом без подклада', price: 12312321, type: 1},
    {id: 5, title: 'Пиджак натуральный шёлк с коротким рукавом', price: 210, type: 1},
    {id: 6, title: ' с подстежкой из натурального меха', price: 1600, type: 2},
    {id: 7, title: 'Пальто, полупальто с подстежкой из  меха', price: 1800, type: 3},
    {id: 8, title: 'натурального меха', price: 14800, type: 4},
    {id: 9, title: 'Пальто, полупальто с из натурального меха', price: 14080, type: 5},
    {id: 10, title: 'Пальто,  из натурального меха', price: 14040, type: 6},
]

const itemInfo2 = [

]


export default class ItemStore {
    constructor() {
        this._itemInfo = itemInfo1
        this._mode = 0
        makeAutoObservable(this)
    }

    get items() {
        return this._itemInfo;
    }

    setItems(value) {
        this._itemInfo = value;
    }

    getByCategory(categoryId) {
        return this._itemInfo.filter((item) => {
            return item.type === categoryId
        })
    }

    getById(id) {
        return this._itemInfo.find((item) => {
            return item.id === id
        })
    }
}