import { ScrollView, StyleSheet, Dimensions } from "react-native";
import Surfing from "./Surfing";
import AmazingViews from "./AmazingViews";
import useExploreContent from "../Context/ExploreContext";

const windowHeight = Dimensions.get('window').height;
const navOptionContent = [<Surfing />, <AmazingViews />];

export default function ExploreContent() {

    const contentContext = useExploreContent();
    
    return (
        <ScrollView style={styles.container} >
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