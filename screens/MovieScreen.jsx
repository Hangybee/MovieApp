import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { ChevronLeftIcon, HeartIcon } from 'react-native-heroicons/outline';
import LinearGradient from 'react-native-linear-gradient';
import Cast from '../component/Cast';
import { useNavigation } from '@react-navigation/native';
import Movielist from '../component/movieList';
import Loading from '../component/Loading';

const MovieScreen = ({ route }) => {
  const { height, width } = Dimensions.get('window');
  const [isFavorite, setIsFavourite] = useState(false);
  const [cast, setCast] = useState([1, 2, 3, 4, 5])
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5])
  const [loading, setLoading] = useState(false)

  const navigation = useNavigation()
  console.log('aaaaaa', route.params.item.id);
  useEffect(() => {
    // to be done
  }, [route]);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'black', paddingTop: 5 }}>
      {/* back button functionality */}
      <View>
        <SafeAreaView style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
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
        {
          loading ? (
            <Loading />
          ) : (
            <View>
              {/* <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={{width, height: height * 0.4}}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}> */}
              <Image
                source={require('../assets/images/ant-man.jpg')}
                style={{ width, height: height * 0.55 }}
              />
              {/* </LinearGradient> */}
            </View>
          )
        }
        <Text style={{ color: 'white', fontSize: 26, textAlign: 'center' }}>
          {
            "Ant-Man and the Wasp: Quantumania"
          }
        </Text>
        <Text style={{ color: 'gray', textAlign: 'center', fontWeight: '800', marginTop: 10, marginBottom: 10 }}>Released . 2020 . 170 min</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }} >
          <Text style={{ color: 'gray', fontWeight: '800' }}>Action . </Text>
          <Text style={{ color: 'gray', fontWeight: '800' }}>Thrill . </Text>
          <Text style={{ color: 'gray', fontWeight: '800' }}>Comedy . </Text>
        </View>
        <Text style={{ color: 'gray' }}>
          Ant-Man and the Wasp is a 2018 American superhero film based on Marvel Comics featuring the characters Scott Lang / Ant-Man and Hope Pym / Wasp. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to Ant-Man (2015) and the 20th film in the Marvel Cinematic Universe (MCU).
        </Text>
      </View>
      <Cast navigation={navigation} cast={cast} />
      <Text style={{ color: 'white' }}>simlar movies</Text>
      <Movielist title="Similar Movies" hiddenAll={false} data={similarMovies} />

    </ScrollView>
  );
};

export default MovieScreen;
