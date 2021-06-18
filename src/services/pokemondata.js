import React, {useState , useEffect} from 'react';
import { getAllPokemon, getPokemon } from './fetchpokemon';

export function pokemonMainData() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [previousUrl, setPreviousUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon'; 

  useEffect(() => {
    async function fecthPokemonData() {
      let response = await getAllPokemon(initialUrl);

      setNextUrl(response.next);
      setPreviousUrl(response.previous);
      await loadingPokemon(response.results);
      setLoading(false);
    }
    fecthPokemonData();
  }, []);

  
  const loadingPokemon = async data => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecorded = await getPokemon(pokemon.url);
      return pokemonRecorded;
    }));

    setPokemonData(_pokemonData);
  };
}