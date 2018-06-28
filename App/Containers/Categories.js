import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Grid, Col, Container, Spinner } from 'native-base';
import axios from 'axios';
import Placeholder from 'rn-placeholder';
import { connect } from 'react-redux'
import { BackHandler } from 'react-native'

import CategoryItem from '../Components/CategoryItem';
import CategoriesAction from '../Redux/CategoriesRedux';

class Categories extends Component {
    constructor() {
        super();
        this.state = {
            categories: null,
            isLoading: true,
        };
    }
    componentDidMount() {
        const { categories, getCategories } = this.props;
        if (!categories.payload) getCategories();
        // BackHandler.addEventListener('hardwareBackPress', () => this.backAndroid()) // Listen for the hardware back button on Android to be pressed
    }

    // componentWillUnmount() {
    //     BackHandler.removeEventListener('hardwareBackPress', () => this.backAndroid()) // Remove listener
    // }

    // backAndroid() {
    //     this.props.navigation.goBack() // Return to previous screen
    //     return true // Needed so BackHandler knows that you are overriding the default action and that it should not close the app
    // }
    render() {
        const { navigation, categories } = this.props;
        const n = 8; // Or something else
        if (categories.fetching) return <Spinner />
        if (categories.payload) {
            const data = categories.payload;
            console.log("categoriessssss", categories)
            return (
                <ScrollView>
                    {data.map((category, i) => {
                        return (
                            <CategoryItem
                                title={category.title}
                                onPress={() => {
                                    navigation.navigate('ProductGrid')
                                }}
                            />
                        )
                    })}
                </ScrollView>
            )
        }
        return null;
    }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
    getCategories: () => dispatch(CategoriesAction.categoriesRequest()),
});
const mapStateToProps = (state) => {
    return {
        categories: state.categories,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
