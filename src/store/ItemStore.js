"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var itemInfo = [
    { id: 1, title: 'Пальто, полупальто с подстежкой из натурального меха', price: 1400, type: 1 },
    { id: 2, title: 'Пиджак', price: 20, type: 1 },
    { id: 3, title: 'Пиджак натуральный шелк', price: 123, type: 1 },
    { id: 4, title: 'Пиджак с коротким рукавом без подклада', price: 12312321, type: 1 },
    { id: 5, title: 'Пиджак натуральный шёлк с коротким рукавом', price: 210, type: 1 },
    { id: 6, title: ' с подстежкой из натурального меха', price: 1600, type: 2 },
    { id: 7, title: 'Пальто, полупальто с подстежкой из  меха', price: 1800, type: 3 },
    { id: 8, title: 'натурального меха', price: 14800, type: 4 },
    { id: 9, title: 'Пальто, полупальто с из натурального меха', price: 14080, type: 5 },
    { id: 10, title: 'Пальто,  из натурального меха', price: 14040, type: 6 },
];
var ItemStore = /** @class */ (function () {
    function ItemStore() {
        this._itemInfo = itemInfo;
        this._itemSearch = ''; // Better do store for search
        (0, mobx_1.makeAutoObservable)(this);
    }
    Object.defineProperty(ItemStore.prototype, "itemSearch", {
        get: function () {
            return this._itemSearch;
        },
        enumerable: false,
        configurable: true
    });
    ItemStore.prototype.setItemSearch = function (value) {
        this._itemSearch = value;
    };
    Object.defineProperty(ItemStore.prototype, "items", {
        get: function () {
            return this._itemInfo;
        },
        enumerable: false,
        configurable: true
    });
    ItemStore.prototype.setItems = function (value) {
        this._itemInfo = value;
    };
    ItemStore.prototype.getByCategory = function (categoryId) {
        return this._itemInfo.filter(function (item) {
            return item.type === categoryId;
        });
    };
    ItemStore.prototype.getByCategoryAndSearch = function (categoryId) {
        var _this = this;
        return this._itemInfo.filter(function (item) {
            return (item.type === categoryId && item.title.includes(_this._itemSearch));
        });
    };
    ItemStore.prototype.getById = function (id) {
        return this._itemInfo.find(function (item) {
            return item.id === id;
        });
    };
    return ItemStore;
}());
exports.default = ItemStore;
