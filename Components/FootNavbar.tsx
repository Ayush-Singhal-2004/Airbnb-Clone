import { View, Text, StyleSheet } from "react-native"
import { Feather, AntDesign, FontAwesome5, Ionicons, EvilIcons } from '@expo/vector-icons';

export default function FootNavbar() {

    return (
        <View style={styles.navContainer}>
            <View style={styles.iconContainer}>
                <Feather name="search" size={28} color="#f21353" />
                <Text style={styles.navSelectedIconText}>Explore</Text>
            </View>
            <View style={styles.iconContainer}>
                <AntDesign name="hearto" size={26} color="#9c9c9c" />
                <Text style={styles.navIconText}>Wishlists</Text>
            </View>
            <View style={styles.iconContainer}>
                <FontAwesome5 name="airbnb" size={26} color="#9c9c9c" />
                <Text style={styles.navIconText}>Trips</Text>
            </View>
            <View style={styles.iconContainer}>
                <Ionicons name="chatbox-outline" size={26} color="#9c9c9c" />
                <Text style={styles.navIconText}>Inbox</Text>
            </View>
            <View style={styles.iconContainer}>
                <EvilIcons name="user" size={38} color="#9c9c9c" />
                <Text style={styles.navIconText}>Profile</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    navContainer : {
        flexDirection : "row",
        justifyContent : "space-evenly",
        alignItems : "center",
        paddingVertical : 8,
        backgroundColor : "white",
        borderTopColor : "#ededed",
        borderTopWidth : 1
    },
    iconContainer : {
        alignItems : "center",
        justifyContent : "center",
        paddingVertical : 5
    },
    navSelectedIconText : {
        color : "#f21353",
        fontSize : 11,
        fontWeight : "500"
    },
    navIconText : {
        color : "#bdbdbd",
        fontSize : 11,
        fontWeight : "500",
    }
});