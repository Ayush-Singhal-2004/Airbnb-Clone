import FootNavbar from "../Components/FootNavbar";
import { View, Text, StyleSheet, Dimensions, ScrollView, FlatList } from "react-native";
import useExploreContent from "../Context/ExploreContext";
import { Image } from "expo-image";

const screenwidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

export default function Wishlist() {

    const exploreContent = useExploreContent();

    return (
        <View style={styles.container}>
            <View>
                <Text
                style={{position : "absolute", right : 0, fontWeight : "500", textDecorationLine : "underline", fontSize : 15}}
                >Edit</Text>
            </View>
            <View>
                <Text
                style={{marginTop : 40, fontSize : 36, fontWeight : "500", paddingBottom : 35}}
                >Wishlists</Text>
            </View>
            {
                exploreContent.wishlists.length == 0 ?
                <View>
                    <Text
                    style={{fontSize : 24, fontWeight : "bold", paddingBottom : 12}}
                    >Create your first wishlist</Text>
                    <Text
                    style={{fontSize : 15, color : "#828282"}}
                    >As you search, tap the heart icon to save your favorite places and Experiences to a wishlist.</Text>
                </View>
                : 
                <View style={{height : screenHeight*62/100, alignItems : "center"}}>
                    <FlatList 
                    showsVerticalScrollIndicator={false}
                    data={exploreContent.wishlists}
                    style={styles.wishlistContainer}
                    numColumns={2}
                    renderItem={({item}) => (
                        <View>
                            <Image 
                            source={item}
                            style={styles.wishlists}
                            />
                        </View>
                    )}
                    />
                </View>
            }
            <View style={styles.footNav}>
                <FootNavbar name={"wishlist"}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        position : "relative",
        paddingHorizontal : 20,
        paddingTop : 15
    },
    wishlists : {
        width : 150,
        height : 150,
        borderRadius : 12,
        margin : 5
    },
    wishlistContainer : {},
    footNav : {
        width : screenwidth,
        position : "absolute",
        bottom : 0
    }
});