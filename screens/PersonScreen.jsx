import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {ChevronLeftIcon, HeartIcon} from 'react-native-heroicons/outline';
import Movielist from '../component/movieList';
import { useNavigation } from '@react-navigation/native';

const PersonScreen = () => {
  const [isFavorite, setIsFavourite] = useState(false);
  const {height, width} = Dimensions.get('window');
  const [personMovie, setPersonMovie] = useState([1,2,3,4])
  const navigation = useNavigation()
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'black'}}>
      <SafeAreaView
        style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
        onPress={()=>navigation.goBack()}
          style={{
            backgroundColor: 'orange',
            width: 35,
            height: 35,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsFavourite(!isFavorite)}>
          <HeartIcon size="35" color={isFavorite ? 'red' : 'white'} />
        </TouchableOpacity>
      </SafeAreaView>
      <View
        style={{
          shadowRadius: 40,
          shadowOffset: {width: 0, height: 5},
          shadowOpacity: 1,
        }}>
        <View
          style={{
            shadowColor: '#000',
            shadowOffset: {width: 10, height: 2},
            shadowOpacity: 5,
            elevation: 13, // This is for Android
            //overflow: 'hidden',
            alignItems:'center',
          }}>
          <Image
            source={require('../assets/images/Keanu-Revees.webp')}
            style={{
              borderWidth: 2,
              borderColor: 'white',
              borderRadius: 150,
              height: height * 0.43,
              width: width * 0.74,
              
            }}
          />
          {/* <Image source={require('../assets/images/Keanu-Revees.webp')} style={{height:80, width:80, borderRadius:40, marginBottom:8, marginTop:3}}/> */}
        </View>
      </View>
      <Text style={{color:'white', fontSize:25, textAlign:'center', marginTop:20}}>Keanu Revees</Text>
      <Text style={{color:'gray', textAlign:'center'}}>London, United Kingdom</Text>
      <View style={{backgroundColor:'#383434', height:80, width:380,marginLeft:30, marginTop:10, borderRadius:50, flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
        <View style={{justifyContent:'center',borderRightColor:'white', borderRightWidth:1,paddingRight:10}}>
        <Text style={{color:'white'}}>Gender</Text>
        <Text style={{color:'white'}}>Male</Text>
        </View>
        <View style={{borderRightWidth:1,borderRightColor:'white',paddingRight:10}}>
        <Text style={{color:'white'}}>Birthday</Text>
        <Text style={{color:'white'}}>19-02-1964</Text>
        </View>
        <View  style={{borderRightWidth:1,borderRightColor:'white',paddingRight:10}}>
        <Text style={{color:'white'}}>Known for</Text>
        <Text style={{color:'white'}}>Acting</Text>
        </View>
        <View >
        <Text style={{color:'white'}}>Popularity</Text>
        <Text style={{color:'white'}}>64.63</Text>
        </View>
      </View>
      <View>
        <Text style={{fontSize:20,color:'white',marginTop:20}}>Biography</Text>
        <Text style={{color:'gray', marginTop:10}}>Keanu Charles Reeves, whose first name means "cool breeze over the mountains" in Hawaiian, was born September 2, 1964 in Beirut, Lebanon. He is the son of Patric Reeves, a showgirl and costume designer, and Samuel Nowlin Reeves, a geologist. Keanu's father was born in Hawaii, of British, Portuguese, Native Hawaiian, and Chinese ancestry, and Keanu's mother is originally from Essex England.</Text>
      </View>
      <Movielist title='Movies' hiddenAll={false} data={personMovie} />
    </ScrollView>
  );
};

export default PersonScreen;

const styles = StyleSheet.create({});
