import  { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome, FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import { navOptions } from '../data';
import { useState, useRef } from 'react'
import useExploreContent from '../Context/ExploreContext';

export default function Navbar({changeOption}){

    const navRef = useRef([]);
    const scrollRef = useRef();
    const [selected, setSelected] = useState(0);
    const content = useExploreContent();

    const handleSortIconPress = () => {
        console.log("sort icon clicked!!");
    }

    const handleNavOption = (index:number, name:string) => {
        setSelected(index);
        content.value = index;
        changeOption(name)
    };

    return (
        <View style={styles.container}>

            <View style={styles.searchBar}>
                <TouchableOpacity style={[styles.navbarTop, styles.boxShadowProp]}>
                    <View style={styles.searchIcon}>
                        <FontAwesome name="search" size={26} color="black" />
                    </View>
                    <View>
                        <Text style={styles.navSearchHeading}>Where to?</Text>
                        <Text style={styles.navSearchText} numberOfLines={1}>Anywhere · Any week · Add Guest</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sortIcon} onPress={handleSortIconPress}>
                    <FontAwesome6 name="sliders" size={20} color="black" />
                </TouchableOpacity>
            </View>

            <ScrollView 
            horizontal={true} 
            style={styles.navScrollContainer} 
            showsHorizontalScrollIndicator={false}
            ref={scrollRef}
            >
            {
                navOptions.map((item, index:number) => (
                    <TouchableOpacity 
                    key={index} 
                    style={styles.navScrollItemContainer} 
                    ref={(e) => {navRef.current[index] = e}}
                    onPress={(event) => { handleNavOption(index, item.name) }}
                    >
                        <MaterialIcons 
                        name={item.icon as any} 
                        size={24} 
                        color={index == selected ? "black" : "grey"}
                        />
                        <Text 
                        style={index == selected ? styles.selectedOption : styles.notSelectedOption}
                        >
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                ))   
            }
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : "white",
        gap : 18,
        elevation : 1
    },
    searchBar : {
        flexDirection : "row",
        paddingTop : 10,
        paddingHorizontal : 18,
        alignItems : "center",
        gap : 10
    },
    navbarTop : {
        flex : 1,
        backgroundColor : "white",
        paddingVertical : 10,
        paddingHorizontal : 22,
        flexDirection : "row",
        alignItems : "center",
        borderRadius : 50,
    },
    boxShadowProp : {
        elevation: 12,
        shadowColor: 'black',
    },
    searchIcon : {
        marginRight : 15
    },
    navSearchHeading : {
        fontSize : 18,
        fontWeight : "bold",
    },
    navSearchText : {
        color : "grey",
    },
    sortIcon : {
        borderWidth : 2,
        borderColor : "#c9c7c7",
        padding : 10,
        borderRadius : 50
    },
    navScrollContainer : {},
    navScrollItemContainer :{
        paddingHorizontal : 12,
        alignItems : "center",
        justifyContent : "center",
        gap : 6
    },
    selectedOption : {
        color : "black",
        borderBottomColor : "black",
        borderBottomWidth : 2,
        paddingBottom : 8
    },
    notSelectedOption : {
        color : "grey",
        paddingBottom : 8
    }
});