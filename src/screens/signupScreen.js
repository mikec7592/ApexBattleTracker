import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const SignupScreen = ({ navigation }) => {
    return (
    <>
        <Text style={{ fontSize: 30 }}> SignupScreen</Text>
        <Button 
        title='Go to Sign in'
        onPress={() => navigation.navigate('Signin')}
        />
        <Button 
        title='Go to Home'
        onPress={() => navigation.navigate('mainFlow')}
        />
    </>
    );
};

const styles = StyleSheet.create({});

export default SignupScreen;
 