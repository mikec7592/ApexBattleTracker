import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const GameListScreen = ({ navigation }) => {
    return (
        <>
            <Text style={{ fontSize: 40 }}>GameListScreen</Text>
            <Button 
            title='Go to Game Details'
            onPress={() => navigation.navigate('GameDetail')} />
        </>
    ) 
};

const styles = StyleSheet.create({});

export default GameListScreen;
 