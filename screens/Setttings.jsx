import React, { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View, Alert, Modal, Pressable, FlatList, TouchableOpacity, Image, TextInput } from 'react-native';
import UserContext from '../context/UserContext';

const Setttings = () => {
    const {name, setName} = useContext(UserContext)
    const [flag,setFlag] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [lang, setLang] = useState('')
    const { i18n } = useTranslation()
    //console.log('qqqqqqqqqqqqqq',i18n.language)
    const language = [{
        key: 'en',
        value: 'English'
    },
    {
        key: 'hi',
        value: 'Hindi'
    },
    {
        key: 'tl',
        value: 'Telgu'
    },
    {
        key: 'pnj',
        value: 'Punjabi'
    },
    {
        key: 'knd',
        value: 'Kannada'
    }]

    const selectedLanguage = (language) =>{
        return language.filter((curr)=> curr.key === i18n.language)[0].value
    }
    
    useEffect(()=>{
        setLang(selectedLanguage(language))

    },[i18n.language])
    return (
        <View style={{ backgroundColor: 'black', flex: 1, paddingTop: 40, paddingHorizontal: 25 }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Text style={{
                    fontSize: 30
                }}>Settings</Text>
                <Image
                    source={require('../assets/images/profile_pic.jpeg')}
                    style={{ width: 60, height: 60, borderRadius: 40 }}
                />
            </View>
            <View style={{
                rowGap: 20
            }}>
                <View>
                    <Text>Username</Text>
                    <View style={{
                        justifyContent: 'space-between', flexDirection: 'row'
                    }}>
                        
                        {flag?<TextInput onChangeText={(e)=>setName(e)} placeholder='abc' />:<Text>{name?name:'Mayankkk'}</Text>}
                        {
                            flag?(<TouchableOpacity onPress={()=>{
                                setFlag(false)
                            }}>
                                <Text style={{ color: 'green' }}>Save</Text>
                            </TouchableOpacity>):(<TouchableOpacity onPress={()=>{
                            setFlag(true)
                        }}>
                            <Text style={{ color: 'green' }}>Edit</Text>
                        </TouchableOpacity>)
                        }
                        
                    </View>
                </View>
                <View>
                    <Text>Language</Text>

                    <View style={{
                        justifyContent: 'space-between', flexDirection: 'row'
                    }}>
                        <Text>{lang}</Text>
                        

                        <TouchableOpacity
                            onPress={() => setModalVisible(true)}>
                            <Text style={{ color: 'green' }}>Change Language</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold' }}>Select Language</Text>
                            <FlatList
                                data={language}
                                contentContainerStyle={{ flex: 1, height: '100%', rowGap: 20, justifyContent: 'center' }}
                                renderItem={({ item, index }) => {
                                    return (
                                        <TouchableOpacity onPress={() => i18n.changeLanguage(item.key)}>
                                            <Text style={{ color: 'black', fontSize: 20 }}>{item.value}</Text>
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                            <Pressable
                                style={{ backgroundColor: 'blue', padding: 8, borderRadius: 10, width: '100%' }}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

            </View>
        </View>

    );

}

export default Setttings

const styles = StyleSheet.create({
    centeredView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: '80%',
        width: '80%',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});