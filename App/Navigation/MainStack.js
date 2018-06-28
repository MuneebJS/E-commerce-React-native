import React from "react";
import { StackNavigator } from "react-navigation";
import styles from "./Styles/NavigationStyles";
import Home from '../Containers/Home';
import { Text, Button, Icon } from 'native-base';
import { DrawerNavigator } from "react-navigation";

import LaunchScreen from "../Containers/LaunchScreen";
import Categories from '../Containers/Categories';
import ProductGrid from '../Containers/ProductGrid';
import ProductDetail from '../Containers/ProductDetail';
import ProductFullDetail from '../Containers/ProductFullDetail';

const MainStack = StackNavigator({
    LaunchScreen: { screen: LaunchScreen }
}, {
        headerMode: 'float',
        initialRouteName: 'LaunchScreen',
        navigationOptions: ({ navigation }) => ({
            headerStyle: { backgroundColor: '#fff' },
            // headerLeft: <Text onPress={() =>
            //     navigation.navigate('DrawerOpen')}>Menu</Text>,
            title: 'You are not logged in',
            headerTintColor: 'white',
        })
    })

export default MainStack;