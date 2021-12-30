// import { map } from 'lodash'
import React from 'react'
import { View, Image, StyleSheet, Text } from "react-native"
// import { withNavigation } from 'react-navigation';
 
const mapSelection = ({name, navigation}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image}/>
            {/* <Text style= {styles.name} >{map.name}</Text> */}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 50,
    },
    image: {
        width: 250,
        height: 125,
    },
    name: {
        fontWeight: 'bold',
    }
});

export default mapSelection
