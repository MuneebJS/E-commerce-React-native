import React, { Component } from 'react';
import { ListView, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, Button } from 'native-base';
import {
    StackNavigator,
} from 'react-navigation';

export default class FullBanner extends Component {
    render() {
        const { imageUrl } = this.props;
        return (
            <TouchableOpacity
                style={{ flex: 1 }}
                onPress={this.props.onPress}
            >
                <Image
                    style={{ width: null, height: 500, }}
                    source={{ uri: imageUrl }}
                />
            </TouchableOpacity>
        )
    }
}