import React from 'react';
import { TabNavigator } from 'react-navigation';
import Home from '../Containers/Home';
import Categories from '../Containers/Categories';
import metrics from '../Themes/Metrics';

const deviceWidth = metrics.screenWidth;
const deviceHeight = metrics.screenHeight;

export default TabNavigator({
    Home: { screen: Home },
    Categories: { screen: Categories },
},
    {
        navigationOptions: ({ navigation }) => ({
            // tabBarIcon: ({ focused, tintColor }) => {
            //     const { routeName } = navigation.state;
            //     let iconName;
            //     if (routeName === 'Home') {
            //         iconName = `ios-information-circle${focused ? '' : '-outline'}`;
            //     } else if (routeName === 'Settings') {
            //         iconName = `ios-options${focused ? '' : '-outline'}`;
            //     }

            //     // You can return any component that you like here! We usually use an
            //     // icon component from react-native-vector-icons
            //     return <Ionicons name={iconName} size={25} color={tintColor} />;
            // },
        }),
        tabBarOptions: {
            titleStyle: {
                //     justifyContent: 'center',
                //     alignItems: 'center',
                // },
                // style: {
                //     borderWidth: 1,
                //     borderTopWidth: 2,
                //     backgroundColor: '#fff',
                //     borderColor: '#fff',
                //     borderBottomWidth: 2,
                //     // borderBotto
                //     borderBottomColor: '#0033aa',
                //     activeBorderBottomWidth: 2 ,               
                //     activeBorderBottomColor: '#0033aa',
                //     // borderRadius: 4,
                //     // position: 'absolute',
                //     // left: (deviceWidth * 6) / 25,
                //     // right: (deviceWidth * 6) / 25,
                //     // bottom: (deviceHeight * 2) / 67,
                //     height: (deviceHeight * 4) / 67,
                //     justifyContent: 'center',
                //     alignItems: 'center',
                // },
                // // activeBackgroundColor: 'rgb(0, 79, 114)',
                // // inactiveBackgroundColor: 'rgb(27, 42, 51)',
                // activeborderWidth: 2,
                // activeborderColor: '#0033aa',
                // // inactiveborderColor: '#0033aa',
                // labelStyle: {
                //     fontSize: 18,
                //     fontWeight: 'bold',
                //     color: '#12110C',
                //     // height: (deviceHeight * 4) / 67,
                //     // position: 'relative',
                //     // alignSelf: 'center',
                //     // padding: 6,
                //     // marginBottom: ((deviceHeight * 4) / 67) * 0.20,
                // },
                // tabStyle: {
                //     justifyContent: 'center',
                //     alignItems: 'center'
                // }
                activeTintColor: '#12110C',

                labelStyle: {
                    fontSize: 14,
                },
                style: {
                    backgroundColor: '#009688',
                },
            }
        },
        // tabBarComponent: TabBarBottom,
        // tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: true,
    }
);
