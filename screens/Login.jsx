import { KeyboardAvoidingView, Platform, TextInput, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CheckBadgeIcon } from 'react-native-heroicons/outline'
import useApiCall from '../hooks/useApiCall'

const Login = ({ navigation }) => {

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const handleValue = (e, type) => {
        setData({ ...data, [type]: e })
    }

    const validateCredentials = () => {
        navigation.navigate('Home')
        // if(data.email==='Test@yopmail.com' || data.password==='Test@123'){
        //     navigation.navigate('Home')
        // }
        // else{
        //     console.log('invalid credentails')
        // }
    }


    const validateCredentials1 = async () => {
        const y = await useApiCall("http://10.0.2.2:3000/login", "POST", {
            email: data.email,
            password: data.password
        }
        )
        if(y.length>0){
            navigation.navigate('Home')
        }
        else{
            console.log('invalid user')
        }
    }

    

    return (

        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
            style={styles.container}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'yellow' }}>Login</Text>
            <View style={{
                marginTop: 10
            }}>
                <Text style={{ fontSize: 18, marginBottom: 20, color: 'yellow' }}>Email</Text>
                <TextInput name='email' onChangeText={(event) => handleValue(event, 'email')} placeholder='Enter Email' style={{ width: 350, height: 45, borderWidth: 1, borderRadius: 10, paddingLeft: 10, borderColor: 'white' }} />
            </View>
            <View style={{
                marginTop: 10
            }}>
                <Text style={{ fontSize: 18, marginVertical: 20, color: 'yellow' }}>Password</Text>
                <TextInput secureTextEntry name='password' onChangeText={(event) => handleValue(event, 'password')} placeholder='Enter Password' style={{ width: 350, height: 45, borderWidth: 1, borderRadius: 10, paddingLeft: 10, borderColor: 'white' }} />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row', marginRight: 100, marginTop: 20 }}>
                    <CheckBadgeIcon color='white' />
                    <Text>Remember Me</Text>
                </View>

                <Text style={{ marginTop: 20 }}>Forgot Password?</Text>
            </View>
            <TouchableOpacity
                onPress={validateCredentials1}
                style={{
                    backgroundColor: 'yellow',
                    width: '50%',
                    paddingVertical: 10,
                    borderRadius: 10,
                    marginTop: 50
                }}>
                <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold', color: 'black' }} >Login</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginLeft: 10, paddingVertical: 20 }}>
                <Text>Dont't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={{ color: 'yellow' }}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        paddingTop: 30,
    }
})