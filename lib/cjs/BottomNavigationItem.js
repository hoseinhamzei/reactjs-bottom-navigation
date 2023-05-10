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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomNavigationItem = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var BottomNavigationItem = function (_a) {
    var item = _a.item, current = _a.current, id = _a.id, getItemStyle = _a.getItemStyle, onClick = _a.onClick;
    var isActive = current === id;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ id: "nav-item-" + id, className: "bottom-nav-item ".concat(isActive ? "active" : ""), style: isActive ? getItemStyle() : {}, onClick: function () { return onClick(id, item); } }, { children: item.render ? (item.render({ isActive: isActive, id: id })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [item.icon
                    ? isActive && item.activeIcon
                        ? item.activeIcon
                        : item.icon
                    : "", item.title && (0, jsx_runtime_1.jsx)("p", __assign({ className: "bottom-nav-item--title" }, { children: item.title }))] })) })));
};
exports.BottomNavigationItem = BottomNavigationItem;
