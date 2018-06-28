import React, { Component } from 'react';
import { Image, TouchableOpacity, StyleSheet, Dimensions, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';


export default class ProductTile extends Component {
    render() {
        const image = 'https://static.myfemi9.com/content/products/2018/04/285/list/1522734228-0.JPG';
        const { imageUrl, title, price, currency, onPress } = this.props;
        return (
            <TouchableOpacity
                style={styles.wrapper}
                onPress={onPress}
            >
                <View><Image source={{ uri: image }} style={{ height: 250, width: null, flex: 1 }} /></View>
                <View style={styles.priceWrap}>
                    <Text style={[styles.flex1, styles.priceText]}>{currency} {price}</Text>
                    {/* <Icon name="heart" style={styles.flex1} active={false} color="#fff"/> */}
                </View>
                <View style={styles.flex1}>
                    <Text style={styles.desText}>House 99 Cool Off Spray Deadarant 150ml</Text>
                </View>
            </TouchableOpacity >
        );
    }
}

const width = Dimensions.get('window').width
const styles = StyleSheet.create({
    wrapper: {
        width: (width / 2) - 22,
        marginLeft: 15,
        marginTop: 20
    },
    priceWrap: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        marginTop: 15,
    },
    flex1: {
        flex: 1
    },
    priceText: {
        fontWeight: 'bold',
    },
    desText: {
        fontSize: 14,
        lineHeight: 20,
        marginRight: 20,
    }
})