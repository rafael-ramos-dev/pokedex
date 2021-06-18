import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native';
import { getAllPokemon, getPokemon } from '../src/services/fetchpokemon';
import Card from '../src/components/Card';
import Navbar from '../src/components/Navbar';

export default function Home({ navigation }) {
    const [pokemonData, setPokemonData] = useState([]);
    const [nextUrl, setNextUrl] = useState('');
    const [previousUrl, setPreviousUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const initialUrl = 'https://pokeapi.co/api/v2/pokemon';

    useEffect(() => {
        async function fecthPokemonData() {
            let responseAllPokemon = await getAllPokemon(initialUrl);

            setNextUrl(responseAllPokemon.next);
            setPreviousUrl(responseAllPokemon.previous);
            await loadingPokemon(responseAllPokemon.results);
            setLoading(false);
        }
        fecthPokemonData();
    }, []);


    //get the url for the next page
    const nextPage = async () =>{
        setLoading(true);
        let data = await getAllPokemon(nextUrl);

        await loadingPokemon(data.results)
        setNextUrl(data.next);
        setPreviousUrl(data.previous);
        setLoading(false);
    }

    //get the url for the previous page
    const previousPage = async () =>{
        if (!previousUrl) return;

        setLoading(true);
        let data = await getAllPokemon(previousUrl);

        await loadingPokemon(data.results)
        setNextUrl(data.next);
        setPreviousUrl(data.previous);
        setLoading(false);
    }

    //load pokemon data and set it
    const loadingPokemon = async data => {
        let _pokemonData = await Promise.all(data.map(async pokemon => {
            let pokemonRecorded = await getPokemon(pokemon.url);
            return pokemonRecorded;
        }));

        setPokemonData(_pokemonData);
    };


    return (
        <View style={styles.container}>
            {loading ? <Text style={styles.loadingText}>Carregando... </Text> : (
                <View>
                    <View>
                        <Text style={styles.mainHeader}> Pokédex </Text>
                    </View>
                    <View style={styles.navButtonsContainer}>
                        <Text style={styles.navButton} onPress={previousPage}> Anterior </Text>
                        <Text style={styles.navButton} onPress={nextPage}> Próximo </Text>
                    </View>
                    <FlatList style={styles.pokeListContainer}
                     showsVerticalScrollIndicator={false}
                     showsHorizontalScrollIndicator={false}
                        data={pokemonData}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => navigation.navigate('PokeDetails', item)}>
                                <Card key={item.id} item={item} />
                            </TouchableOpacity>
                        )} />
                </View>

            )}
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },

    mainHeader:{
        fontSize: 50,
        fontWeight: '500',
        color: 'black',
        paddingHorizontal: 20,
        paddingTop: 15,
        paddingBottom: 5,
        textAlign: 'center'
    },

    loadingText:{
        flexDirection: 'row',
        fontSize: 28,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 'auto',
        padding: 'auto',
    },

    navButtonsContainer:{
        flexDirection: 'row',
        paddingTop: 15,
        paddingBottom: 25,
        borderRadius: 25,
        justifyContent: 'space-evenly'
    },

    navButton:{
        height: 30,
        fontSize: 18,
        borderRadius: 10,
        backgroundColor: '#1E90FF',
        color: '#FFF'
        
    },

    pokeListContainer:{
        marginBottom: 165,
    },
});


 