"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
// Custom Text
var customText = {
    green: function (text) { return "\u001B[32m".concat(text, "\u001B[0m"); },
    red: function (text) { return "\u001B[31m".concat(text, "\u001B[0m"); },
    yellow: function (text) { return "\u001B[33m".concat(text, "\u001B[0m"); },
    blue: function (text) { return "\u001B[34m".concat(text, "\u001B[0m"); },
    magenta: function (text) { return "\u001B[35m".concat(text, "\u001B[0m"); },
    cyan: function (text) { return "\u001B[36m".concat(text, "\u001B[0m"); },
    white: function (text) { return "\u001B[37m".concat(text, "\u001B[0m"); },
    black: function (text) { return "\u001B[30m".concat(text, "\u001B[0m"); },
    underscore: function (text) { return "\u001B[4m".concat(text, "\u001B[0m"); },
    bright: function (text) { return "\u001B[1m".concat(text, "\u001B[0m"); },
    reverse: function (text) { return __spreadArray([], text, true).reverse().join(""); },
    bold: function (text) { return customText.bright(text); }
};
// Custom Background
var customBackground = {
    green: function (text) { return "\u001B[42m".concat(text, "\u001B[0m"); },
    red: function (text) { return "\u001B[41m".concat(text, "\u001B[0m"); },
    yellow: function (text) { return "\u001B[43m".concat(text, "\u001B[0m"); },
    blue: function (text) { return "\u001B[44m".concat(text, "\u001B[0m"); },
    magenta: function (text) { return "\u001B[45m".concat(text, "\u001B[0m"); },
    cyan: function (text) { return "\u001B[46m".concat(text, "\u001B[0m"); },
    white: function (text) { return "\u001B[47m".concat(text, "\u001B[0m"); },
    black: function (text) { return "\u001B[40m".concat(text, "\u001B[0m"); }
};
// Custom log
function logWithTitle(title, message) {
    console.log("[", title, "] ", message);
}
// Print box with test inside
function textInBox(text, boxColor) {
    // @ts-ignore
    var boxSymbol = boxColor ? customText[boxColor]("=") : "=";
    console.log(boxSymbol.repeat((text + "").length + 6));
    console.log("".concat(boxSymbol, " "), text, " ".concat(boxSymbol));
    console.log(boxSymbol.repeat((text + "").length + 6));
}
exports.default = __assign(__assign({}, console), { text: customText, background: customBackground, logWithTitle: logWithTitle, textInBox: textInBox });
