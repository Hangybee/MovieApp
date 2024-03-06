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
import React, { useEffect, useState } from 'react';
import { ChevronLeftIcon, HeartIcon } from 'react-native-heroicons/outline';
import Movielist from '../component/movieList';
import { useNavigation } from '@react-navigation/native';
import Loading from '../component/Loading';
import { fetchPersonMovie, fetchpersonDetail, image342 } from '../api/moviedb';
import { useTranslation } from 'react-i18next';

const PersonScreen = ({ route }) => {
  const navigation = useNavigation()
  const [isFavorite, setIsFavourite] = useState(false);
  const { height, width } = Dimensions.get('window');
  const [personMovie, setPersonMovie] = useState(null)
  const [person, setPerson] = useState(null)
  const [loading, setLoading] = useState(false)
  const {t} = useTranslation()
  useEffect(() => {
    setLoading(true)
    getPersonDetails()
    getPersonMovies()
  }, [])

  const getPersonDetails = async () => {
    const data = await fetchpersonDetail(route.params)
    if (data) setPerson(data.message)
    setLoading(false)
  }

  const getPersonMovies = async () => {
    const data = await fetchPersonMovie(route.params)
    console.log(data.message)
    if (data) setPersonMovie(data.message.cast)
    setLoading(false)
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
      <SafeAreaView
        style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
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
        loading ? (<Loading />) : (
          <View>
            <View
              style={{
                shadowRadius: 40,
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 1,

              }}>
              <View
                style={{
                  shadowColor: '#000',
                  shadowOffset: { width: 10, height: 2 },
                  shadowOpacity: 5,
                  elevation: 13, // This is for Android
                  //overflow: 'hidden',
                  alignItems: 'center',
                }}>
                <Image
                  // source={require('../assets/images/Keanu-Revees.webp')}
                  source={{ uri: image342(person?.profile_path) }}
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
            <Text style={{ color: 'white', fontSize: 25, textAlign: 'center', marginTop: 20 }}>{person?.name}</Text>
            <Text style={{ color: 'gray', textAlign: 'center' }}>{person?.place_of_birth}</Text>
            <View style={{ backgroundColor: '#383434', height: 80, width: 380, marginLeft: 30, marginTop: 10, borderRadius: 50, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
              <View style={{ justifyContent: 'center', borderRightColor: 'white', borderRightWidth: 1, paddingRight: 10 }}>
                <Text style={{ color: 'white' }}>Gender</Text>
                <Text style={{ color: 'white' }}>{person?.gender == 1 ? "Female" : "Male"}</Text>
              </View>
              <View style={{ borderRightWidth: 1, borderRightColor: 'white', paddingRight: 10 }}>
                <Text style={{ color: 'white' }}>Birthday</Text>
                <Text style={{ color: 'white' }}>{person?.birthday}</Text>
              </View>
              <View style={{ borderRightWidth: 1, borderRightColor: 'white', paddingRight: 10 }}>
                <Text style={{ color: 'white' }}>Known for</Text>
                <Text style={{ color: 'white' }}>{person?.known_for_department}</Text>
              </View>
              <View >
                <Text style={{ color: 'white' }}>Popularity</Text>
                <Text style={{ color: 'white' }}>{person?.popularity}</Text>
              </View>
            </View>
            <View>
              <Text style={{ fontSize: 20, color: 'white', marginTop: 20, marginLeft: 4 }}>{t('biography')}</Text>
              <Text style={{ color: 'gray', marginTop: 10, marginLeft: 4 }}>{person?.biography || "N/A"}</Text>
            </View>
            <Movielist title={t('movies')} hiddenAll={false} data={personMovie} />
          </View>
        )
      }
    </ScrollView>
  );
};

export default PersonScreen;

const styles = StyleSheet.create({});
