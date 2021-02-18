function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var BottomNavigation = function BottomNavigation(_ref) {
  var items = _ref.items,
      _ref$defaultSelected = _ref.defaultSelected,
      defaultSelected = _ref$defaultSelected === void 0 ? null : _ref$defaultSelected,
      onItemClick = _ref.onItemClick,
      noActiveBg = _ref.noActiveBg,
      activeBgColor = _ref.activeBgColor,
      activeTextColor = _ref.activeTextColor;

  var _useState = React.useState(defaultSelected),
      current = _useState[0],
      setCurrent = _useState[1];

  function getItemStyle() {
    var style = {};

    if (noActiveBg && !activeBgColor) {
      style.backgroundColor = 'transparent';
    }

    if (activeBgColor) {
      style.backgroundColor = activeBgColor;
    }

    return style;
  }

  var navItems = items.map(function (item, idx) {
    return /*#__PURE__*/React__default.createElement("div", {
      key: 'nav-item-' + idx,
      id: 'nav-item-' + idx,
      className: "bottom-nav-item " + (current === idx && 'active'),
      style: current === idx ? getItemStyle() : {},
      onClick: function onClick() {
        setCurrent(idx);

        if (item.onClick) {
          item.onClick(_extends({
            id: idx
          }, item));
        }

        if (onItemClick) {
          onItemClick(_extends({
            id: idx
          }, item));
        }
      }
    }, current !== idx && item.icon ? item.icon : '', current === idx && item.activeIcon ? item.activeIcon : '', item.title && /*#__PURE__*/React__default.createElement("p", {
      className: "bottom-nav-item--title",
      style: current === idx ? {
        color: activeTextColor
      } : {}
    }, item.title));
  });
  return /*#__PURE__*/React__default.createElement("div", {
    className: "bottom-nav"
  }, navItems);
};

module.exports = BottomNavigation;
//# sourceMappingURL=index.js.map
