import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { getAllPokemon, getPokemon } from './src/services/fetchpokemon';
import Card from './src/components/Card';
import Navigator from './routes/homeStack';
import Home from './screens/home';

export default function App() {

  return (
      <Navigator />
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 200,
    marginRight: 20,
    marginLeft: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

// const [pokemonData, setPokemonData] = useState([]);
  // const [nextUrl, setNextUrl] = useState('');
  // const [previousUrl, setPreviousUrl] = useState('');
  // const [loading, setLoading] = useState(true);
  // const initialUrl = 'https://pokeapi.co/api/v2/pokemon';

  // useEffect(() => {
  //   async function fecthPokemonData() {
  //     let responseAllPokemon = await getAllPokemon(initialUrl);

  //     setNextUrl(responseAllPokemon.next);
  //     setPreviousUrl(responseAllPokemon.previous);
  //     await loadingPokemon(responseAllPokemon.results);
  //     setLoading(false);
  //   }
  //   fecthPokemonData();
  // }, []);

  // const loadingPokemon = async data => {
  //   let _pokemonData = await Promise.all(data.map(async pokemon => {
  //     let pokemonRecorded = await getPokemon(pokemon.url);
  //     return pokemonRecorded;
  //   }));

  //   setPokemonData(_pokemonData);
  // };

 // <View>
          //   <FlatList
          //   contentContainerStyle={{paddingBottom: 20}}
          //   showsVerticalScrollIndicator={false}
          //   data={(pokemonData)}
          //   renderItem={({pokemon}) => <Card pokemon={pokemonData} />}
          //           />
          // </View>
          // <Card pokemon={pokemonData[0]} />

          // <View>
          //   {pokemonData.map((pokemon, i) => {
          //     return <Card key={i} pokemon={pokemon} />
          //   })}
          // </View> 
