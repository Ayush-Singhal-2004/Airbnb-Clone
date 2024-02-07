import { View } from "react-native";
import Navbar from "../Components/Navbar";
import FootNavbar from "../Components/FootNavbar";
import ExploreContent from "../Components/ExploreContent";
import { useState } from "react";
import useExploreContent from "../Context/ExploreContext";

export default function Explore() {

    const navContent = useExploreContent();
    const [option, setOption] = useState(navContent.name as string);

    const changeOption = (value:string) => {
        setOption(value)
        navContent.name = value;
    }

    return (
        <View>
            <Navbar changeOption={changeOption}/>
            <ExploreContent />
            <FootNavbar name={"explore"}/>
        </View>
    )
}