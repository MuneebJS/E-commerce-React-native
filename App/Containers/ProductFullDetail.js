import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Alert, ListView } from 'react-native';
import { Grid, Col, Container, Spinner, Button } from 'native-base';
import axios from 'axios';
import ProductTile from '../Components/ProductTile';
import ImageSlider from '../Components/ImageSlider';
// import { Navigation } from 'react-native-navigation';
import {
    StackNavigator,
} from 'react-navigation';
import CategoryItem from '../Components/CategoryItem';
import ProductTopDetail from '../Components/ProductTopDetail';
import ProductOtherDetail from '../Components/ProductOtherDetail';
// import { otherDetailsData } from '../DummyData';


// const topDetails = ["blah blah blah", "blah blah blahsd", "blah blah blahsdf", "blah blah blahsdf"];
export default class ProductFullDetail extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            listData: [
                'Neque porro quisquam est qui ',
                'Neque porro quisquam est ',
                'Porro quisquam est  velit.',
                'Neque porro adipisci velit.'
            ],
            otherDetailsData : [
                {
                    title: "product code",
                    description: "123897",
                },
                {
                    title: "brand",
                    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
                },
             
                {
                    title: "size & fit",
                    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
                },
                {
                    title: "look after me",
                    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
                },
                {
                    title: "about me",
                    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
                },
            ]

        }
    }
    render() {
        // const topDetails = ds.cloneWithRows();
        console.log("otherDetailsData",)
        return (
            <ScrollView>
                <ProductTopDetail
                    category="Clothes"
                    brand="Femi9"
                    items={this.state.listData}
                />
                <ProductOtherDetail
                    items={this.state.otherDetailsData}
                />
            </ScrollView>
        );
    }
}

