import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { image185 } from '../api/moviedb'

const Cast = ({navigation, cast}) => {

  return (
    <View>
      <Text style={{color:'white', marginTop:10,fontSize:15,marginLeft:5}}>Top Cast</Text>
      <ScrollView
        horizontal
        style={{marginTop:10}}
      >
        {
            cast && cast.map((curr, index)=>{
                return(
                    <TouchableOpacity
                        style={{marginRight:10, alignItems:'center'}}
                        onPress={()=>navigation.navigate('Person',curr.id)}
                    >
                        <Image 
                        source={{uri:image185(curr?.profile_path)}} 
                        style={{height:80, width:80, borderRadius:40, marginBottom:8, marginTop:3}}/>
                        <Text style={{color:'white',marginLeft:5}}>
                            {
                                curr.character.length>10?curr.character.split(0,10)+'...':curr.character
                            }
                        </Text>
                        <Text style={{color:'white'}}>
                            {
                                curr.original_name.length>10?curr.original_name.split(0,10)+'...':curr.original_name
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