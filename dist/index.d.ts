import * as React from "react";
import { ViewStyle, StyleProp, TextStyle, ColorValue } from "react-native";
export interface Props {
    onActiveSearch: (val: boolean) => void;
    onSubmitSearch: (val: string) => void;
    onToggleSearchBar: (val: boolean) => void;
    underlineActiveColor?: ColorValue;
    underlineInactiveColor?: ColorValue;
    inputTextStyle?: StyleProp<TextStyle>;
    customIcon?: React.ReactNode;
    iconStyle?: StyleProp<ViewStyle>;
    buttonStyle?: StyleProp<ViewStyle>;
    buttonTextStyle?: StyleProp<TextStyle>;
    animationDuration?: number;
}
declare const SearchBar: ({ onActiveSearch, onSubmitSearch, onToggleSearchBar, customIcon, iconStyle, inputTextStyle, buttonStyle, buttonTextStyle, underlineActiveColor, underlineInactiveColor, animationDuration, }: Props) => any;
export default SearchBar;
