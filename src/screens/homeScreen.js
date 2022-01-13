import { View, Text, StyleSheet, Flatlist, Button, ScrollView } from 'react-native';
import MenuBar from '../components/menuBar';
import MapSelection from '../components/MapSelection';

const HomeScreen = () => {
    return (
        <View style={styles.background}>
            <MenuBar/>
            <Text style={styles.titleStyle}>Apex Battle Tracker</Text>
            <ScrollView>
                <MapSelection/>
                <MapSelection/>
                <MapSelection/>
                <MapSelection/>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'beige'
    },
    titleStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
});

export default HomeScreen;

// Add ghost container element 