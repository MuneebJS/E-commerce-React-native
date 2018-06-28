import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

const width = Metrics.screenWidth;

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