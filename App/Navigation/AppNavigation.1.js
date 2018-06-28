import React from "react";
import { StackNavigator } from "react-navigation";
import styles from "./Styles/NavigationStyles";
import { Text, Button, Icon } from 'native-base';
import { DrawerNavigator } from "react-navigation";

import Home from '../Containers/Home';
import LaunchScreen from "../Containers/LaunchScreen";
import Categories from '../Containers/Categories';
import ProductGrid from '../Containers/ProductGrid';
import ProductDetail from '../Containers/ProductDetail';
import ProductFullDetail from '../Containers/ProductFullDetail';
import MyAccount from '../Components/MyAccount';
import LoginStack from './LoginStack';


// console.disableYellowBox = true

// const PrimaryNav = StackNavigator({
//   // Login: { screen: Login },
//   ProductDetail: { screen: ProductDetail },
//   Products: { screen: ProductGrid },
//   Categories: { screen: Categories },
//   Home: { screen: Home },
//   ProductDetail: { screen: ProductDetail },
//   ProductFullDetail: { screen: ProductFullDetail },
// },
//   {
//     initialRouteName: "Home",
//     headerMode: "float",
//     navigationOptions: ({ navigation }) => ({
//       headerStyle: { backgroundColor: '#12110C' },
//       // headerStyle: { backgroundColor: '#fff' },
//       title: 'THELEVELe',
//       headerTintColor: 'white',
//       headerRight: (
//         <Button dark onPress={() =>
//           navigation.navigate('DrawerOpen')}
//         // style={{ marginBottom: 10 }}
//         ><Icon name='menu' /></Button>
//       ),
//     }),
//   });

const Stack = {
  home: {
    screen: Home
  },
  launchScreen: {
    screen: LaunchScreen
  },
  myAccount: {
    screen: MyAccount,
  }
};

const ProductStack = {
  ProductGrid: {
    screen: ProductGrid,
  },
  ProductDetail: {
    screen: ProductDetail,
  },
  Categories: {
    screen: Categories,
  }
};

const DrawerRoutes = {
  Home: {
    // name: 'FirstViewStack',
    screen: StackNavigator({ home: { screen: Home } }, { initialRouteName: 'home', headerMode: 'float' })
    // screen: Home
  },
  // ProdutGrid: {
  //   // name: 'SecondViewStack',
  //   screen: StackNavigator(Stack, { initialRouteName: 'SecondView' })
  //   // screen: ProductGrid
  // },
  MyAccount: {
    // name: 'ThirdViewStack',
    screen: StackNavigator({ myAccount: { screen: MyAccount } }, { initialRouteName: 'myAccount' })
    // screen: ProductDetail
  },
};



const PrimaryNav = StackNavigator({
  Drawer: {
    name: 'Drawer',
    screen: DrawerNavigator(
      DrawerRoutes,
    ),
  },
  ProductStack: {
    screen: StackNavigator(ProductStack,
      {
        initialRouteName: 'Categories',
        headerMode: 'float',
      }
    )
  },
  ...Stack,
},
  {
    headerMode: 'none',
    // navigationOptions: ({ navigation }) => ({
    //   headerStyle: { backgroundColor: '#12110C' },
    //   title: 'THELEVELe',
    //   headerTintColor: 'white',
    //   headerLeft: <Button dark onPress={() =>
    //     navigation.navigate('DrawerOpen')}
    //   ><Icon name='menu' /></Button>,
    // }),
  }
);


// Manifest of possible screens
// const PrimaryNav = StackNavigator({
//   loginStack: { screen: LoginStack },
//   // drawerStack: { screen: NavigationDrawer },
//   Drawer: {
//     name: 'Drawer',
//     screen: DrawerNavigator(
//       DrawerRoutes,
//     ),
//   },
// }, {
//     headerMode: 'none',
//     initialRouteName: 'loginStack',
//     navigationOptions: ({ navigation }) => ({
//       headerStyle: { backgroundColor: '#E73536' },
//       title: 'You are not logged in',
//       headerTintColor: 'white',
//       headerLeft: <Text onPress={() =>
//         navigation.navigate('DrawerOpen')}>Menu</Text>,
//     }),
//   })
// const PrimaryNav =
//   StackNavigator({
//     Drawer: {
//       name: 'Drawer',
//       screen: DrawerNavigator(
//         DrawerRoutes,
//       ),
//     },
//     ...Stack
//   },
//     {
//       headerMode: 'none'
//     }
//   );

export default PrimaryNav;
