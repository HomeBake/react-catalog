import {makeAutoObservable} from "mobx";

const itemInfo1 = [
    {id: 1, title: 'Пальто, полупальто с подстежкой из натурального меха', price: 1400, type: 'Химчистка'},
    {id: 2, title: 'Пиджак', price: 20, type: 'Химчистка'},
    {id: 3, title: 'Пиджак натуральный шелк', price: 123, type: 'Химчистка'},
    {id: 4, title: 'Пиджак с коротким рукавом без подклада', price: 12312321, type: 'Химчистка'},
    {id: 5, title: 'Пиджак натуральный шёлк с коротким рукавом', price: 210, type: 'Химчистка'}
]

const itemInfo2 = [
    {id: 6, title: 'Пальто, полупальто с подстежкой из натурального меха', price: 1400, type: 'Аквачистка'},
    {id: 7, title: 'Пальто, полупальто с подстежкой из натурального меха', price: 1400, type: 'Аквачистка'},
    {id: 8, title: 'Пальто, полупальто с подстежкой из натурального меха', price: 1400, type: 'Аквачистка'},
    {id: 9, title: 'Пальто, полупальто с подстежкой из натурального меха', price: 1400, type: 'Аквачистка'},
    {id: 10, title: 'Пальто, полупальто с подстежкой из натурального меха', price: 1400, type: 'Аквачистка'}
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
        return this._itemInfo.find((item) => {
            return item.id === id
        })
    }
}