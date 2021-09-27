"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const searchIcon_1 = require("./searchIcon");
const SearchBar = ({ onActiveSearch, onSubmitSearch, onToggleSearchBar, customIcon, iconStyle, inputTextStyle, buttonStyle, buttonTextStyle, underlineActiveColor, underlineInactiveColor, }) => {
    const [activeSearchBar, setActiveSearchBar] = React.useState(false);
    const [inputTextActive, setInputTextActive] = React.useState(false);
    const [layout, setLayout] = React.useState(null);
    const [inputValue, setInputValue] = React.useState("");
    const AnimatedTextInput = react_native_1.Animated.createAnimatedComponent(react_native_1.TextInput);
    const animatedFlex = React.useRef(new react_native_1.Animated.Value(0)).current;
    const animatedRef = React.useRef(new react_native_1.Animated.Value(0)).current;
    const textInputRef = React.useRef(AnimatedTextInput).current;
    const animatedXPosition = animatedRef.interpolate({
        inputRange: [0, 1],
        outputRange: [-100, 0],
    });
    const MemoizedAnimatedTextInput = React.useMemo(() => AnimatedTextInput, []);
    const toggleSearchBar = () => {
        startSearchBarAnimation();
    };
    const onSubmit = () => {
        onSubmitSearch(inputValue);
        textInputRef.current.blur();
    };
    const onChange = (e) => {
        setInputValue(e.nativeEvent.text);
    };
    const onLayout = (e) => {
        setLayout(e.nativeEvent.layout);
    };
    const onFocus = React.useCallback(() => {
        setInputTextActive(true);
        onActiveSearch(true);
    }, []);
    const onBlur = React.useCallback(() => {
        setInputTextActive(false);
        onActiveSearch(false);
    }, []);
    const animateWithValue = (val) => react_native_1.Animated.timing(val, {
        useNativeDriver: false,
        duration: 360,
        toValue: activeSearchBar ? 0 : 1,
    });
    const startSearchBarAnimation = () => {
        setActiveSearchBar((prev) => !prev);
        if (activeSearchBar)
            setInputValue("");
        react_native_1.Animated.parallel([
            animateWithValue(animatedFlex),
            animateWithValue(animatedRef),
        ]).start(({ finished }) => {
            if (finished) {
                onActiveSearch(!activeSearchBar ? true : false);
                textInputRef.current.focus();
                onToggleSearchBar(!activeSearchBar);
                setInputTextActive(!activeSearchBar ? true : false);
            }
        });
    };
    return (<react_native_1.View style={styles.searchToolContainer}>
      <react_native_1.Pressable hitSlop={10} onPress={toggleSearchBar}>
         {customIcon ? customIcon : (<searchIcon_1.SearchIcon width={24} height={24} stroke={'black'} strokeWidth={1.8} style={iconStyle ?? styles.iconStyle}/>)}
      </react_native_1.Pressable>
      <MemoizedAnimatedTextInput style={[
            inputTextStyle ?? styles.searchBarInput,
            {
                flex: animatedFlex,
                borderBottomColor: inputTextActive
                    ? (underlineActiveColor ?? "#6d28d9")
                    : (underlineInactiveColor ?? "#9f9ea4"),
                opacity: animatedRef,
                marginRight: layout && activeSearchBar ? layout.width + 10 : 0,
            },
        ]} value={inputValue} onSubmitEditing={onSubmit} onChange={onChange} onFocus={onFocus} onBlur={onBlur} ref={textInputRef}/>
      <react_native_1.Animated.View style={{
            position: "absolute",
            right: animatedXPosition,
            opacity: animatedRef,
        }}>
        <react_native_1.Pressable onLayout={onLayout} onPress={onSubmit} style={buttonStyle ??
            styles.searchButton}>
          <react_native_1.Text style={buttonTextStyle ??
            styles.searchButtonText}>
            Search
          </react_native_1.Text>
        </react_native_1.Pressable>
      </react_native_1.Animated.View>
    </react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
    searchToolContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        marginBottom: 5,
        marginTop: 10,
    },
    searchBarInput: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: 'normal',
        color: "#6d28d9",
        width: "0%",
        borderBottomWidth: 2,
        paddingVertical: 2,
        paddingHorizontal: 0,
    },
    searchButton: {
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: "#4c1d95"
    },
    searchButtonText: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold',
        color: "#f5f3ff"
    },
    iconStyle: {
        marginRight: 10
    }
});
exports.default = SearchBar;
