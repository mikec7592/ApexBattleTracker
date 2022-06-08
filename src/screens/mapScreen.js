import React, { useState, useRef } from 'react'
import { View, Image, Text, StyleSheet, Button, Animated, useWindowDimensions } from 'react-native'


 const MapScreen = () => { 
     const touch =useRef(
         new Animated.ValueXY({x: 0, y: 0})
     ).current

     const dimensions = useWindowDimensions();

     const [markers, setMarkers] = useState([]);

     const createMarker = () => {
         setMarkers([...markers])
         return <Animated.View style={styles.marker}></Animated.View>
     }

     return (
         <View 
         onStartShouldSetResponder={()=> true}
         onResponderMove={(event) => {
             touch.setValue({
                 x: event.nativeEvent.locationX,
                 y: event.nativeEvent.locationY
             });
         }}
         >
             <Button 
             style ={styles.button}
             title = 'Add a marker'
             onPress={() => {
                 setMarkers([...markers, createMarker()])
             }}
             />
             <Image source={{uri: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/c/cf/Loadingscreen_Kings_Canyon_MU3.png/revision/latest/scale-to-width-down/1000?cb=20210202220042'}}
             style={styles.image}/>
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
     marker: {
         height: 3,
         width: 3,
         backgroundColor: 'red',
         position: 'absolute',
        //  left: touch.x,
        //  top: touch.y,
     },
     button: {
         backgroundColor: 'orange',
         textDecorationColor: 'red'
     }
 });

 export default MapScreen

//  Create a button that generates a dot that can be placed on the map?