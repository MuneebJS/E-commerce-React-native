
import React, { Component } from 'react';
import { ListView, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, Button } from 'native-base';
import {
    StackNavigator,
} from 'react-navigation';

export default class HalfBanner extends Component {
    render() {
        const { imageUrl, styles, title, description } = this.props;
        return (
            <TouchableOpacity style={{ flex: 1 }} onPress={this.props.onPress}>
                <Image
                    style={{ width: undefined, height: 250, }}
                    source={{ uri: imageUrl }}
                />
                <View style={{ marginTop: 10 }}><Text style={{ fontSize: 18, textAlign: 'center', fontWeight: 'bold' }}>{title}</Text></View>
                <View ><Text style={{ fontSize: 16, textAlign: 'center', color: '#CCCCCC' }}>{description}</Text></View>
            </TouchableOpacity>
        );
    }
}
