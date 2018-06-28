import React, { Component } from 'react';
import { ListView, View, StyleSheet, ScrollView, BackHandler } from 'react-native';
import { Text, Icon, Button } from 'native-base';


import HalfBanner from '../Components/HalfBanner';
import FullBanner from '../Components/FullBanner';

export default class Home extends Component {
    // constructor() {
    //     super();
    //     this.backAndroid =  this.backAndroid.bind(this);
    // }

    // componentDidMount() {
    //     BackHandler.addEventListener('hardwareBackPress', () => this.backAndroid) // Listen for the hardware back button on Android to be pressed
    // }
    // componentWillUnmount() {
    //     BackHandler.removeEventListener('hardwareBackPress', () => this.backAndroid)
    // }

    // backAndroid() {
    //     console.log("backAndroid", this.props);
    //     this.props.navigation.goBack() // Return to previous screen
    //     // this.props.navigation.dispatch(NavigationActions.back())
    //     return true // Needed so BackHandler knows that you are overriding the default action and that it should not close the app
    // }
    static navigationOptions = ({ navigation }) => ({
        title: <Text>THELEVELe</Text>,
        headerLeft: (
            <Button transparent onPress={() =>
                navigation.navigate('DrawerOpen')}
                style={{ marginBottom: 10 }}
            ><Icon name='menu'
                style={{ fontSize: 25, color: "#12110C", marginTop: 15 }} />
            </Button>
        ),
    });

    navigateToProducts() {
        this.props.navigation.navigate('Categories')
    }
    render() {
        const { navigation } = this.props;
        console.log("this.porps from home", this.props);
        return (
            <ScrollView style={{ padding: 15 }}>
                <Button dark full onPress={() =>
                    navigation.navigate('ProductStack')}
                    style={{ marginBottom: 10 }}
                >
                    <Text>Free delivery worldwide</Text>
                </Button>

                <FullBanner
                    imageUrl={'https://static2.thelevele.com/image/data/2018/THELEVELe/sliders/exclusive-Banner-Mobile-English.jpg'}
                    onPress={() => this.navigateToProducts()}
                />

                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
                }}
                >
                    <HalfBanner
                        imageUrl={'https://static2.thelevele.com/image/data/2018/THELEVELe/jumpsuit.jpg'}
                        title={'HOLIDAY'}
                        description={'Suit Yourself'}
                        onPress={() => this.navigateToProducts()}
                    />
                    <HalfBanner
                        imageUrl={'https://static.myfemi9.com/content/products/2018/03/268/list/1522145282-0.JPG'}
                        title={'OCCASIONAL'}
                        description={'Less shape, more drape'}
                        onPress={() => this.navigateToProducts()}
                    />
                </View>

                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 100,
                    marginTop: 20,
                }}
                >
                    <HalfBanner
                        imageUrl={'https://static.myfemi9.com/content/products/2018/03/274/list/1522146157-0.JPG'}
                        title={'HOLIDAY'}
                        description={'Suit Yourself'}
                        onPress={() => this.navigateToProducts()}
                    />
                    <HalfBanner
                        imageUrl={'https://static.myfemi9.com/content/products/2018/03/270/list/1522145612-0.JPG'}
                        title={'OCCASIONAL'}
                        description={'Less shape, more drape'}
                        onPress={() => this.navigateToProducts()}
                    />
                </View>
            </ScrollView>
        )
    }
}
