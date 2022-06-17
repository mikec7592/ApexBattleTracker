import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack' 
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './src/screens/homeScreen'
import SigninScreen from './src/screens/signinScreen';
import MapScreen from './src/screens/mapScreen';
import AccountScreen from './src/screens/accountScreen';
import GameListScreen from './src/screens/gameListScreen';
import GameCreateScreen from './src/screens/gameCreateScreen';
import GameDetailsScreen from './src/screens/gameDetailsScreen';
import SignupScreen from './src/screens/signupScreen';
import { Provider as AuthProvider } from './src/context/AuthContext'
import { setNavigator } from './src/navigationRef';
import loadingScreen from './src/screens/loadingScreen';

const switchNavigator = createSwitchNavigator({
  loading: loadingScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    gameDetailFlow: createStackNavigator({
      GameList: GameListScreen,
      GameDetail: GameDetailsScreen
    }),
    Account: AccountScreen,
    Home: HomeScreen,
    GameCreate: GameCreateScreen,
    Maps: MapScreen,
  })
});
// const navigator = createStackNavigator({
//   Home: HomeScreen,
//   Login: loginScreen,
//   Map: MapScreen,

// }, {
//   intialRouteName: 'Home',
//   defaultNAvigationOptions: {
//     title: 'ApeLegs'
//   }
// });

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App ref={(navigator) => {setNavigator(navigator)}} />
    </AuthProvider>
  );
};