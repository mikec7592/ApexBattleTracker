import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack' 
import HomeScreen from './src/screens/homeScreen'
import loginScreen from './src/screens/loginScreen';
import MapScreen from './src/screens/mapScreen';

const navigator = createStackNavigator({
  Home: HomeScreen,
  Login: loginScreen,
  Map: MapScreen,

}, {
  intialRouteName: 'Home',
  defaultNAvigationOptions: {
    title: 'ApeLegs'
  }
});

export default createAppContainer(navigator);