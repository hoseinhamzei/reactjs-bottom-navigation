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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
export var BottomNavigationItem = function (_a) {
    var item = _a.item, current = _a.current, id = _a.id, getItemStyle = _a.getItemStyle, onClick = _a.onClick, _b = _a.style, style = _b === void 0 ? {} : _b;
    var isActive = current === id;
    return (_jsx("div", __assign({ id: "nav-item-" + id, className: "bottom-nav-item ".concat(isActive ? "active" : ""), style: isActive ? __assign(__assign({}, getItemStyle()), style) : style, onClick: function () { return onClick(id, item); }, role: "tab", "aria-selected": isActive }, { children: item.render ? (item.render({ isActive: isActive, id: id })) : (_jsxs(_Fragment, { children: [item.icon
                    ? isActive && item.activeIcon
                        ? item.activeIcon
                        : item.icon
                    : "", item.title && _jsx("p", __assign({ className: "bottom-nav-item-title" }, { children: item.title }))] })) })));
};
