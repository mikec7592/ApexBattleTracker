import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

 const MapScreen = () => {
     return (
         <View>
             <Image/>
             <Text>Map Screen</Text>
         </View>
     );
 };

 const styles = StyleSheet.create({
     image: {
         height: 650,
         width: 400,

     },
     background: {
         backgroundColor: 'blue',
     },
     mapName: {
         fontSize: 45,
         fontWeight: 'bold',
         alignSelf: 'center'
     },
 });

 export default MapScreen