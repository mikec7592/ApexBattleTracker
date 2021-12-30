import React from 'react';
import { View, Text, StyleSheet  } from 'react-native';

const parameters = ({ prompt, optionOne, optionTwo }) => {
    return (
        <View>
            <Text>Question</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    promptStyle: {
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    optionsStyle: {
        fontSize: 18,
    }
});

export default parameters


// add radio buttons for option choices??
// is there a native form option??