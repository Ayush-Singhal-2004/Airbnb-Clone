import FootNavbar from "../Components/FootNavbar";
import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView, 
    Dimensions, 
    TouchableOpacity
} from "react-native";
import { Image } from "expo-image";
import { FontAwesome, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { profilePageOptions } from "../data";

const windowHeight = Dimensions.get('window').height;

export default function Profile() {
    return (
        <View>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.heading}>Profile</Text>
                    <TouchableOpacity>
                        <FontAwesome name="bell-o" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.profileNameSection}>
                    <View>
                        <Image 
                        source={"https://tr.rbxcdn.com/38c6edcb50633730ff4cf39ac8859840/420/420/Hat/Png"}
                        style={styles.profilePicture}
                        />
                    </View>
                    <View style={styles.profileName}>
                        <Text 
                        style={{fontSize : 20, fontWeight : "400"}}
                        >
                            Ayush
                        </Text>
                        <Text 
                        style={{color : "grey", fontSize : 15}}
                        >
                            show profile
                        </Text>
                    </View>
                    <MaterialIcons name="arrow-forward-ios" size={20} color="black" />
                </TouchableOpacity>
                <View style={styles.profileAirbnbImageContainer}>
                    <View style={styles.profileAirbnbImageInnerContainer}>
                        <View style={{gap : 8}}>
                            <Text 
                            style={{fontSize : 20, fontWeight : "500"}}
                            >
                                Airbnb your place
                            </Text>
                            <Text
                            style={{fontSize : 15, width : 180}}
                            >
                                It's simple to get set up and start earning.
                            </Text>
                        </View>
                        <Image 
                        source={require("../assets/images/default-large-removebg-preview.png")}
                        style={{height : 100, width : 100}}
                        />
                    </View>
                </View>
                <View>
                    {
                        profilePageOptions.map((item, index:number) => (
                            <View key={index}>
                                <Text 
                                style={{fontSize : 24, fontWeight : "500", paddingHorizontal : 20, paddingVertical : 22}}
                                >
                                    {item.heading}
                                </Text>
                                {
                                    item.options.map((option, index) => (
                                        <View key={index} style={{paddingHorizontal : 22}}>
                                            {
                                                option.component == "FontAwesome5" ?
                                                <TouchableOpacity style={styles.option}>
                                                    <FontAwesome5 name={option.icon} size={25} color="#4a4a4a"/>
                                                    <Text
                                                    style={{fontSize : 16, width : 220, fontWeight : "300"}}
                                                    >
                                                        {option.name}
                                                    </Text>
                                                    <MaterialIcons name="arrow-forward-ios" size={18} color="black" 
                                                    style={{position : "absolute", right : 5}}
                                                    />
                                                </TouchableOpacity>
                                                :
                                                <TouchableOpacity style={styles.option}>
                                                    <MaterialIcons name={option.icon as any} size={26} color="#4a4a4a" />
                                                    <Text
                                                    style={{fontSize : 16, width : 160, fontWeight : "300"}}
                                                    >
                                                        {option.name}
                                                    </Text>
                                                    <MaterialIcons name="arrow-forward-ios" size={18} color="black" 
                                                    style={{position : "absolute", right : 5}}
                                                    />
                                                </TouchableOpacity>
                                            }
                                        </View>
                                    ))
                                }
                            </View>
                        ))
                    }
                </View>
                <TouchableOpacity style={[styles.option, {marginHorizontal : 22}]}>
                    <Text 
                    style={{fontSize : 16, width : 160, fontWeight : "400", textDecorationLine : "underline", paddingVertical : 7}}
                    >
                        Log out
                    </Text>
                </TouchableOpacity>
                <Text style={{fontSize : 12, fontWeight : "400", marginHorizontal : 22, paddingVertical : 22}}>Version 24.04(28002578)</Text>
            </ScrollView>
            <FootNavbar name={"profile"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        height : windowHeight * (90/100)
    },
    header : {
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
        paddingHorizontal : 26,
        paddingVertical : 38
    },
    heading : {
        fontSize : 35,
        fontWeight : "500"
    },
    profileNameSection : {
        flexDirection : "row",
        alignItems : "center",
        marginHorizontal : 22,
        borderBottomWidth : 1,
        borderBottomColor : "#e0e0e0",
        paddingBottom : 22
    },
    profilePicture : {
        height : 68,
        width : 68,
        borderRadius : 50,
        marginRight : 12
    },
    profileName : {
        width : "68%"
    },
    profileAirbnbImageContainer : {
        padding : 22,
        borderBottomWidth : 1,
        borderBottomColor : "#e0e0e0"
    },
    profileAirbnbImageInnerContainer : {
        flexDirection : "row",
        alignItems : "center",
        gap : 15,
        backgroundColor : "white",
        padding : 18,
        borderRadius : 12,
        elevation : 5
    },
    option : {
        flexDirection : "row",
        alignItems : "center",
        gap : 25,
        paddingVertical : 15,
        borderBottomColor : "#e0e0e0",
        borderBottomWidth : 1,
        position : "relative"
    }
});