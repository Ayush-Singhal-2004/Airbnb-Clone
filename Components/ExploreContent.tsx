import { ScrollView, StyleSheet, Dimensions } from "react-native";
import Surfing from "./Surfing";
import AmazingViews from "./AmazingViews";
import useExploreContent from "../Context/ExploreContext";
import TinyHomes from "./TinyHomes";
import AmazingPools from "./AmazingPools"
import Castles from "./Castles";
import { useEffect, useRef } from "react";

const windowHeight = Dimensions.get('window').height;
const navOptionContent = [<Surfing />, <AmazingViews />, <TinyHomes />, <AmazingPools />, <Castles />];

export default function ExploreContent() {

    const contentContext = useExploreContent();
    const scrollRef = useRef<ScrollView>();
    useEffect(() => {
        scrollRef.current.scrollTo({y : 0, animated : true});
    });
    
    return (
        <ScrollView style={styles.container} ref={scrollRef}>
            {
                navOptionContent[contentContext.value]
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container : {
        height : windowHeight * (68/100)
    }
});