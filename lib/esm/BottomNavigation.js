import { jsx as _jsx } from "react/jsx-runtime";
import "./index.css";
import { BottomNavigationItem } from "./BottomNavigationItem";
import useBottomNavigation from "./hooks/useBottomNavigation";

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

/**
 * A flexible and customizable bottom navigation component that displays a set of items as icons or custom content.
 *
 * @param {BottomNavigationProps} props - The component props.
 * @returns {JSX.Element} - The rendered component.
 */
export var BottomNavigation = function (_a) {
    var items = _a.items, _b = _a.selected, selected = _b === void 0 ? null : _b, onItemClick = _a.onItemClick, activeBgColor = _a.activeBgColor, activeTextColor = _a.activeTextColor, _c = _a.hideOnScroll, hideOnScroll = _c === void 0 ? false : _c, _d = _a.style, style = _d === void 0 ? {} : _d, _e = _a.className, className = _e === void 0 ? "" : _e;
    var _f = useBottomNavigation(selected, hideOnScroll), state = _f[0], setSelected = _f[1];
    function getItemStyle() {
        var style = {};
        if (activeBgColor) {
            style.backgroundColor = activeBgColor;
            style.color = activeTextColor || "black";
        }
        return style;
    }
    function handleItemClick(idx, item) {
        setSelected(idx);
        if (item.onClick) {
            item.onClick(__assign({ id: idx }, item));
        }
        if (onItemClick) {
            onItemClick(__assign({ id: idx }, item));
        }
    }
    var navItems = items.map(function (item, idx) { return (_jsx(BottomNavigationItem, { current: state.current, item: item, id: idx, getItemStyle: getItemStyle, onClick: handleItemClick }, "bottom-nav-item-".concat(idx))); });
    return (_jsx("div", __assign({ className: "".concat(state.hidden ? "bottom-nav hidden" : "bottom-nav", " ").concat(className), style: style, role: "navigation" }, { children: navItems })));
};
