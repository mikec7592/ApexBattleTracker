// import { map } from 'lodash'
import React from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native"
import { withNavigation } from 'react-navigation';
 
const MapSelection = ({name, navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
            onPress={()=> 
            navigation.navigate('Map')
            }
            >
                <Image style={styles.image}/>
                {/* <Text style= {styles.name} >{map.name}</Text> */}
                <Text>YYYoooooo</Text>
            </TouchableOpacity>
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

export default withNavigation(MapSelection);
