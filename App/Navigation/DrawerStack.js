import React from "react";

import ProductStack from './ProductStack';
import MyAccount from '../Components/MyAccount';

const DrawerStack = {
    Home: ProductStack,
    MyAccount: { screen: MyAccount },
};

export default DrawerStack;

