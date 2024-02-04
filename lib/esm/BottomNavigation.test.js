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
import { render, screen } from '@testing-library/react';
import { BottomNavigation } from './BottomNavigation';
describe('BottomNavigation', function () {
    var onItemClick = jest.fn();
    var props = {
        items: [
            {
                title: 'Item 1',
                icon: _jsx("i", { className: "fas fa-home" }),
                activeIcon: _jsx("i", { className: "fas fa-home" }),
            },
            {
                title: 'Item 2',
                icon: _jsx("i", { className: "fas fa-star" }),
                activeIcon: _jsx("i", { className: "fas fa-star" }),
            },
        ],
        onItemClick: onItemClick,
    };
    beforeEach(function () {
        onItemClick.mockClear();
    });
    it('renders correctly', function () {
        render(_jsx(BottomNavigation, __assign({}, props)));
        expect(screen.getByText('Item 1')).toBeInTheDocument();
        expect(screen.getByText('Item 2')).toBeInTheDocument();
    });
    it('calls onItemClick when an item is clicked', function () {
        render(_jsx(BottomNavigation, __assign({}, props)));
        var item1 = screen.getByText('Item 1');
        var item2 = screen.getByText('Item 2');
        item1.click();
        expect(onItemClick).toHaveBeenCalledTimes(1);
        expect(onItemClick).toHaveBeenCalledWith({ id: 0, title: 'Item 1', icon: _jsx("i", { className: "fas fa-home" }), activeIcon: _jsx("i", { className: "fas fa-home" }) });
        item2.click();
        expect(onItemClick).toHaveBeenCalledTimes(2);
        expect(onItemClick).toHaveBeenCalledWith({ id: 1, title: 'Item 2', icon: _jsx("i", { className: "fas fa-star" }), activeIcon: _jsx("i", { className: "fas fa-star" }) });
    });
});
