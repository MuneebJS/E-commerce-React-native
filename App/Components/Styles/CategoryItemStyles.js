import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'


export default StyleSheet.create({
    listItem: {
        backgroundColor: '#B3B5B6',
        margin: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 24,
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 10,
        width: Metrics.screenWidth  / 1.5,
        // flex: 1,
    },
    image: {
        width: Metrics.screenWidth - (Metrics.screenWidth / 1.5),
        height: null,
        // flex: 1,
    }
}) 