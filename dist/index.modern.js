import React, { useState } from 'react';

const BottomNavigation = ({
  items,
  defaultSelected: _defaultSelected = null,
  onItemClick,
  noActiveBg,
  activeBgColor,
  activeTextColor
}) => {
  const [current, setCurrent] = useState(_defaultSelected);

  function getItemStyle() {
    const style = {};

    if (noActiveBg && !activeBgColor) {
      style.backgroundColor = 'transparent';
    }

    if (activeBgColor) {
      style.backgroundColor = activeBgColor;
    }

    return style;
  }

  const navItems = items.map((item, idx) => {
    return /*#__PURE__*/React.createElement("div", {
      key: 'nav-item-' + idx,
      id: 'nav-item-' + idx,
      className: `bottom-nav-item ${current === idx && 'active'}`,
      style: current === idx ? getItemStyle() : {},
      onClick: () => {
        setCurrent(idx);

        if (item.onClick) {
          item.onClick({
            id: idx,
            ...item
          });
        }

        if (onItemClick) {
          onItemClick({
            id: idx,
            ...item
          });
        }
      }
    }, current !== idx && item.icon ? item.icon : '', current === idx && item.activeIcon ? item.activeIcon : '', item.title && /*#__PURE__*/React.createElement("p", {
      className: "bottom-nav-item--title",
      style: current === idx ? {
        color: activeTextColor
      } : {}
    }, item.title));
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "bottom-nav"
  }, navItems);
};

export default BottomNavigation;
//# sourceMappingURL=index.modern.js.map
