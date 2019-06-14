import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  padding-top: 10px;\n  height: 70px;\n  ", ";\n  ", " > ", " {\n    width: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  & {\n    list-style-type: none;\n    float: left;\n    position: relative;\n    text-align: center;\n    font-weight: 200;\n    font-size: 12px;\n    display: inline;\n    cursor: pointer;\n    ", "\n    ", "\n    ", ";\n  }\n\n  &:before {\n    ", "\n    counter-increment: step;\n    height: 30px;\n    width: 30px;\n    line-height: 30px;\n    display: block;\n    text-align: center;\n    margin: 0 auto 10px auto;\n    color: rgba(0, 0, 0, 0.6);\n    border: 2px solid #ddd;\n    ", ";\n    background-color: white;\n    position: relative;\n    z-index: 1;\n  }\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 2px;\n    background-color: #ddd;\n    top: 15px;\n    left: -50%;\n    z-index: 0;\n  }\n\n  &:first-child:after {\n    content: \"\";\n    background-color: transparent;\n    height: 0;\n    width: 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  counter-reset: step;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from "react";
import styled from "styled-components";
var ProgressBar = styled.div(_templateObject());
var ProgressItem = styled.li(_templateObject2(), function (props) {
  return props.textColor ? "color: " + props.textColor : "";
}, function (props) {
  return props.active ? "\n      ".concat(props.activeColor && "color: " + props.activeColor, "\n      font-weight: bold;\n    ") : "";
}, function (props) {
  return props.active ? "font-weight: 600;" : "";
}, function (props) {
  return props.completed ? "content: '\\2713';" : "content: counter(step);";
}, function (props) {
  return props.rounded && "border-radius: 50%";
});
var Container = styled.div(_templateObject3(), function (props) {
  return props.fontFamily && "font-family: " + props.fontFamily;
}, ProgressBar, ProgressItem, function (props) {
  return props.children && "".concat(100 / props.children.props.children.length, "%");
});

var Stepper = function Stepper(props) {
  var steps = props.steps,
      currentStep = props.currentStep,
      fontFamily = props.fontFamily,
      textColor = props.textColor,
      activeColor = props.activeColor,
      onItemClick = props.onItemClick;
  return React.createElement(Container, {
    fontFamily: fontFamily
  }, React.createElement(ProgressBar, null, steps && steps.map(function (step, index) {
    return React.createElement(ProgressItem, {
      key: index,
      active: currentStep === index,
      completed: currentStep > index,
      textColor: textColor,
      activeColor: activeColor,
      onClick: onItemClick.bind(null, index, step)
    }, step);
  })));
};

export default Stepper;