import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';

const Loading = () => {

    const { height, width } = Dimensions.get('window')

    return (
        <View style={{
            height,
            width,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute'
        }}>
            <Progress.CircleSnail thickness={5} size={80} color={'yellow'} />
        </View>
    )
}

export default Loading