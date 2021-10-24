# @pnap/react-native-search-bar

Animated search bar built with vanilla React Native.

![showcase](https://media.giphy.com/media/d2tuxEpQb6hOUdUOkM/giphy.gif?cid=790b761166467252d40d678dd8958b1b1b6ea2ccb0d8c7ef&rid=giphy.gif&ct=g)

## Installation

Use npm or yarn to install the package.

```bash
npm install @pnap/react-native-search-bar
```
or

```bash
yarn add @pnap/react-native-search-bar
```

## Usage

```javascript
import {View, StyleSheet} from 'react-native'
import {CustomSearchIcon} from 'components/icons'
import SearchBar from '@pnap/react-native-search-bar'

// Create your component
const MyScreenComponent = () => {

  // Some business logic (functions, variables, etc)

  return (
     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <SearchBar
          onSubmitSearch={onSubmitSearch}
          onActiveSearch={onActiveSearch}
          onToggleSearchBar={onToggleSearchBar}
          customIcon={CustomSearchIcon}
          inputTextStyle={styles.searchBarInput}
          buttonStyle={styles.searchButton}
          buttonTextStyle={styles.searchButtonText}
          underlineActiveColor={"#9f9ea4"}
          underlineInactiveColor={"#6d28d9"}
        />
     </View>
}

const styles = StyleSheet.create({
    ...
})
```
## Availalable Props

| Name        | Type           | Default  | Description | Required |
| ------------- |:-------------:| -----:| -------------:| ----------:|
| onSubmitSearch      | function | - | Fires when user submits text input.| Yes |
| onActiveSearch      | function | - | Fires when user focus text input.| Yes |
| onToggleSearchBar      | function | - | Fires when user presses on search icon (or custom icon).| Yes |
| customIcon      | JSX component | regular search icon | Svg to be rendered as search button.| No |
| inputTextStyle      | TextStyle | simple style | Style value for TextInput text.| No |
| buttonStyle      | ViewStyle | simple style | Style value for search Pressable.| No |
| buttonTextStyle      | TextStyle | simple style | Style value for search Pressable text.| No |
| underlineActiveColor      | ColorValue | #6d28d9 | Color for bottom border of active TextInput.| No |
| underlineInactiveColor      | ColorValue | #9f9ea4 | Color for bottom border of inactive TextInput.| No |
| animationDuration      | Number | 360 | Time in milliseconds for animations.| No |

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Authors
**Piotr Napierala** - _author_

## License
**@pnap/react-native-search-bar** is released under MIT license.
