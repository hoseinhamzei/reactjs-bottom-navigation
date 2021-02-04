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
      _ref$defaultSelectedT = _ref.defaultSelectedTab,
      defaultSelectedTab = _ref$defaultSelectedT === void 0 ? null : _ref$defaultSelectedT,
      onItemClick = _ref.onItemClick,
      noActiveBg = _ref.noActiveBg;

  var _useState = React.useState(defaultSelectedTab),
      current = _useState[0],
      setCurrent = _useState[1];

  var navItems = items.map(function (item, idx) {
    return /*#__PURE__*/React__default.createElement("div", {
      key: 'nav-item-' + idx,
      id: 'nav-item-' + idx,
      className: "bottom-nav-item " + (current === idx && 'active'),
      style: noActiveBg && {
        backgroundColor: 'transparent'
      },
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
      className: "bottom-nav-item--title"
    }, item.title));
  });
  return /*#__PURE__*/React__default.createElement("div", {
    className: "bottom-nav"
  }, navItems);
};

module.exports = BottomNavigation;
//# sourceMappingURL=index.js.map
