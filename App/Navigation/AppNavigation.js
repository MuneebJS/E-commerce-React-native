import { StackNavigator, DrawerNavigator } from 'react-navigation'
import MainStack from './MainStack';
import DrawerStack from './DrawerStack';

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  Main: { screen: MainStack },
  drawerStack: { screen: DrawerNavigator(DrawerStack) }
}, {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'drawerStack'
  })

export default PrimaryNav;  