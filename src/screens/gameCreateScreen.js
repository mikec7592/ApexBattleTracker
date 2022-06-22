import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context';
import GameForm from '../components/GameForm';
import Map from '../components/map';
import Spacer from '../components/Spacer';

const GameCreateScreen = () => {
    return (
        <SafeAreaView forceInset={{ top: 'always' }}> 
            <Text h2> Log a Game </Text>
            <Map />
            <Spacer />
                <GameForm />
            <Spacer />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default GameCreateScreen;