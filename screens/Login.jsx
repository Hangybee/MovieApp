import { KeyboardAvoidingView, Platform, TextInput, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import useApiCall from '../hooks/useApiCall'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Toast from 'react-native-toast-message';
import useAuthLogout from '../hooks/useAuthLogout';
const Login = ({ navigation }) => {

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const handleValue = (e, type) => {
        setData({ ...data, [type]: e })
    }

    const showToast = (type) => {
        Toast.show({
            type: type, // 'info', 'success', 'error' or 'warning'
            //text1: 'Error',
            text1: 'Invalid username or password',
            visibilityTime:3000
        });
    };

    const validateCredentials = () => {
        if (data.email === 'Test@yopmail.com' || data.password === 'Test@123') {
            navigation.navigate('Home')
            setData({ ...data, email: '', password: '' })
        }
        else {
            showToast('error')
            console.log('invalid credentails')
        }
    }

   
    // const validateCredentials1 = async () => {
    //     const y = await useApiCall("http://10.0.2.2:3000/login", "POST", {
    //         email: data.email,
    //         password: data.password
    //     }
    //     )
    //     if(y.length>0){
    //         navigation.navigate('Home')
    //         setData('')
    //     }
    //     else{
    //         console.log('invalid user')
    //     }
    // }
    useEffect(()=>{
        console.log('2222222222',useAuthLogout())
    },[])

    return (

        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
            style={styles.container}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'yellow' }}>Login</Text>
            <View style={{
                marginTop: 10
            }}>
                <Text style={{ fontSize: 18, marginBottom: 20, color: 'yellow' }}>Email</Text>
                <TextInput value={data.email} name='email' onChangeText={(event) => handleValue(event, 'email')} placeholder='Enter Email' style={{ width: 350, height: 45, borderWidth: 1, borderRadius: 10, paddingLeft: 10, borderColor: 'white' }} />
            </View>
            <View style={{
                marginTop: 10
            }}>
                <Text style={{ fontSize: 18, marginVertical: 20, color: 'yellow' }}>Password</Text>
                <TextInput value={data.password} secureTextEntry name='password' onChangeText={(event) => handleValue(event, 'password')} placeholder='Enter Password' style={{ width: 350, height: 45, borderWidth: 1, borderRadius: 10, paddingLeft: 10, borderColor: 'white' }} />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row', marginRight: 100, marginTop: 20 }}>
                    {/* <CheckBadgeIcon color='white' /> */}
                    <BouncyCheckbox
                        size={25}
                        fillColor="gray"
                        unfillColor="white"
                        //text="Custom Checkbox"
                        //iconStyle={{ borderColor: "white" }}
                        //innerIconStyle={{ borderWidth: 2 }}
                        //textStyle={{ fontFamily: "JosefinSans-Regular" }}
                       // onPress={() => }
                    />
                    <Text>Remember Me</Text>
                </View>

                <Text style={{ marginTop: 20 }}>Forgot Password?</Text>
            </View>
            <TouchableOpacity
                onPress={validateCredentials}
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
            <Toast
                position='bottom'
                bottomOffset={20}

            />
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