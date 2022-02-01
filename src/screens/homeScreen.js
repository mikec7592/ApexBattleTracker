import { View, Text, StyleSheet, Flatlist, Button, ScrollView } from 'react-native';
import MenuBar from '../components/menuBar';
import MapSelection from '../components/MapSelection';

const HomeScreen = () => {
    return (
        <View style={styles.background}>
            <MenuBar/>
            <Text style={styles.titleStyle}>Apex Battle Tracker</Text>
            <ScrollView>
                <MapSelection
                mapName='Kings Canyon'
                mapPreview='https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/c/cf/Loadingscreen_Kings_Canyon_MU3.png/revision/latest/scale-to-width-down/1000?cb=20210202220042'/>
                <MapSelection
                mapName='Worlds Edge'
                mapPreview='https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/9/91/Loadingscreen_World%27s_Edge_MU3.png/revision/latest/scale-to-width-down/1000?cb=20210804105812'/>
                <MapSelection
                mapName='Olympus'
                mapPreview='https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/e/e1/Loadingscreen_Olympus_MU1.png/revision/latest/scale-to-width-down/1000?cb=20210504214336'/>
                <MapSelection
                mapName='Storm Point'
                mapPreview='https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/b/be/Loadingscreen_Storm_Point.png/revision/latest/scale-to-width-down/1000?cb=20211107010914'/>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'beige',
        flex: 1,
    },
    titleStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    scrollView: {
        backgroundColor: 'grey'
    }
});

export default HomeScreen;

// Add ghost container element 