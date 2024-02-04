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
import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import "./index.css";
import { BottomNavigationItem } from "./BottomNavigationItem";
/**
 * A bottom navigation component that displays a set of items as icons or custom content.
 *
 * @typedef {Object} BottomNavigationItem
 * @property {string=} title - The title text to display for the item.
 * @property {JSX.Element=} icon - The icon to display for the item.
 * @property {JSX.Element=} activeIcon - The icon to display when the item is active.
 * @property {function(params: {isActive: boolean, id: number}): JSX.Element=} render - A custom render method to use for the item to display.
 * @property {function(params: {id: number, [key: string]: any}): void=} onClick - A callback function to execute when the item is clicked.
 * @property {Object.<string, *>} [key] - Additional props to pass to the item component.
 *
 * @typedef {Object} BottomNavigationProps
 * @property {BottomNavigationItem[]} items - The array of items to display in the navigation.
 * @property {number|null=} selected - The index of the currently selected item.
 * @property {function(params: {id: number, [key: string]: any}): void=} onItemClick - A callback function to execute when an item is clicked.
 * @property {string=} activeBgColor - The background color to use for the active item.
 * @property {string=} activeTextColor - The text color to use for the active item.
 *
 * @param {BottomNavigationProps} props - The component props.
 * @returns {JSX.Element} - The rendered component.
 */
export var BottomNavigation = function (_a) {
    var items = _a.items, _b = _a.selected, selected = _b === void 0 ? null : _b, onItemClick = _a.onItemClick, activeBgColor = _a.activeBgColor, activeTextColor = _a.activeTextColor;
    var _c = useState(selected), current = _c[0], setCurrent = _c[1];
    useEffect(function () {
        setCurrent(selected);
    }, [selected]);
    // determine active styles
    function getItemStyle() {
        var style = {};
        if (activeBgColor) {
            style.backgroundColor = activeBgColor;
            style.color = activeTextColor || "black";
        }
        return style;
    }
    function handleItemClick(idx, item) {
        setCurrent(idx);
        if (item.onClick) {
            item.onClick(__assign({ id: idx }, item));
        }
        if (onItemClick) {
            onItemClick(__assign({ id: idx }, item));
        }
    }
    // if a custom render method is provided use it, otherwise use the default icon and title
    var navItems = items.map(function (item, idx) {
        return (_jsx(BottomNavigationItem, { current: current, item: item, id: idx, getItemStyle: getItemStyle, onClick: handleItemClick }, "bottom-nav-item-".concat(idx)));
    });
    return _jsx("div", __assign({ className: "bottom-nav" }, { children: navItems }));
};
