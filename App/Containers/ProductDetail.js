import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Grid, Col, Container, Spinner, Button } from 'native-base';
import axios from 'axios';
import { connect } from 'react-redux';

import ProductTile from '../Components/ProductTile';
import ImageSlider from '../Components/ImageSlider';
import CategoryItem from '../Components/CategoryItem';
import ProductDetailTopSlider from '../Components/ProductDetailTopSlider';
import Picker from '../Components/Picker';
import ProductDetailAction from '../Redux/ProductDetailRedux';
import styles from './Styles/ProductDetailStyles';

const sizeItems = [
    {
        label: "XS",
        key: "item1",
    },
    {
        label: "SM",
        key: "item12",
    },
    {
        label: "LG",
        key: "item13",
    },
]
class ProductDetail extends Component {
    componentDidMount() {
        this.props.getProductDetail();
    }
    navigateToFull() {
        this.props.navigation.navigate('ProductFullDetail');
    }
    render() {
        console.log("this.props product detail", this.props)
        const { productDetail } = this.props;
        if (productDetail.fetching) return <Spinner />;
        if (productDetail.payload) {
            const pd = productDetail.payload;
            return (
                <ScrollView>
                    <ProductDetailTopSlider items={pd.slideshow} />
                    <View style={styles.description}>
                        <Text style={styles.descriptionText}>
                            THELEVELe DESIGN Pull ON Straight Leg Trouser In Candy Stripe
                            </Text>
                        <Text style={styles.price}>$22</Text>
                    </View>

                    <View style={styles.attrWrap}>
                        <View><Text style={styles.sizeTypeText}>MULTI</Text></View>
                        <View style={styles.picker}><Picker items={sizeItems} selectedValue={"Size"} /></View>
                    </View>
                    <View style={styles.actionsWrap}>
                        <Button full info onPress={() => {
                            Alert.alert(
                                'Confirmation',
                                'Please select one',
                                [
                                    { text: 'Confirm', onPress: () => console.log('Ask me later pressed') },
                                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                                ],
                                { cancelable: false }
                            )
                        }}
                            style={styles.addToBagBtn}
                        >
                            <Text style={styles.btnText}>ADD TO BAG</Text>
                        </Button>
                    </View>
                    <TouchableOpacity style={styles.linkWrap} onPress={() => this.navigateToFull()}>
                        <Text style={styles.linkText}>FREE SHIPPING WORLDWIDE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.linkWrap} onPress={() => this.navigateToFull()}>
                        <Text style={styles.linkText}>PRODUCT DETAILS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.linkWrap} onPress={() => this.navigateToFull()}>
                        <Text style={styles.linkText}>SIZE GUIDE</Text>
                    </TouchableOpacity>
                </ScrollView>
            );
        }
        return null;
    }
}


// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
    getProductDetail: () => dispatch(ProductDetailAction.productDetailRequest()),
});
const mapStateToProps = (state) => {
    return {
        productDetail: state.productDetail,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);