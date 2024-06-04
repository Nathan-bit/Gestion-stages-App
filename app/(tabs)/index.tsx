import React from 'react';
import { Image, StyleSheet, ScrollView, SafeAreaView, Platform, Text, View, ImageBackground, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert } from 'react-native';
import PokemonCard from '@/components/pokemonCard';

const App = () => {
  const p1 = {
    name: "Pikachu",
    image: require("../../assets/pokemon/4.jpg"),
    type: "Fire",
    hp: 45,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };

  const p2 = {
    name: "Diamoray",
    image: require("../../assets/pokemon/10.png"),
    type: "Grass",
    hp: 69,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };

  const p3 = {
    name: "Vhortect",
    image: require("../../assets/pokemon/8.png"),
    type: "Electric",
    hp: 33,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };

  const p4 = {
    name: "Fluffinder",
    image: require("../../assets/pokemon/7.png"),
    type: "Water",
    hp: 89,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };

  const p5 = {
    name: "Groviflare",
    image: require("../../assets/pokemon/6.png"),
    type: "Electric",
    hp: 29,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };

  const p6 = {
    name: "Aquazeal",
    image: require("../../assets/pokemon/5.png"),
    type: "Grass",
    hp: 99,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <PokemonCard {...p1} />
        <PokemonCard {...p2} />
        <PokemonCard {...p3} />
        <PokemonCard {...p4} />
        <PokemonCard {...p5} />
        <PokemonCard {...p6} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 10,
    backgroundColor: '#f5f5f5',
  },
  scrollViewContent: {
    paddingBottom: 20, // Optional, adds padding at the bottom of the ScrollView
  },
});

export default App;
