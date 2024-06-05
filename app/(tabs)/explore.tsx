
import { Image, StyleSheet,SafeAreaView , FlatList ,ScrollView ,Text,View ,SectionList ,Button ,Pressable ,Modal ,StatusBar , ActivityIndicator , Alert} from 'react-native';
import pokemonList from '../../data.json'
import gdata from '../../gdata.json'



export default function HomeScreen() {
 
  return (

    <SafeAreaView  style={styles.container}> 
      <StatusBar backgroundColor="black" barStyle="light-content"  />


 
{/*       <ScrollView  style={styles.srollview}>

     {
      pokemonList.map(pokemon =>{
        return (
          <View  style={styles.card} key={pokemon.id}>
            <Text style={styles.cardText}> {pokemon.type}</Text>
            <Text  style={styles.cardText}> {pokemon.name}</Text>
          </View>
        )

      } )
     }

</ScrollView>        
            */
 /*            
<FlatList
  data={pokemonList}
  renderItem={({item}) => {
 
     return (
      <View  style={styles.card} key={item.id}>
        <Text style={styles.cardText}> {item.type}</Text>
        <Text  style={styles.cardText}> {item.name}</Text>
      </View>
    )

  }}
  keyExtractor={(item , indew) => item.id.toString()}
  ListEmptyComponent={<Text>No items Found</Text>}
  ListHeaderComponent={<Text style={styles.headerText}>List Pokemon</Text>}
  ListFooterComponent={<Text style={styles.headerText}>End</Text>}
/> */

<SectionList
  sections={gdata}
  renderItem={({item}) => {
    return (
      <View style={styles.card}>
        <Text style={styles.cardText}>{item}</Text>
      </View>
    );
  }}
  renderSectionHeader={({section}) => (
    <Text style={styles.sectionHeader}>{section.type}</Text>
  )}
/>

       
            }

      </SafeAreaView>

  

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor:'#fff',  
    paddingTop : StatusBar.currentHeight,
  },
  srollview :{
    paddingHorizontal:16,
    paddingTop:16,
    paddingBottom:16
  },
  card: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardText: {
    fontSize:18,
    color: '#333',
  },
  headerText :
  {
    fontSize:22,
    textAlign:'center',
    fontWeight:'bold',
    color:'#333',
    marginBottom :15
  },
  sectionHeader :{
    backgroundColor:'white',
    fontSize:22,
    fontWeight:'bold'
  }
});
