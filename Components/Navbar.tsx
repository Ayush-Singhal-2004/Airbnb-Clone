import  { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { FontAwesome, FontAwesome6, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Navbar(){

    const handleSortIconPress = () => {
        console.log("sort icon clicked!!");
    }

    return (
        <View style={styles.container}>

            <View style={styles.searchBar}>
                <View style={[styles.navbarTop, styles.boxShadowProp]}>
                    <View style={styles.searchIcon}>
                        <FontAwesome name="search" size={26} color="black" />
                    </View>
                    <View>
                        <Text style={styles.navSearchHeading}>Where to?</Text>
                        <Text style={styles.navSearchText} numberOfLines={1}>Anywhere · Any week · Add Guest</Text>
                    </View>
                </View>
                <Pressable style={styles.sortIcon} onPress={handleSortIconPress}>
                    <FontAwesome6 name="sliders" size={20} color="black" />
                </Pressable>
            </View>

            <ScrollView style={styles.navScrollContainer} horizontal={true}>
                <View style={styles.navScrollItemContainer}>
                    <MaterialIcons name="surfing" size={28} color="black" />
                    <Text>Surfing</Text>
                </View>
                <View style={styles.navScrollItemContainer}>
                    <MaterialCommunityIcons name="window-open-variant" size={28} color="grey" />
                    <Text style={styles.navScrollItemName}>Amazing views</Text>
                </View>
                <View style={styles.navScrollItemContainer}>
                    <MaterialIcons name="house" size={28} color="grey" />
                    <Text style={styles.navScrollItemName}>Tiny homes</Text>
                </View>
                <View style={styles.navScrollItemContainer}>
                    <MaterialIcons name="pool" size={26} color="grey" />
                    <Text style={styles.navScrollItemName}>Amazing pools</Text>
                </View>
                <View style={styles.navScrollItemContainer}>
                    <MaterialCommunityIcons name="castle" size={26} color="grey" />
                    <Text style={styles.navScrollItemName}>Castles</Text>
                </View>
                <View style={styles.navScrollItemContainer}>
                    <FontAwesome6 name="umbrella-beach" size={26} color="grey" />
                    <Text style={styles.navScrollItemName}>Beach</Text>
                </View>
                <View style={styles.navScrollItemContainer}>
                    <MaterialCommunityIcons name="fruit-grapes-outline" size={26} color="grey" />
                    <Text style={styles.navScrollItemName}>Vineyards</Text>
                </View>
                <View style={styles.navScrollItemContainer}>
                    <FontAwesome name="snowflake-o" size={26} color="grey" />
                    <Text style={styles.navScrollItemName}>Arctic</Text>
                </View>
            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : "white",
        gap : 18,
        elevation: 15,
        shadowColor: '#4d4c4c',
    },
    searchBar : {
        flexDirection : "row",
        paddingTop : 48,
        paddingHorizontal : 18,
        alignItems : "center",
        gap : 10
    },
    navbarTop : {
        flex : 1,
        backgroundColor : "white",
        paddingVertical : 10,
        paddingHorizontal : 22,
        flexDirection : "row",
        alignItems : "center",
        borderRadius : 50,
    },
    boxShadowProp : {
        elevation: 12,
        shadowColor: 'black',
    },
    searchIcon : {
        marginRight : 15
    },
    navSearchHeading : {
        fontSize : 18,
        fontWeight : "bold",
    },
    navSearchText : {
        color : "grey",
    },
    sortIcon : {
        borderWidth : 2,
        borderColor : "#c9c7c7",
        padding : 10,
        borderRadius : 50
    },
    navScrollContainer : {
        paddingBottom : 12
    },
    navScrollItemContainer :{
        paddingHorizontal : 10,
        alignItems : "center",
        justifyContent : "center",
        gap : 6
    },
    navScrollItemName : {
        color : "grey",
    }
});