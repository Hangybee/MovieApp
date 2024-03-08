import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import {
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import TrendingMovies from '../component/TrendingMovies';
import Movielist from '../component/movieList';
import Loading from '../component/Loading';
import apicall, { fetchTopRatedMovies, fetchTrendingMovies, fetchUpcomingMovies } from '../api/moviedb';
import { useTranslation } from 'react-i18next';
import UserContext from '../context/UserContext';


const HomeScreen = ({ navigation }) => {
  const [trending, setTrending] = useState(null);
  const [upcoming, setUpcoming] = useState(null);
  const [toprated, setToprated] = useState(null);
  const [loading, setLoading] = useState(true)
  const {dark} = useContext(UserContext)
  const { t, i18n } = useTranslation()
  useEffect(() => {
    getTrendingMovies()
    getUpcomingMovies()
    getTopRatedMovies()
  }, [])

  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();
    if (data.type === 'error') {
      console.log(data.message)
    }
    setLoading(false)
    setTrending(data.message.results)
  }

  const getUpcomingMovies = async () => {
    const data = await fetchUpcomingMovies();
    if (data.type === 'error') {
      console.log(data.message)
    }
    setLoading(false)
    setUpcoming(data.message.results)
  }

  const getTopRatedMovies = async () => {
    const data = await fetchTopRatedMovies();
    if (data.type === 'error') {
      console.log(data.message)
    }
    setLoading(false)
    setToprated(data.message.results)
  }

  const chnageLanguage = () => {
    i18n.changeLanguage('fr')
  }


  return (
    <View style={{ flex: 1, backgroundColor: dark?'black':'white' }}>
      <SafeAreaView style={{ marginBottom: 3 }}>
        <StatusBar
          animated={true}
          backgroundColor="black"
          barStyle="light-content"
          showHideTransition="fade"
        //hidden={hidden}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: 10,
          }}>
          <Text style={{ color: 'white', fontSize: 30, marginRight:120, color:dark?'yellow':'black' }}>
            {t('movies')}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <MagnifyingGlassIcon size="30" strokeWidth={2} color={dark?'white':'black'} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {loading ? (<Loading />) : (
        <ScrollView
          style={{ marginHorizontal: 3 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}>
          {/*trending movies*/}
          {trending?.length > 0 && <TrendingMovies data={trending} />}

          {/*upcoming movies row*/}
          <Movielist title={t('upcoming')} data={upcoming} />

          {/* top rated movies*/}

          <Movielist title={t('top rated')} data={toprated} />
        </ScrollView>
      )}
    </View>
  );
};

export default HomeScreen;
