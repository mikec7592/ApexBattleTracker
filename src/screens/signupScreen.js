import React, {  useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

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
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <Spacer>
                <Text style={styles.link} >Already have an account?  Go to sign in.</Text>
            </Spacer>
        </TouchableOpacity>
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
    },
    link: {
        color: 'blue'
    }
});

export default SignupScreen;
 