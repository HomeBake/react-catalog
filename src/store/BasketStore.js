"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var BasketStore = /** @class */ (function () {
    function BasketStore() {
        this._basket = []; // [{id: 1, amount: 5, sum: 1400}]
        this._basketAmount = 0;
        this._basketPrice = 0;
        (0, mobx_1.makeAutoObservable)(this);
    }
    Object.defineProperty(BasketStore.prototype, "basket", {
        get: function () {
            return this._basket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BasketStore.prototype, "basketAmount", {
        get: function () {
            return this._basketAmount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BasketStore.prototype, "basketPrice", {
        get: function () {
            return this._basketPrice;
        },
        enumerable: false,
        configurable: true
    });
    BasketStore.prototype.plusItem = function (id, sum) {
        var _this = this;
        var isExist = false;
        this._basket = this._basket.map(function (item) {
            if (item.id === id) {
                isExist = true;
                _this.plusBasket(sum);
                return { id: id, amount: item.amount + 1, sum: sum };
            }
            else
                return item;
        });
        if (!isExist) {
            this.plusBasket(sum);
            this._basket = __spreadArray(__spreadArray([], this._basket, true), [{ id: id, amount: 1, sum: sum }], false);
        }
    };
    BasketStore.prototype.minusItem = function (id, sum) {
        var _this = this;
        this._basket = this._basket.map(function (item) {
            if (item.id === id) {
                if (item.amount - 1 === 0) {
                    _this.minusBasket(sum);
                    return { id: id, amount: 0, sum: sum };
                }
                _this.minusBasket(sum);
                return { id: id, amount: item.amount - 1, sum: sum };
            }
            else
                return item;
        });
        this._basket = this._basket.filter(function (item) {
            return item.amount;
        });
    };
    BasketStore.prototype.minusBasket = function (price) {
        this._basketAmount--;
        this._basketPrice -= price;
    };
    BasketStore.prototype.plusBasket = function (price) {
        this._basketAmount++;
        this._basketPrice += price;
    };
    BasketStore.prototype.getAmountById = function (id) {
        var item = this._basket.find(function (item) {
            return item.id === id;
        });
        return item ? item.amount : null;
    };
    BasketStore.prototype.deleteById = function (id) {
        var _this = this;
        this._basket = this._basket.filter(function (item) {
            if (item.id === id) {
                _this._basketAmount -= item.amount;
                _this._basketPrice -= (item.sum * item.amount);
            }
            return item.id !== id;
        });
    };
    return BasketStore;
}());
exports.default = BasketStore;
