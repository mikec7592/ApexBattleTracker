import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';


const MenuBar = () => {
    return (
        <View>
            <AntDesign name="infocirlce" size={24} color="black" />
            <Text></Text>
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 15,
        backgroundColor:'grey',
        height: 50,
        borderRadius: 5,
        // flexDirection: 'row',
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'flex-start'
        // marginHorizontal: 10,
    }
});

export default MenuBar;