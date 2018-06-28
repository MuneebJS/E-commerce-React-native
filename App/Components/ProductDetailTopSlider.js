import React, { Component } from 'react';
import { View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { List, ListItem, Text, Icon, Left, Body, Right, Switch, H2, Thumbnail } from 'native-base';
import {
    StackNavigator,
} from 'react-navigation';
import ImageSlider from './ImageSlider';

export default class ProductDetailTopSlider extends Component {
    render() {
        const { navigation, items } = this.props;
        return (
            <ImageSlider>
                {items.map((slide, i) => {
                    return (
                        <Image
                            style={styles.image}
                            source={{ uri: slide.original }}
                        />
                    );
                })}
            </ImageSlider>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: null,
        height: null,
        flex: 1,
    }
}) 
