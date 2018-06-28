import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../Themes/';


export default StyleSheet.create({
    wrapper: {
        flex: 1,
        margin: 10,
        padding: 10,
    },
    titleWrap: {
        marginTop: 10,
    },
    desWrap: {
        marginTop: 5,
        paddingLeft: 10,
    },
    desText: {
        lineHeight: 25,
        fontSize: 16,
        color: '#000'
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 18,
    }
})

