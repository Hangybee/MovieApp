import { View, Text, TouchableWithoutFeedback, Dimensions, Image } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { useNavigation } from '@react-navigation/native';

const {height, width} = Dimensions.get('window')

const TrendingMovies = ({data}) => {
    const navigation = useNavigation()
    const handlePress = (item) =>{
        navigation.navigate('Movie', item)
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
        slideStyle={{display:'flex',alignItem:'center',marginTop:10}}
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
                source={require('../assets/images/caption-marvel.jpg')}
                style={{
                    width:width*0.6,
                    height: height*0.4,
                    borderRadius:20
                }}
                />
        </TouchableWithoutFeedback>
    )
}