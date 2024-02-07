import { View } from "react-native";
import Post from "./Post";
import { castles } from "../data";

export default function Castles() {
    return (
        <View>
            {
                castles.map((item, index:number) => (
                    <View key={index}>
                        <Post image={item.images} name={item.name} rate={item.rate} distance={item.distance} price={item.price} />
                    </View>
                ))
            }
        </View>
    )
}