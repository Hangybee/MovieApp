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
import { fetchMovieCredits, fetchMovieDetail, fetchSimilarMovies, image500 } from '../api/moviedb';
import { useTranslation } from 'react-i18next';

const MovieScreen = ({ route }) => {
  const { height, width } = Dimensions.get('window');
  const [isFavorite, setIsFavourite] = useState(false);
  const [cast, setCast] = useState([1, 2, 3, 4, 5])
  const [similarMovies, setSimilarMovies] = useState(null)
  const [loading, setLoading] = useState(false)
  const [movie, setMovie] = useState(null)
  const [credit, setCredit] = useState(null)
  const id = route.params.item.id
  const {t} = useTranslation()
  const navigation = useNavigation()
  useEffect(() => {
    console.log('item id', route)
    setLoading(true)
    getMovieDetails(id)
    getMovieCredits(id)
    getSimilarMovie(id)
  }, [route]);

  const getMovieDetails = async (id) => {
    const data = await fetchMovieDetail(id)
    if (data) setMovie(data)
    setLoading(false)
  }

  const getMovieCredits = async (id) => {
    const data = await fetchMovieCredits(id)
    if (data) setCredit(data.message.cast)
    setLoading(false)
  }

  const getSimilarMovie = async (id) => {
    const data = await fetchSimilarMovies(id)
    if (data) setSimilarMovies(data.message.results)
    setLoading(false)
  }

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
                source={{ uri: image500(movie?.message.poster_path) || "alt text" }}
                style={{ width, height: height * 0.55 }}
              />
              {/* </LinearGradient> */}
            </View>
          )
        }
        <Text style={{ color: 'white', fontSize: 26, textAlign: 'center' }}>
          {
            movie?.message.title
          }
        </Text>
        <Text style={{ color: 'gray', textAlign: 'center', fontWeight: '800', marginTop: 10, marginBottom: 10 }}>{movie?.message.status} . {movie?.message.release_date?.split('-')[0]} . {movie?.message.runtime} min</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }} >
          {movie && movie.message.genres.map((genre, index) => {
            let showDot = index + 1 != movie.message.genres.length
            return (
              <Text style={{ color: 'gray', fontWeight: '800' }}>{genre?.name} {showDot ? "." : null} </Text>
            )
          })}
        </View>
        <Text style={{ color: 'gray', marginLeft: 5 }}>
          {
            movie?.message.overview
          }
        </Text>
      </View>
      <Cast navigation={navigation} cast={credit} />

      <Movielist title={t('similar Movies')} hiddenAll={false} data={similarMovies} />

    </ScrollView>
  );
};

export default MovieScreen;
