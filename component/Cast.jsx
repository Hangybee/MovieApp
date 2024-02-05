import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { image185 } from '../api/moviedb'

const Cast = ({navigation, cast}) => {
    let personName = 'Keanu Reeves'
    let characterName = 'John Wick'
  return (
    <View>
      <Text style={{color:'white', marginTop:10,fontSize:15}}>Top Cast</Text>
      <ScrollView
        horizontal
        style={{marginTop:10}}
      >
        {
            cast && cast.map((curr, index)=>{
                return(
                    <TouchableOpacity
                        style={{marginRight:10, alignItems:'center'}}
                        onPress={()=>navigation.navigate('Person','person')}
                    >
                        <Image 
                        source={{uri:image185(person?.profile_path)}} 
                        style={{height:80, width:80, borderRadius:40, marginBottom:8, marginTop:3}}/>
                        <Text style={{color:'white'}}>
                            {
                                characterName.length>10?characterName.split(0,10)+'...':characterName
                            }
                        </Text>
                        <Text style={{color:'white'}}>
                            {
                                personName.length>10?personName.split(0,10)+'...':personName
                            }
                        </Text>
                    </TouchableOpacity>
                )
            })
        }
      </ScrollView>
    </View>
  )
}

export default Cast

const styles = StyleSheet.create({})