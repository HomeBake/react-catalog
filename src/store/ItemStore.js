import {makeAutoObservable} from "mobx";

const itemInfo1 = [
    {id: 1, title: 'Пальто, полупальто с подстежкой из натурального меха', price: 1400},
    {id: 2, title: 'Пиджак', price: 20},
    {id: 3, title: 'Пиджак натуральный шелк', price: 123},
    {id: 4, title: 'Пиджак с коротким рукавом без подклада', price: 12312321},
    {id: 5, title: 'Пиджак натуральный шёлк с коротким рукавом', price: 210}
]

const itemInfo2 = [
    {id: 1, title: 'Пальто, полупальто с подстежкой из натурального меха', price: 1400},
    {id: 2, title: 'Пальто, полупальто с подстежкой из натурального меха', price: 1400},
    {id: 3, title: 'Пальто, полупальто с подстежкой из натурального меха', price: 1400},
    {id: 4, title: 'Пальто, полупальто с подстежкой из натурального меха', price: 1400},
    {id: 5, title: 'Пальто, полупальто с подстежкой из натурального меха', price: 1400}
]

export default class ItemStore {
    constructor() {
        this._itemInfo = itemInfo1
        makeAutoObservable(this)
    }

    get items() {
        return this._itemInfo;
    }

    setItems(value) {
        this._itemInfo = value;
    }

    getById(id) {
        return itemInfo2.find((item) => {
            return item.id = id
        })
    }
}