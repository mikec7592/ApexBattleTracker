import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack' 
import HomeScreen from './src/screens/homeScreen'
import loginScreen from './src/screens/loginScreen';
import MapScreen from './src/screens/mapScreen';
import AccountScreen from './src/screens/accountScreen';
import GamesScreen from './src/screens/gamesScreen';
import SignupScreen from './src/screens/signupScreen';

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