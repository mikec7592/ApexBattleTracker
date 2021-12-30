import { View, Text, StyleSheet, Flatlist, Button, ScrollView } from 'react-native';
import MenuBar from '../components/menuBar';
import mapSelection from '../components/mapSelection';

const HomeScreen = () => {
    return (
        <View style={styles.background}>
            <MenuBar/>
            {/* <Text>Apex Battle Tracker</Text>
            <ScrollView>
                <mapSelection/>
                <mapSelection/>
                <mapSelection/>
                <mapSelection/>
            </ScrollView> */}
        </View>
    )
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'beige'
    }
});

export default HomeScreen;