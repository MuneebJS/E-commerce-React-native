import React from 'react';
import {
  Text,
  View
} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './Styles/ImageSliderSyles';

// var styles = {
//   wrapper: {
//     height: 400,
//     width: 400,
// },
//   slide1: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#9DD6EB'
//   },
//   slide2: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#97CAE5'
//   },
//   slide3: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#92BBD9'
//   },
//   text: {
//     color: '#fff',
//     fontSize: 30,
//     fontWeight: 'bold'
//   }
// }

export default (props) => <Swiper style={styles.wrapper} showsButtons>
  {props.children}
</Swiper>