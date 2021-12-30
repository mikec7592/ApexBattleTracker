import React from 'react' 
import { View, TextInput, StyleSheet } from 'react-native'
// import { loginIcon } from '@expo/vector-icons'

const loginScreen = () => {
    return (
        <View style={styles.backgroundStyle}>
            <TextInput
            placeholder='Username'
            style={styles.inputStyle}
            autoCapitalize='none'
            autoCorrect='false'
            />
        </View>
    );
};

const styles = StyleSheet.create({
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

export default loginScreen;