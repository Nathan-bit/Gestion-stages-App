import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';


export default function Box() {


  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

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