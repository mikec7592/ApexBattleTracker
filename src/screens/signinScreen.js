import React from 'react' 
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

// import { loginIcon } from '@expo/vector-icons'

const SigninScreen = () => {
    return (
        <View style={styles.container}>
            <AuthForm 
            headerText='Sign In to Your Account'
            errorMessage=''
            onSubmit={() => {}}
            buttonText='Sign In' 
            />
            <NavLink 
            text='Dont have an account?  Sign up instead.'
            routeName='Signup' />
        </View>
        // <View style={styles.backgroundStyle}>
        //     <TextInput
        //     placeholder='Username'
        //     style={styles.inputStyle}
        //     autoCapitalize='none'
        //     autoCorrect='false'
        //     />
        // </View>
    );
};

SigninScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };
  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 160
    },
    backgroundStyle: {
        backgroundColor: 'plum'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    }, iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
    }
});

export default SigninScreen;