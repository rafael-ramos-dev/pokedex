import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { colors, backgroundColors } from '../../../assets/colors';

function Details({ navigation }) {

    var name = navigation.getParam('name');
    var types = navigation.getParam('types');
    var id = navigation.getParam('id');
    var ability = navigation.getParam('abilities');
    var height = navigation.getParam('height');
    var weight = navigation.getParam('weight');

    const imageUrl = 'https://pokeres.bastionbot.org/images/pokemon/' + id + '.png';

    var pokemonMainType = types[0].type.name;


    return (
        <View style={{ ...styles.detailsBody, backgroundColor: backgroundColors[pokemonMainType] }}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: imageUrl }} />
            </View>
            <Text style={styles.title}>{navigation.getParam('name')}</Text>
            <View style={styles.typeContainer}>
                {types.map(type => {
                    return <Text style={{ ...styles.pokeType, backgroundColor: colors[type.type.name] }}> {type.type.name}</Text>
                })}
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.plainText}>Nº na Pokédex:</Text>
                <Text style={styles.plainText}>{id}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.plainText}>Habilidade: </Text>
                <Text style={styles.plainText}>{ability[0].ability.name}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.plainText}>Altura: </Text>
                <Text style={styles.plainText}>{height}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.plainText}>Peso: </Text>
                <Text style={styles.plainText}>{weight}</Text>
            </View>
        </View>
    )
}


export default Details