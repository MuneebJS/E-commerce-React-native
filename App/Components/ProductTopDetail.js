import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, Text, ListView, items } from 'react-native';


export default class ProductTopDetail extends Component {
    renderList(text) {
        return (
            <Text style={styles.listItem}>{`\u2022 ${text}`}</Text>
        );
    }
    render() {
        const image = 'https://static.myfemi9.com/content/products/2018/04/285/list/1522734228-0.JPG';
        const { category, brand, items } = this.props;
        console.log("itemsss", items)
        return (
            <View
                style={styles.wrapper}
            >
                <View style={styles.flex1}>
                    <Text style={[styles.bold]}>{category}<Text style={{ fontWeight: 'normal' }}> By</Text> {brand}</Text>
                </View>
                {items.map((item) => {
                    return this.renderList(item)
                })}
            </View >
        );
    }
}

const width = Dimensions.get('window').width
const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
        margin: 10,
    },
    bold: {
        fontWeight: 'bold',
    },
    flex1: {
        flex: 1,
    },
    list: {

    },
    listItem: {
        fontSize: 16,
        lineHeight: 20,
        color: '#000',
        lineHeight: 25,        
    }
})