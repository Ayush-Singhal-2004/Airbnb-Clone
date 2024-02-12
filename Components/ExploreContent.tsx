import { ScrollView, StyleSheet, Dimensions, View } from "react-native";
import Surfing from "./Surfing";
import AmazingViews from "./AmazingViews";
import useExploreContent from "../Context/ExploreContext";
import TinyHomes from "./TinyHomes";
import AmazingPools from "./AmazingPools"
import Castles from "./Castles";
import { useEffect, useRef, useState } from "react";
import MapView from "react-native-maps";

const windowHeight = Dimensions.get('window').height;

const navOptionContent = [<Surfing />, <AmazingViews />, <TinyHomes />, <AmazingPools />, <Castles />];

export default function ExploreContent() {

    const contentContext = useExploreContent();
    const scrollRef = useRef<ScrollView>();
    const [showMap, setShowMap] = useState(false);

    useEffect(() => {
        if(!showMap)
        scrollRef.current.scrollTo({y : 2, animated : true});
    });

    const checkScroll = (event:any) => {
        if(event.nativeEvent.contentOffset.y == 0)
        {
            setShowMap(true);
        }
    };
    
    return (
        <View>
        {
            showMap?
            <View>
                <MapView
                initialRegion={{
                    latitude: 20.5937,
                    longitude: 78.9629,
                    latitudeDelta: 900,
                    longitudeDelta: 400,
                  }}
                style={{height : windowHeight * 68/100}}
                ></MapView>
            </View>
            :
            <ScrollView style={styles.container} ref={scrollRef} onScroll={checkScroll}>
            {
                navOptionContent[contentContext.value]
            }
            </ScrollView>
        }
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        height : windowHeight * (68/100)
    }
});