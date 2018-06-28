import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, Text } from 'react-native';
import styles from './Styles/ProductOtherDetailStyles';

export default class ProductOtherDetail extends Component {
    renderContent(data) {
        console.log("data", data)
        return (
            <View>
                <View style={styles.titleWrap}><Text style={styles.titleText}>{data.title.toUpperCase()}</Text></View>
                <View style={styles.desWrap}><Text style={styles.desText}>{data.description}</Text></View>
            </View>
        );
    }
    render() {
        const image = 'https://static.myfemi9.com/content/products/2018/04/285/list/1522734228-0.JPG';
        const { items } = this.props;
        return (
            <View style={styles.wrapper}>
                {items.map((item) => {
                 return this.renderContent(item);
                })}
            </View >
        );
    }
}

// const styles = StyleSheet.create({
//     wrapper: {
//         flex: 1,
//         margin: 10,
//         padding: 10,
//     },
//     titleWrap: {
//         marginTop: 10,
//     },
//     desWrap: {
//         marginTop: 5,
//         paddingLeft: 10,
//     },
//     desText: {
//         lineHeight: 25,
//         fontSize: 16,
//         color: '#000'
//     },
//     titleText: {
//         fontWeight: 'bold',
//         fontSize: 18,
//     }
// })