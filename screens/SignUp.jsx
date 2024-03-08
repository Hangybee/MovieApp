import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const SignUp = ({ navigation }) => {
    return (
        <View style={
            styles.container
        }>
            <Text style={styles.headerStyle}>Sign Up</Text>
            <View style={{
                marginTop: 20,
                gap: 10
            }}>
                <View style={styles.contentParentStyle}>
                    <Text style={styles.labelStyle}>Name</Text>
                    <TextInput name='Name' placeholder='Enter Name' style={styles.textInputStyle} />
                </View>
                <View style={styles.contentParentStyle}>
                    <Text style={styles.labelStyle}>Email</Text>
                    <TextInput placeholder='Enter Email' style={styles.textInputStyle} />
                </View>
                <View style={styles.contentParentStyle}>
                    <Text style={styles.labelStyle}>Password</Text>
                    <TextInput placeholder='Enter Password' style={styles.textInputStyle} />
                </View>
                <TouchableOpacity
                    style={styles.buttonStyle}>
                    <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold', color: 'black' }} >Sign Up</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'center', columnGap: 7, alignItems: 'center' }}>
                    <Text>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={{ color: 'yellow' }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        paddingLeft: 20,
        alignItems: 'center',
        paddingTop: 50
    },
    headerStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'yellow'
    },
    contentParentStyle: {
        marginTop: 10,
        gap: 10
    },
    labelStyle: {
        fontSize: 18,
        color: 'yellow'
    },
    textInputStyle: {
        width: 350,
        height: 45,
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        borderColor: 'white'
    },
    buttonStyle: {
        backgroundColor: 'yellow',
        width: 200,
        paddingVertical: 10,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20
    }
})