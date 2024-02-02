import { View } from "react-native";
import Post from "./Post";
import { surfing } from "../data";

export default function Surfing() {
    return (
        <View>
            {
                surfing.map((item, index:number) => (
                    <View key={index}>
                        <Post image={item.images} name={item.name} rate={item.rate} distance={item.distance} price={item.price} />
                    </View>
                ))
            }
        </View>
    )
}