'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Styled__default = /*#__PURE__*/_interopDefaultLegacy(Styled);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  GHOST: 'ghost'
};

var getAppearance = function getAppearance(_ref) {
  var variant = _ref.variant,
      theme = _ref.theme;
  var colors = theme.colors;
  var appearance = {
    color: '',
    bgColor: ''
  };

  switch (variant) {
    case VARIANTS.PRIMARY:
      appearance.color = colors.white.base;
      appearance.bgColor = colors.primary.base;
      break;

    case VARIANTS.SECONDARY:
      appearance.color = colors.secondary.dark;
      appearance.bgColor = colors.secondary.lighter;
      break;

    case VARIANTS.SUCCESS:
      appearance.color = colors.white.base;
      appearance.bgColor = colors.success.base;
      break;

    case VARIANTS.DANGER:
      appearance.color = colors.white.base;
      appearance.bgColor = colors.danger.base;
      break;

    default:
      appearance.color = colors.secondary.dark;
      appearance.bgColor = colors.secondary.lighter;
      break;
  }

  return appearance;
};

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n  padding: 2px 4px;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 4px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var defaultProps = {
  variant: 'secondary'
};
var BadgeElement = Styled__default['default'].span(_templateObject(), function (props) {
  return props.theme.fontSizes[props.size];
}, function (props) {
  return props.backgroundColor || getAppearance(props).bgColor;
}, function (props) {
  return props.color || getAppearance(props).color;
});

var Badge = function Badge(props) {
  var children = props.children,
      others = _objectWithoutProperties(props, ["children"]);

  return /*#__PURE__*/React__default['default'].createElement(BadgeElement, Object.assign({}, others), children);
};

Badge.defaultProps = defaultProps;

var getAppearance$1 = function getAppearance(_ref) {
  var variant = _ref.variant,
      theme = _ref.theme;
  var colors = theme.colors;

  switch (variant) {
    case VARIANTS.PRIMARY:
      return {
        color: colors.white.base,
        backgroundColor: colors.primary.base,
        borderColor: colors.primary.base,
        hoverBackgroundColor: colors.primary.dark,
        hoverBorderColor: colors.primary.dark
      };

    case VARIANTS.SECONDARY:
      return {
        color: colors.primary.base,
        backgroundColor: colors.white.base,
        borderColor: colors.primary.base,
        hoverBackgroundColor: colors.primary.lighter,
        hoverBorderColor: colors.primary.base
      };

    case VARIANTS.SUCCESS:
      return {
        color: colors.white.base,
        backgroundColor: colors.success.base,
        borderColor: colors.success.base,
        hoverBackgroundColor: colors.success.dark,
        hoverBorderColor: colors.success.dark
      };

    case VARIANTS.DANGER:
      return {
        color: colors.white.base,
        backgroundColor: colors.danger.base,
        borderColor: colors.danger.base,
        hoverBackgroundColor: colors.danger.dark,
        hoverBorderColor: colors.danger.dark
      };

    case VARIANTS.WARNING:
      return {
        color: colors.white.base,
        backgroundColor: colors.warning.base,
        borderColor: colors.warning.base,
        hoverBackgroundColor: colors.warning.dark,
        hoverBorderColor: colors.warning.dark
      };

    case VARIANTS.GHOST:
      return {
        color: colors.primary.base,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        hoverBackgroundColor: 'transparent',
        hoverBorderColorColor: 'transparent'
      };

    default:
      return {
        color: colors.primary.base,
        backgroundColor: colors.white.base,
        borderColor: colors.primary.base,
        hoverBackgroundColor: colors.primary.lighter,
        hoverBorderColor: colors.primary.lighter
      };
  }
};

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    margin-right: 8px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n    display: inline-flex;\n    cursor: pointer;\n    padding: 10px 12px;\n    font-size: 14px;\n    border-width: 1px;\n    border-radius: 4px;\n\n    /* All Colors */\n    color: ", ";\n    background-color: ", ";\n    border-color: ", ";\n\n    &:hover:enabled {\n        background-color: ", ";\n        border-color: ", ";\n    }\n    &:disabled {\n        cursor: not-allowed;\n        opacity: 0.4;\n        box-shadow: none;\n    }\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var DefaultProps = {
  type: 'button',
  variant: 'secondary',
  size: 'normal',
  isDisabled: false,
  isLoading: false
};
var ButtonElement = Styled__default['default'].button(_templateObject$1(), function (props) {
  return getAppearance$1(props).color;
}, function (props) {
  return getAppearance$1(props).backgroundColor;
}, function (props) {
  return getAppearance$1(props).borderColor;
}, function (props) {
  return getAppearance$1(props).hoverBackgroundColor;
}, function (props) {
  return getAppearance$1(props).hoverBorderColor;
});
var SpinnerWrapper = Styled__default['default'].div(_templateObject2());

