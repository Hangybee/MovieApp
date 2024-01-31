import { StyleSheet, Text, View, TextInput, ScrollView, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { XMarkIcon } from 'react-native-heroicons/outline'
import Loading from '../component/Loading'

const SearchScreen = ({ navigation }) => {
    const { height, width } = Dimensions.get('window')
    const [result, setResult] = useState([1,2,3,4])
    const [loading, setLoading] = useState(false)
    return (
        <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
            <View style={{ marginHorizontal: 20, marginBottom: 3, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderColor: 'gray', borderRadius: 30 }}>
                <TextInput
                    placeholder='Search Movie'
                    placeholderTextColor={'gray'}
                    style={{ padding: 4, marginLeft: 5, flex: 1, }}
                />

                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={{ padding: 3, margin: 1, backgroundColor: 'gray', borderRadius: 20 }}
                >
                    <XMarkIcon size="25" color='white' />
                </TouchableOpacity>

            </View>
            {/* result */}
            {
                loading ? (<Loading />) : (

                    result && result.length ? (
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: 15 }}
                            style={{ marginTop: '0.75rem' }}
                        >
                            <Text style={{ fontWeight: '800', marginTop: 8 }}>Result({result.length})</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', marginTop: 8 }}>
                                {
                                    result.map((curr, index) => {
                                        return (
                                            <TouchableOpacity id={index} onPress={() => navigation.navigate('Movie', movie = 3)} >
                                                <View>
                                                    <Image
                                                        source={require('../assets/images/ant-man.jpg')}
                                                        style={{ height: height * 0.44, width: width * 0.45, borderRadius: 20 }}
                                                    />
                                                    <Text style={{ fontWeight: '500', color: 'gray', marginVertical: 8, textAlign: 'center' }}>Movie Name</Text>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>
                        </ScrollView>
                    ) : (
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/images/movie-time.png')}
                                alt='movie-image'
                                style={{ height: 300, width: 300 }}
                                resizeMode='contain'
                            />
                        </View>
                    )

                )
            }


        </SafeAreaView>
    )
}

export default SearchScreen

const styles = StyleSheet.create({})