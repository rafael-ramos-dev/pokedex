import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, backgroundColors } from '../assets/colors';
import Details from '../src/components/Details/details';

export default function PokeDetails({ navigation }) {    

    return (
        <View>
           <Details navigation={navigation}/>
        </View>
    )
}