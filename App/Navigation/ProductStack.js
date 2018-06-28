import React from "react";
import { DrawerNavigator, StackNavigator } from "react-navigation";
import CardExample from "../Containers/Home";
import DrawerContent from "../Containers/DrawerContent";
import ListviewExample from '../Containers/ListviewExample';
import Home from '../Containers/Home';
import Categories from '../Containers/Categories';
import ProductGrid from '../Containers/ProductGrid';
import ProductDetail from '../Containers/ProductDetail';
import ProductFullDetail from '../Containers/ProductFullDetail';
import MyAccount from '../Components/MyAccount';
import TabNavigation from './TabNavigation';

const ProductStack = {
    name: 'Home',
    screen: StackNavigator({
        Home: { screen: TabNavigation },
        Categories: { screen: Categories },
        ProductGrid: { screen: ProductGrid },
        ProductDetail: { screen: ProductDetail },
        ProductFullDetail: { screen: ProductFullDetail },
    },
        { initialRouteName: 'Home' })
};

export default ProductStack;

