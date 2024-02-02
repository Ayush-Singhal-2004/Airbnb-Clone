import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { AntDesign, FontAwesome } from '@expo/vector-icons';

export default function Post({image, name, rate, distance, price}) {
        
    return (
        <View style={styles.container}>
            <View style={styles.upperContainer}>
                <View>
                    <Image 
                        source={image}
                        style={styles.image}
                    />
                    <FontAwesome name="heart-o" size={24} color="white" style={styles.heartIcon}/>
                </View>
            </View>
            <View style={styles.lowerContainer}>
                <View style={styles.postInfo}>
                    <Text style={styles.heading}>{name}</Text>
                    <View style={styles.rate}>
                        <AntDesign name="star" size={14} color="black" />
                        <Text>{rate}</Text>
                    </View>
                </View>
                <Text style={styles.distance}>{distance}</Text>
                <Text style={styles.price}>
                    {price} 
                    <Text style={styles.day}> night</Text>
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        alignItems : "center",
        paddingVertical : 18
    },
    upperContainer : {
        marginBottom : 10
    },
    image : {
        height : 300,
        width : 320,
        borderRadius : 12
    },
    heartIcon : {
        position : "absolute",
        right : 15,
        top : 15
    },
    lowerContainer : {
        width : 300
    },
    postInfo : {
        flexDirection : "row",
        justifyContent : "space-between",
    },
    heading : {
        fontSize : 16,
        fontWeight : "bold"
    },
    rate : {
        flexDirection : "row",
        alignItems : "center",
        gap : 3
    },
    distance : {
        color : "grey",
        fontSize : 15,
        marginBottom : 2
    },
    price : {
        fontWeight : "bold",
        fontSize : 16
    },
    day : {
        fontWeight : "300"
    }
});