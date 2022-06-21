import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context';
import Map from '../components/map';

const GameCreateScreen = () => {
    return (
        <SafeAreaView forceInset={{ top: 'always' }}> 
            <Text h2> Log a Game </Text>
            <Map />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({});

export default GameCreateScreen;