var Button = function Button(props) {
  var children = props.children,
      isDisabled = props.isDisabled,
      others = _objectWithoutProperties(props, ["children", "isDisabled"]);

  return /*#__PURE__*/React__default['default'].createElement(ButtonElement, Object.assign({
    disabled: isDisabled
  }, others), children);
};

Button.defaultProps = DefaultProps;

var defaultProps$1 = {
  as: 'h1'
};

var Heading = function Heading(props) {
  var children = props.children,
      _props$as = props.as,
      Element = _props$as === void 0 ? 'h1' : _props$as,
      others = _objectWithoutProperties(props, ["children", "as"]);

  return /*#__PURE__*/React__default['default'].createElement(Element, null, children);
};

Heading.defaultProps = defaultProps$1;

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 0 8px;\n  height: 32px;\n  border: 1px solid ", ";\n  border-radius: 4px;\n  outline: none;\n\n  &:focus:not(:disabled), &:hover:not(:disabled) {\n    border-color: ", ";\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    opacity: 0.4;\n    box-shadow: none;\n  }\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var defaultProps$2 = {
  disabled: false,
  isInvalid: false
};
var InputElement = Styled__default['default'].input(_templateObject$2(), function (props) {
  return props.isInvalid ? props.theme.colors.danger.base : props.theme.colors.secondary.base;
}, function (props) {
  return props.isInvalid ? props.theme.colors.danger.base : props.theme.colors.primary.dark;
});

var Input = function Input(props) {
  return /*#__PURE__*/React__default['default'].createElement(InputElement, Object.assign({}, props));
};

Input.defaultProps = defaultProps$2;

var getTextColor = function getTextColor(_ref) {
  var variant = _ref.variant,
      theme = _ref.theme;
  var colors = theme.colors;

  switch (variant) {
    case 'primary':
      return colors.primary.base;

    case 'secondary':
      return colors.secondary.base;

    case 'success':
      return colors.success.base;

    case 'danger':
      return colors.danger.base;

    case 'warning':
      return colors.danger.base;

    default:
      return colors.secondary.dark;
  }
};

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: ", ";\n  text-align: ", ";\n  max-width: ", ";\n  white-space: ", ";\n  overflow: ", ";\n  text-overflow: ", ";\n  display: ", ";\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var defaultProps$3 = {
  align: 'left',
  variant: 'default',
  style: {}
};
var TextElement = Styled__default['default'].span(_templateObject$3(), function (props) {
  return getTextColor(props);
}, function (props) {
  return props.theme.fontSizes[props.size];
}, function (props) {
  return props.align;
}, function (props) {
  return props.width;
}, function (props) {
  return props.width && 'nowrap';
}, function (props) {
  return props.width && 'hidden';
}, function (props) {
  return props.width && 'ellipsis';
}, function (props) {
  return props.width && 'block';
});

var Text = function Text(props) {
  var children = props.children,
      others = _objectWithoutProperties(props, ["children"]);

  return /*#__PURE__*/React__default['default'].createElement(TextElement, Object.assign({}, others), children);
};

Text.defaultProps = defaultProps$3;

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 8px;\n  border: 1px solid ", ";\n  border-radius: 4px;\n  outline: none;\n\n  &:focus {\n    border-color: ", ";\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    opacity: 0.4;\n    box-shadow: none;\n  }\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var TextAreaElement = Styled__default['default'].textarea(_templateObject$4(), function (props) {
  return props.isInvalid ? props.theme.colors.danger.base : props.theme.colors.secondary.base;
}, function (props) {
  return props.isInvalid ? props.theme.colors.danger.base : props.theme.colors.primary.dark;
});

var TextArea = function TextArea(props) {
  return /*#__PURE__*/React__default['default'].createElement(TextAreaElement, Object.assign({}, props));
};

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n    width: 500px;\n    border: 1px solid ", ";\n    padding: 16px;\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var defaultProps$4 = {};
var CardElement = Styled__default['default'].div(_templateObject$5(), function (props) {
  return props.theme.colors.secondary.light;
});

var Card = function Card(props) {
  var children = props.children,
      styles = props.styles;
  return /*#__PURE__*/React__default['default'].createElement(CardElement, {
    style: styles
  }, children);
};

Card.defaultProps = defaultProps$4;

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: ", ";\n  gap: 8px;\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var defaultProps$5 = {
  direction: 'horizontal'
};
var StackElement = Styled__default['default'].div(_templateObject$6(), function (props) {
  return props.direction === 'vertical' ? 'column' : 'row';
});

var StackComponent = function StackComponent(props) {
  var children = props.children,
      others = _objectWithoutProperties(props, ["children"]);

  return /*#__PURE__*/React__default['default'].createElement(StackElement, Object.assign({}, others), children);
};

StackComponent.defaultProps = defaultProps$5;

exports.Badge = Badge;
exports.Button = Button;
exports.Card = Card;
exports.Heading = Heading;
exports.Input = Input;
exports.Stack = StackComponent;
exports.Text = Text;
exports.TextArea = TextArea;
