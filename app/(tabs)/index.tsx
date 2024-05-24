import { Image, StyleSheet, Platform ,ScrollView ,Text,View ,ImageBackground ,Button ,Pressable ,Modal ,StatusBar} from 'react-native';
import { useState } from 'react';



export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  return (


 
    <View style={{flex:1 ,backgroundColor:"plum" , width:'auto' , height:'auto'}}>
      <StatusBar backgroundColor="plum" barStyle="light-content"  />

<ScrollView >
  <Pressable onPress={()=>console.log('image pressed')}>
    <Image
        source={{ uri: 'https://fastly.picsum.photos/id/122/3888/2592.jpg?hmac=xkROmdWG_MzDmpTM2MTawXrpURb60jcTqzkxatKBbOk' }}
        style={styles.image}
      /></Pressable>

   <Pressable>
   <Text style={{flex:1 , padding:40}}> Amet velit exercitation dolore veniam ullamco elit in ipsum officia quis minim ut magna pariatur. Sunt pariatur sit commodo laborum cillum pariatur excepteur. Laborum aute incididunt aute adipisicing non qui elit. Excepteur elit id aliquip reprehenderit elit duis id voluptate laborum. Aliqua anim sint eiusmod culpa est sint laborum consequat.
    Amet velit exercitation dolore veniam ullamco elit in ipsum officia quis minim ut magna pariatur. Sunt pariatur sit commodo laborum cillum pariatur excepteur. Laborum aute incididunt aute adipisicing non qui elit. Excepteur elit id aliquip reprehenderit elit duis id voluptate laborum. Aliqua anim sint eiusmod culpa est sint laborum consequat.Amet velit exercitation dolore veniam ullamco elit in ipsum officia quis minim ut magna pariatur. Sunt pariatur sit commodo laborum cillum pariatur excepteur. Laborum aute incididunt aute adipisicing non qui elit duis id voluptate laborum. Aliqua anim sint eiusmod culpa est sint laborum consequat.Amet velit exercitation dolore veniam ullamco elit in ipsum officia quis minim ut magna pariatur. Sunt pariatur sit commodo laborum cillum pariatur excepteur. Laborum aute incididunt aute 
    
    adipisicing non qui elit. Excepteur elit id aliquip reprehenderit elit duis id voluptate laborum. Aliqua anim sint eiusmod culpa est sint laborum consequat.Amet velit exercitation dolore veniam ullamco elit inrit elit duis id voluptate laborum. Aliqua anim sint eiusmod culpa est sint laborum consequat.Amet velit exercitation dolore veniam ullamco elit in ipsum officia quis minim ut magna pariatur. Sunt pariatur sit commodo laborum cillum pariatur excepteur. Laborum aute incididunt aute adipisicing non qui elit. Excepteur elit id aliquip 
.</Text>
   </Pressable>


            <Modal visible={modalVisible} onRequestClose={()=>setModalVisible(false)}
             animationType='slide'
             presentationStyle='pageSheet'>
                <View style={{flex:1 ,backgroundColor:"lightblue" ,padding :20 ,width:'auto' , height:'auto' }}>
                  <Text>Modal Sample</Text>
                  <Text>prehenderit elit duis id voluptate laborum. Aliqua anim sint eiusmod culpa est sint laborum consequat.
    Amet velit exercitation dolore veniam ullamco elit in ipsum officia quis minim ut magna pariatur. Sunt pariatur sit commodo laborum cillum pariatur excepteur. Laborum aute incididunt aute adipisicing non qui elit. Excepteur elit id aliquip reprehenderit elit duis id voluptate laborum. Aliqua anim sint eiusmod culpa est sint laborum consequat.Amet velit exercitation dolore veniam ullamco elit in ipsum officia quis minim ut magna pariatur. Sunt pariatur sit commodo laborum cillum pariatur excepteur. Laborum aute incididunt aute adipisicing non qui elit duis id voluptate laborum. Aliqua anim sint eiusmod culpa est sint laborum consequat.Amet velit exercitation dolore veniam ullamco elit in ipsum officia quis minim ut magna pariatur. Sunt pariatur sit commodo laborum cillum pariatur excepteur. Laborum aute incididunt aute 
    
    adipisicing non qui elit. Excepteur elit id aliquip reprehenderit elit duis id voluptate laborum. Aliqua anim sint eiusmod culpa est sint laborum consequat.Amet velit exercitation dolore veniam ullamco elit inrit elit duis id voluptate laborum. Aliqua anim sint eiusmod culpa est sint laborum consequat.Amet velit exercitation dolore veniam ullamco elit in ipsum officia quis minim ut magna pariatur. Sunt pariatur sit commodo laborum cillum pariatur excepteur. Laborum aute incididunt aute adipisicing non qui elit. Excepteur elit id aliquip </Text>
                  <Button title="close" onPress={()=>setModalVisible(false)}></Button>

               </View>
             </Modal> 
               <Button title='Postuler' onPress={()=>setModalVisible(true)}  ></Button>
</ScrollView>
      </View>

               

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    margin:60
  
   
  },
});
