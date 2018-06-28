
import React, { Component } from 'react';
import {View, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import { List, ListItem, Text, Icon, Left, Body, Right, Switch, H2, Thumbnail } from 'native-base';
import {
    StackNavigator,
} from 'react-navigation';
import styles from './Styles/CategoryItemStyles';

export default class CategoryItem extends Component {
    render() {
        const {navigation} = this.props;
        return (
                <TouchableOpacity 
                  style={styles.listItem}
                  onPress={this.props.onPress}
                > 
                    <Text style={styles.title}>{this.props.title.toUpperCase()}</Text>
                    <Image
                      style={styles.image}
                      source={{ uri: 'https://static2.thelevele.com/image/cache/data/products/29920/4ef553669f43bdd09db55b1e83a699c7-100x100.jpg' }}
                    />
                </TouchableOpacity>
        );
    }
}

// const width = Dimensions.get('window').width;
// const styles =StyleSheet.create({
//     listItem: {
//         backgroundColor: '#B3B5B6',
//         margin: 20,
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//     },
//     title: {
//         fontSize: 24,
//         paddingTop: 30,
//         paddingBottom: 30,
//         paddingLeft: 10,
//         width: width / 1.5,
//         // flex: 1,
//     },
//     image: {
//         width: width - (width / 1.5),
//         height: null,
//         // flex: 1,
//     }
// }) 
