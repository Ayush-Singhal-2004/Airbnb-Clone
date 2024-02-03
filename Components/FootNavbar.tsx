import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Feather, AntDesign, FontAwesome5, Ionicons, EvilIcons } from '@expo/vector-icons';
import { router } from "expo-router"; 

export default function FootNavbar({name}) {

    return (
        <View style={styles.navContainer}>
            <TouchableOpacity 
            onPress={() => router.replace("/")}
            >
                <Feather 
                name="search" 
                size={28} 
                color={name == "explore" ? "#f21353" : "#9c9c9c"} 
                />
                <Text style={name == "explore" ? styles.navSelectedIconText : styles.navIconText}>
                    Explore
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.iconContainer} 
            onPress={() => router.replace("/Wishlist")}
            >
                <AntDesign 
                name="hearto" 
                size={26} 
                color={name == "wishlist" ? "#f21353" : "#9c9c9c"} 
                />
                <Text style={name == "wishlist" ? styles.navSelectedIconText : styles.navIconText}>
                    Wishlists
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.iconContainer}
            onPress={() => router.replace("/Trips")}
            >
                <FontAwesome5 
                name="airbnb" 
                size={26} 
                color={name == "trips" ? "#f21353" : "#9c9c9c"}
                />
                <Text style={name == "trips" ? styles.navSelectedIconText : styles.navIconText}>Trips</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.iconContainer}
            onPress={() => router.replace("/Inbox")}
            >
                <Ionicons 
                name="chatbox-outline" 
                size={26} 
                color={name == "inbox" ? "#f21353" : "#9c9c9c"}
                />
                <Text style={name == "inbox" ? styles.navSelectedIconText : styles.navIconText}>Inbox</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.iconContainer}
            onPress={() => router.replace("/Profile")}
            >
                <EvilIcons 
                name="user" 
                size={38} 
                color={name == "profile" ? "#f21353" : "#9c9c9c"} 
                />
                <Text style={name == "profile" ? styles.navSelectedIconText : styles.navIconText}>Profile</Text>
            </TouchableOpacity>
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