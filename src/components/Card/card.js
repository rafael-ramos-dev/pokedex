import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { colors, backgroundColors } from '../../../assets/colors';

function Card({ item }) {

    const { name, types, id } = item;

    const imageUrl = 'https://pokeres.bastionbot.org/images/pokemon/' + id + '.png';

    //check the main type of a pokemon to set it as a background color
    var pokemonMainType = types[0].type.name;


    return (
        <View>
            <View style={{...styles.card, backgroundColor: backgroundColors[pokemonMainType]}}>
                <View style={styles.textContainer}>
                    <Text style={styles.pokeNumber}>#{(id).toString()}</Text>
                    <Text style={styles.title}>{name}</Text>
                    <View style={styles.typeContainer}>
                        {types.map(type => {
                            return <Text style={{...styles.pokeType, backgroundColor: colors[type.type.name]}}> {type.type.name}</Text>
                        })}
                    </View>
                </View>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: imageUrl }} />
                </View>
            </View>
        </View>
    )
}


export default Card;