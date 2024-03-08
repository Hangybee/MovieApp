import React, { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View, useColorScheme, Alert, Modal, Pressable, FlatList, TouchableOpacity, Image, TextInput, Switch } from 'react-native';
import UserContext from '../context/UserContext';
import {
    CheckIcon
} from 'react-native-heroicons/outline';
const Setttings = () => {
    const { name, setName, dark, setDark } = useContext(UserContext)
    const [flag, setFlag] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [lang, setLang] = useState('')
    const { t, i18n } = useTranslation()
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

    const selectedLanguage = (language) => {
        return language.filter((curr) => curr.key === i18n.language)[0].value
    }

    useEffect(() => {
        setLang(selectedLanguage(language))
    }, [i18n.language])
    return (
        <View style={[styles.container,{ backgroundColor: dark ? 'black' : 'white',}]}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Text style={{
                    fontSize: 30,
                    color: dark ? 'white' : 'black'
                }}>{t('settings')}</Text>
                <Image
                    source={require('../assets/images/profile_pic.jpeg')}
                    style={styles.imageStyle}
                />
            </View>
            <View style={{
                rowGap: 20
            }}>
                <View>
                    <Text style={styles.labelStyle}>{t('username')}</Text>
                    <View style={{
                        justifyContent: 'space-between', flexDirection: 'row'
                    }}>

                        {flag ? <TextInput style={{borderWidth:1, marginTop:5,width:200,borderRadius:10, height:35, borderColor:'gray',paddingLeft:10}} onChangeText={(e) => setName(e)} placeholder='Your Name' /> : <Text style={{ color: dark ? 'white' : 'black', fontSize: 17 }}>{name ? name : 'Mayank'}</Text>}
                        {
                            flag ? (<TouchableOpacity onPress={() => {
                                setFlag(false)
                            }}>
                                <Text style={{ color: 'green', fontSize:17 }}>Save</Text>
                            </TouchableOpacity>) : (<TouchableOpacity onPress={() => {
                                setFlag(true)
                            }}>
                                <Text style={styles.editButtonStyle}>{t('edit')}</Text>
                            </TouchableOpacity>)
                        }

                    </View>
                </View>
                <View>
                    <Text style={styles.labelStyle}>{t('language')}</Text>

                    <View style={{
                        justifyContent: 'space-between', flexDirection: 'row'
                    }}>
                        <Text style={[styles.headerFontStyle, {  color: dark ? 'white' : 'black' }]}>{lang}</Text>
                        <TouchableOpacity
                            onPress={() => setModalVisible(true)}>
                            <Text style={styles.editButtonStyle}>{t('change language')}</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Text style={[styles.headerFontStyle, {  color: dark ? 'white' : 'black' }]}>Dark theme</Text>
                        <Switch value={dark} onChange={() => setDark(!dark)} />
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
                                        <TouchableOpacity style={{ flexDirection: 'row', columnGap: 10, alignItems: 'center' }} onPress={() => i18n.changeLanguage(item.key)}>
                                            {/* <CheckIcon size="18" strokeWidth={4} color="black" /> */}
                                            <Text style={{ color: 'black', fontSize: 20 }}>{item.value}</Text>
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                            <Pressable
                                style={{ backgroundColor: 'blue', padding: 8, borderRadius: 10, width: '100%' }}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Done</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

            </View>
        </View>

    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 25
    },
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
    labelStyle: {
        color: 'gray',
        fontSize: 16
    },
    editButtonStyle: {
        color: 'green',
        fontSize: 17
    },
    imageStyle:{
        width: 60,
         height: 60, 
         borderRadius: 40
    },
    headerFontStyle:{
        fontSize: 17,
    }
});

export default Setttings