import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useEffect, useState } from 'react';

export default function Box() {
  const [dimensions, setDimensions] = useState(Dimensions.get("window"));

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimensions(window);
    });
    return () => subscription?.remove();
  }, []);

  const windowWidth = dimensions.width;
  const windowHeight = dimensions.height;

  return (
    <View
      style={[
        styles.box,
        {
          height: windowHeight > 400 ? '30%' : '40%',
          width: windowWidth > 500 ? '75%' : '90%',
        },
      ]}
    >
      <Text style={{ fontSize: windowWidth > 500 ? 30 : 20 }}>Hey Welcome!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    padding: 20,
    color: 'white',
  },
});