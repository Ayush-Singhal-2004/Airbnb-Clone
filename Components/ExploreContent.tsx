import { ScrollView, StyleSheet } from "react-native";
import Surfing from "./Surfing";

export default function ExploreContent() {
    return (
        <ScrollView style={styles.container}>
            <Surfing />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container : {
        height : 482
    }
});