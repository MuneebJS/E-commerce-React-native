import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import { Grid, Col, Container, Spinner } from 'native-base';
import { connect } from 'react-redux';
import axios from 'axios';

import ProductTile from '../Components/ProductTile';
import styles from './Styles/ProductGridStyles';
import ProductGridActions from '../Redux/ProductGridRedux';

class ProductGrid extends Component {
    constructor() {
        super();
        this.state = {
            products: null,
            isLoading: true,
        };
        this.getProducts = this.getProducts.bind(this);
    }
    componentDidMount() {
        const { productGrid, getProducts } = this.props;
        if (!productGrid.payload) {
            getProducts();
        }
    }
    getProducts() {
        // console.log("get Products call")
        axios.get('https://mock-apis.herokuapp.com/index.php/api/categoryProducts')
            .then(function (response) {
                this.setState({
                    products: response.data.products,
                    isLoading: false,
                });
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            })
    }
    render() {
        console.log("this.props from product grid", this.props)
        const { productGrid } = this.props;
        if (productGrid.fetching) return <Spinner />
        if (productGrid.error) return <View><Text>Oops! there is problem with your internet connection</Text></View>
        if (productGrid.payload) {
            const productList = productGrid.payload.products;
            return <ScrollView
                    contentContainerStyle={styles.listView}
                   >
                {productList.map((product, i) => {
                    return (
                        <ProductTile
                            imageUrl={product.url}
                            price={product.new_price}
                            currency={product.currency}
                            key={i}
                            title={product.name}
                            onPress={() => this.props.navigation.navigate('ProductDetail')
                            }
                        />
                    )
                })}
            </ScrollView>
        }
        return null;
    }
}

const width = Dimensions.get('window').width

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
    getProducts: () => {
        dispatch(ProductGridActions.productGridRequest())
    },
});

const mapStateToProps = (state) => {
    return {
        productGrid: state.productGrid,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductGrid);