"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var menu = [
    {
        id: 1,
        title: 'Химчистка',
        options: [
            { id: 1, title: 'Аксессуары' },
            { id: 2, title: 'Верхняя одежда' },
            { id: 3, title: 'Деловой костюм' },
            { id: 4, title: 'Джинса' },
            { id: 5, title: 'Куртка и пуховик' },
            { id: 6, title: 'Пальто и плащ' },
        ]
    },
    {
        id: 2,
        title: 'Аквачистка',
        options: [
            { id: 7, title: 'Пальто' },
            { id: 8, title: 'Верхняя пуховик' },
            { id: 9, title: 'Куртка костюм' },
            { id: 10, title: 'Джинса' },
            { id: 11, title: 'Куртка и пуховик' },
            { id: 12, title: 'Пальто и плащ' },
        ]
    },
    {
        id: 3,
        title: 'Ремонт одежды',
        options: [
            { id: 13, title: 'Аксессуары' },
            { id: 14, title: 'Верхняя Джинса' },
            { id: 15, title: 'Деловой Джинса' },
            { id: 16, title: 'Джинса' },
            { id: 17, title: 'Куртка и Джинса' },
            { id: 18, title: 'Пальто и Джинса' },
        ]
    },
    {
        id: 4,
        title: 'Химчистка',
        options: [
            { id: 19, title: 'Аксессуары' },
            { id: 20, title: 'Верхняя одежда' },
            { id: 21, title: 'Деловой одежда' },
            { id: 22, title: 'Джинса' },
            { id: 23, title: 'Куртка и одежда' },
            { id: 24, title: 'Пальто и одежда' },
        ]
    },
    {
        id: 5,
        title: 'Аквачистка',
        options: [
            { id: 25, title: 'Аксессуары' },
            { id: 26, title: 'Верхняя одежда' },
            { id: 27, title: 'Деловой костюм' },
            { id: 28, title: 'Джинса' },
            { id: 29, title: 'Куртка и пуховик' },
            { id: 30, title: 'Пальто и плащ' },
        ]
    },
    {
        id: 6,
        title: 'Ремонт одежды',
        options: [
            { id: 31, title: 'Аксессуары' },
            { id: 32, title: 'Верхняя Верхняя' },
            { id: 33, title: 'Верхняя костюм' },
            { id: 34, title: 'Верхняя' },
            { id: 35, title: 'Верхняя и пуховик' },
            { id: 36, title: 'Пальто и Верхняя' },
        ]
    }
];
var CategoryStore = /** @class */ (function () {
    function CategoryStore() {
        this._categories = menu;
        this._selectedCategory = 1;
        this._selectedOption = 0;
        this._activeCat = 0;
        (0, mobx_1.makeAutoObservable)(this);
    }
    Object.defineProperty(CategoryStore.prototype, "categories", {
        get: function () {
            return this._categories;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CategoryStore.prototype, "selectedCategory", {
        get: function () {
            return this._selectedCategory;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CategoryStore.prototype, "selectedOption", {
        get: function () {
            return this._selectedOption;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CategoryStore.prototype, "activeCat", {
        get: function () {
            return this._activeCat;
        },
        enumerable: false,
        configurable: true
    });
    CategoryStore.prototype.setCategories = function (value) {
        this._categories = value;
    };
    CategoryStore.prototype.setSelectedCategory = function (value) {
        this._selectedCategory = value;
    };
    CategoryStore.prototype.setSelectedOption = function (value) {
        this._selectedOption = value;
    };
    CategoryStore.prototype.getTitleById = function (id) {
        var item = this._categories.find(function (category) {
            return category.id === id;
        });
        return item ? item.title : '';
    };
    CategoryStore.prototype.setActiveCat = function (value) {
        this._activeCat = value;
    };
    return CategoryStore;
}());
exports.default = CategoryStore;
