"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchIcon = void 0;
const React = require("react");
const react_native_svg_1 = require("react-native-svg");
const SearchIcon = (props) => {
    return (<react_native_svg_1.default fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <react_native_svg_1.Path strokeLinecap="round" strokeLinejoin="round" strokeWidth={props.strokeWidth} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
    </react_native_svg_1.default>);
};
exports.SearchIcon = SearchIcon;
