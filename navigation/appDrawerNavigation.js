import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import Feed from '../screens/Feed';
import HomeScreen from '../screens/HomeScreen'
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Image, Text } from 'react-native';
import Setttings from '../screens/Setttings';
import { useContext } from 'react';
import UserContext from '../context/UserContext';
import { useTranslation } from 'react-i18next';
import {
    HomeIcon,
    Cog6ToothIcon,
    ArrowLeftStartOnRectangleIcon
} from 'react-native-heroicons/outline';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Drawer = createDrawerNavigator();

function MyDrawer({navigation}) {
    const { t } = useTranslation()
    const { name, dark } = useContext(UserContext)
    return (
        <Drawer.Navigator
            drawerContent={
                (props) => {
                    return (
                        <SafeAreaView>
                            <View style={{
                                height: 200,
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: dark ? 'black' : 'white',
                                rowGap: 10
                            }}>
                                <Image
                                    style={{
                                        height: 150,
                                        width: 150,
                                        borderRadius: 75
                                    }}
                                    source={require('../assets/images/profile_pic.jpeg')}
                                />
                                <Text style={{
                                    fontWeight: 'bold',
                                    color: dark ? 'white' : 'black'
                                }}>{name ? name : "Mayank Bankoti"}</Text>
                            </View>
                            <DrawerItemList {...props} />
                            <TouchableOpacity style={{flexDirection:'row',marginLeft:18, marginTop:10}} onPress={()=>navigation.navigate('Login')}>
                            <ArrowLeftStartOnRectangleIcon size="20" strokeWidth={2} color={dark ? 'white' : 'black'} />
                            <Text style={{fontWeight:'bold', color:'white', marginLeft:34}}>Logout</Text>
                            </TouchableOpacity>
                        </SafeAreaView>
                    )
                }
            }
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: dark ? 'black' : 'white',
                    width: 250
                },
                headerStyle: {
                    backgroundColor: '#f4511e'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
                drawerActiveTintColor: dark ? 'white' : 'black',
                drawerLabelStyle: dark ? 'black' : 'white',
                drawerInactiveTintColor: dark ? 'white' : 'black'
            }}>
            <Drawer.Screen name="Home" options={{
                drawerLabel: t('home'),
                title: 'Home',
                drawerIcon: () => (<HomeIcon size="20" strokeWidth={2} color={dark ? 'white' : 'black'} />)

            }} component={HomeScreen} />
            <Drawer.Screen name={t('settings')} options={{
                drawerIcon: () => (<Cog6ToothIcon size="20" strokeWidth={2} color={dark ? 'white' : 'black'} />)

            }} component={Setttings} />
        </Drawer.Navigator>
    );
}

export default MyDrawer