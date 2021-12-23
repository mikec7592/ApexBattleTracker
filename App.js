import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack' 
import HomeScreen from './src/screens/homeScreen'

const navigator = createStackNavigator({
  Home: HomeScreen,
  
}, {
  intialRouteName: 'Home',
  defaultNAvigationOptions: {
    title: 'ApeLegs'
  }
});

export default createAppContainer(navigator);