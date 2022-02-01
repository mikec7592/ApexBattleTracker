// import { map } from 'lodash'
import React from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native"
import { withNavigation } from 'react-navigation';
 
const MapSelection = ({mapName, navigation, mapPreview}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
            onPress={()=> 
            navigation.navigate('Map')
            }
            >
            <Text style={styles.name}>{mapName}</Text>
            <Image 
            source={{uri: mapPreview}}
            style={styles.image}/>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 37,
    },
    image: {
        width: 290,
        height: 175,
    },
    name: {
        fontWeight: 'bold',
    }
});

export default withNavigation(MapSelection);
