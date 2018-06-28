import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';


export default class MyAccount extends Component {
    render() {
        const { imageUrl, title, price, currency } = this.props;
        return (
            <View>
                <Text>Welcome to your account</Text>
            </View>
        );
    }
}