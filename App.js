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
  },
});

