import { View, Text, TouchableWithoutFeedback, Dimensions, Image } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { useNavigation } from '@react-navigation/native';
import { image500 } from '../api/moviedb';

const {height, width} = Dimensions.get('window')

const TrendingMovies = ({data}) => {
    const navigation = useNavigation()
    const handlePress = (item) =>{
      console.log('1111111111111',item)
        navigation.navigate('Movie', {item})
    }
  return (
    <View>
      <Text style={{color:'white'}}>TrendingMovies</Text>
      <Carousel
        data={data}
        renderItem = {({item})=> <MovieCard item={item} handlePress={handlePress} />}
        firstItem={1}
        inactiveSliderOpacity={0.60}
        sliderWidth={width}
        itemWidth={width*0.62}
        slideStyle={{display:'flex',marginTop:10}}
        />
    </View>
  )
}

export default TrendingMovies

const MovieCard = ({item, handlePress}) =>{
    return(
        //to be done
        <TouchableWithoutFeedback onPress={()=>handlePress(item)}>
            <Image
                // source={require('../assets/images/caption-marvel.jpg')}
                source={{uri: image500(item.poster_path)}}
                style={{
                    width:width*0.6,
                    height: height*0.4,
                    borderRadius:20
                }}
                />
        </TouchableWithoutFeedback>
    )
}