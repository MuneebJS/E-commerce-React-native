import '../Config'
import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import createStore from '../Redux'
import { BackHandler } from 'react-native'
import { withNavigation } from 'react-navigation';

// create our store
const store = createStore()

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.backAndroid = this.backAndroid.bind(this);
  // }
  // componentDidMount() {
  //   BackHandler.addEventListener('hardwareBackPress', () => this.backAndroid()) // Listen for the hardware back button on Android to be pressed
  // }
  // componentWillUnmount() {
  //   BackHandler.removeEventListener('hardwareBackPress', () => this.backAndroid()) // Remove listener
  // }

  // backAndroid() {
  //   console.log("this.props from backandroid", this.props)
  //   this.props.navigation.goBack() // Return to previous screen
  //   return true // Needed so BackHandler knows that you are overriding the default action and that it should not close the app
  // }
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  // : withNavigation(App)
  : App
