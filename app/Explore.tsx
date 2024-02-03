import { View } from "react-native";
import Navbar from "../Components/Navbar";
import FootNavbar from "../Components/FootNavbar";
import ExploreContent from "../Components/ExploreContent";

export default function Explore() {
    return (
        <View>
            <Navbar />
            <ExploreContent />
            <FootNavbar name={"explore"}/>
        </View>
    )
}