import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../Themes/';


export default StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    description: {
        borderTopWidth: 2,
        borderTopColor: '#d6d7da',
        padding: 20,
        marginTop: 20,
    },
    descriptionText: {
        fontSize: 16,
        color: '#000',
        lineHeight: 28,
        marginRight: 40,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        lineHeight: 28,
    },
    attrWrap: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        borderTopWidth: 1,
        borderTopColor: '#d6d7da',
        borderBottomWidth: 1,
        borderBottomColor: '#d6d7da',
        padding: 10
    },
    picker: {
        width: 150,
        marginTop: -10,
    },
    sizeTypeText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    actionsWrap: {
        padding: 20,
        flex: 1,
        borderBottomWidth: 3,
        borderBottomColor: '#d6d7da',
    },
    btnText: {
        fontWeight: 'bold',
    },
    linkWrap: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#d6d7da',
    },
    linkText: {
        fontWeight: 'bold',
        fontSize: 20,
    }
})
