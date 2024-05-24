
import React from 'react';
import { View, Text, StyleSheet, Image ,ScrollView } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
    
      <Text style={styles.text}>Hello, React Native!</Text>
      <Image
        source={{ uri: 'https://fastly.picsum.photos/id/152/3888/2592.jpg?hmac=M1xv1MzO9xjf5-tz1hGR9bQpNt973ANkqfEVDW0-WYU' }}
        style={styles.image}
      />
       <Image
        source={{ uri: 'https://fastly.picsum.photos/id/2/3888/2592.jpg?hmac=H2kj1bNmSkXNECY4B4sHjQzZVa05ruYwqevOOYs4Q8A' }}
        style={styles.image}
      />
       <Image
        source={{ uri: 'https://fastly.picsum.photos/id/92/3888/2592.jpg?hmac=zjtfq2PUyiCMP_fW5nSOu7R7ORcLetm-M3gyCPwNMKI' }}
        style={styles.image}
      />
       <Image
        source={{ uri: 'https://fastly.picsum.photos/id/11/3888/2592.jpg?hmac=dkM-BSWi2m7YAH3n-fvvXSzUS4k668DYPBZ6UVoJN10' }}
        style={styles.image}
      />
     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

   
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  image: {
    width: 300,
    height: 200,
    margin: 10,
  },
});

export default App;
