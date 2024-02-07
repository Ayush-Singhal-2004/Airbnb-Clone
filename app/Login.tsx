import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions} from "react-native";
import { Image } from "expo-image";
import { AntDesign, Fontisto,FontAwesome5 } from '@expo/vector-icons';
import { useState } from "react";
const screenWidth = Dimensions.get("window").width;

export default function Login() {

    const [phoneNumber, setPhoneNumber] = useState(null);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <AntDesign name="close" size={25} color="black" />
                </TouchableOpacity>
                <Text
                style={{fontSize : 24, fontWeight : "500"}}
                >Log in or sign up to Airbnb</Text>
            </View>
            <View> 
                <TextInput 
                style={styles.inputContainer}
                placeholder="Phone number"
                keyboardType="number-pad"
                defaultValue={phoneNumber}
                onChangeText={(newText) => setPhoneNumber(newText)}
                />
                <Text
                style={{fontSize : 13, color : "#4a4a4a"}}>We'll call or text you to confirm your number.</Text>
                <Text style={{fontSize : 13, color : "#4a4a4a"}}>Standard message and data rates apply.</Text>
            </View>
            <View 
            style={{paddingVertical : 25, borderBottomColor : "#ebebeb", borderBottomWidth : 1}}
            >
                <TouchableOpacity style={styles.continueButton}>
                    <Text style={{color : "white", fontSize : 18, fontWeight : "500"}}>Continue</Text>
                </TouchableOpacity>
            </View>
            <Text 
            style={{color : "#a6a6a6", position : "relative", bottom : 12, backgroundColor : "white", paddingHorizontal : 14}}
            >
                or
            </Text>
            <View style={{paddingVertical : 5, gap : 15}}>
                <TouchableOpacity style={styles.loginOptions}>
                    <Fontisto name="email" size={24} color="black" style={styles.optionsIcon} />
                    <Text 
                    style={{fontSize : 18, fontWeight : "500"}}
                    >
                        Continue with Email
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginOptions}>
                    <FontAwesome5 name="facebook" size={24} color="#316FF6" style={styles.optionsIcon}/>
                    <Text 
                    style={{fontSize : 18, fontWeight : "500"}}
                    >
                        Continue with Facebook
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginOptions}>
                    <Image 
                    source={"https://banner2.cleanpng.com/20180521/ers/kisspng-google-logo-5b02bbe1d5c6e0.2384399715269058258756.jpg"}
                    style={{height : 25, width : 25, marginHorizontal : 18}}
                    />
                    <Text 
                    style={{fontSize : 18, fontWeight : "500"}}
                    >
                        Continue with Google
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginOptions}>
                    <AntDesign name="apple1" size={24} color="black" style={styles.optionsIcon}/>
                    <Text 
                    style={{fontSize : 18, fontWeight : "500"}}
                    >
                        Continue with Apple
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        position : "relative"
    },
    header : {
        paddingVertical : 20,
        gap : 20,
        marginBottom : 10
    },
    inputContainer : {
        backgroundColor : "white",
        width : screenWidth * 86/100,
        paddingVertical : 20,
        paddingHorizontal : 12,
        borderColor : "grey",
        borderWidth : 1,
        borderRadius : 10,
        fontSize : 18,
        marginBottom : 10
    },
    continueButton :{
        backgroundColor : "#eb2671",
        width : screenWidth * 88/100,
        paddingVertical : 18,
        alignItems : "center",
        borderRadius : 10
    },
    loginOptions : {
        width : screenWidth * 88/100,
        paddingVertical : 15,
        borderColor : "black",
        borderWidth : 1.5,
        borderRadius : 10,
        flexDirection : "row",
        alignItems : "center"
    },
    optionsIcon : {
        paddingHorizontal : 18
    }
});