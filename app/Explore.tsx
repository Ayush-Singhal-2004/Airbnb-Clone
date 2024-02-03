import { View } from "react-native";
import Navbar from "../Components/Navbar";
import FootNavbar from "../Components/FootNavbar";
import ExploreContent from "../Components/ExploreContent";
import { useState } from "react";

export default function Explore() {

    const [option, setOption] = useState("Surfing");

    const changeOption = (value:string) => {
        setOption(value)
    }

    return (
        <View>
            <Navbar changeOption={changeOption}/>
            <ExploreContent />
            <FootNavbar name={"explore"}/>
        </View>
    )
}