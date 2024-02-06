import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { image185 } from '../api/moviedb';

const Movielist = ({title, hiddenAll=true, data}) => {
  const {height, width} = Dimensions.get('window');
  const navigation = useNavigation();
  return (
    <View style={{marginTop: 20}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: 'white',marginLeft:5}}>{title}</Text>
        {hiddenAll ? (
          <TouchableOpacity>
            <Text style={{color: 'yellow'}}>Sell All</Text>
          </TouchableOpacity>
        ) : (
          false
        )}
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}>
        {data?.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.push('Movie', {item})}>
              <View style={{marginTop: 20, marginRight:15}}>
                <Image
                  // source={require('../assets/images/ant-man.jpg')}                
                    source={{uri: image185(item.backdrop_path)}} 
                  style={{
                    height: height * 0.28,
                    width: width * 0.22,
                    borderRadius: 20,
                  }}
                />
                <Text style={{color: 'white'}}>
                  {item.original_title?.length > 14
                    ? item.original_title?.slice(0, 14) + '...'
                    : item.original_title}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Movielist;
