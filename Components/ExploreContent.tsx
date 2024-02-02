import { ScrollView, StyleSheet } from "react-native";
import Surfing from "./Surfing";
import AmazingViews from "./AmazingViews";

export default function ExploreContent() {
    return (
        <ScrollView style={styles.container}>
            <Surfing />
            {/* <AmazingViews /> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container : {
        height : 482
    }
});