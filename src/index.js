"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var client_1 = __importDefault(require("react-dom/client"));
require("./index.css");
var App_1 = __importDefault(require("./App"));
var ContextProvider_1 = __importDefault(require("./component/ContextProvider"));
var rootElement = document.getElementById('root');
var root = rootElement ? client_1.default.createRoot(rootElement) : null;
if (root) {
    root.render(react_1.default.createElement(ContextProvider_1.default, null,
        react_1.default.createElement(App_1.default, null)));
}
else {
    console.log("Нет корневого элемента");
}
