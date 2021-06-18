import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";

function Navbar({nextUrl}){

    // const { nextUrl } = bothUrl;
    
    return(
        <View>
            <Text>Teste da Navbar</Text>
            <Button onPress={() => {alert(nextUrl)}} title='vai'/>
        </View>
    );
}

export default Navbar;