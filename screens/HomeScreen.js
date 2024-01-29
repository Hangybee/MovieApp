import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import TrendingMovies from '../component/TrendingMovies';
import Movielist from '../component/movieList';

const HomeScreen = () => {
  const [trending, setTrending] = useState([1, 2, 3, 4]);
  const [upcoming, setUpcoming] = useState([1, 2, 3, 4]);
  const [toprated, setToprated] = useState([1, 2, 3, 4]);
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <SafeAreaView style={{marginBottom: 3}}>
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
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
          <Text style={{color: 'white', fontSize: 30}}>
            <Text style={{color: 'yellow'}}>M</Text>ovies
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}>
        {/*trending movies*/}
        <TrendingMovies data={trending} />

        {/*upcoming movies row*/}
        <Movielist title="Upcoming" data={upcoming} />

        {/* top rated movies*/}

        <Movielist title="Top rated" data={upcoming} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
