import React, {  useContext } from 'react';
import { View, StyleSheet} from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    return (
    <View style={styles.container}>
        <AuthForm 
            headerText='Become A Tracker'
            errorMessage={state.errorMessage}
            buttonText='Sign Up'
            onSubmit={signup}
        />
        <NavLink
            routeName='Signin'
            text='Already have an account? Go to sign in.'
        />
    </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

const styles = StyleSheet.create({
    container: {
        // borderColor: 'red',
        // borderWidth: 10,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 160
    }
});

export default SignupScreen;
 