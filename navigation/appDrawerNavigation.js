import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import Feed from '../screens/Feed';
import HomeScreen from '../screens/HomeScreen'
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Image, Text } from 'react-native';
import Setttings from '../screens/Setttings';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

const Drawer = createDrawerNavigator();

function MyDrawer() {
    const {name} = useContext(UserContext)
    return (
        <Drawer.Navigator
            drawerContent={
                (props) => {
                    return (
                        <SafeAreaView>
                            <View style={{
                                height: 200,
                                width: '100%',
                                justifyContent:'center',
                                alignItems:'center',
                                backgroundColor:'black',
                                rowGap:10
                            }}>
                                <Image
                                    style={{
                                        height:150,
                                        width:150,
                                        borderRadius:75
                                    }}
                                    source={require('../assets/images/profile_pic.jpeg')}
                                />
                                <Text style={{
                                    fontWeight:'bold'
                                }}>{name?name:"Mayank Bankoti"}</Text>
                            </View>
                            <DrawerItemList {...props} />
                        </SafeAreaView>
                    )
                }
            }
            screenOptions={{
                headerShown:false,
                drawerStyle: {
                    backgroundColor: 'black',
                    width: 250
                },
                headerStyle: {
                    backgroundColor: '#f4511e'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
                drawerActiveTintColor: 'white',
                drawerLabelStyle: {
                    color: 'white'
                }
            }}>
            <Drawer.Screen name="Home" options={{
                drawerLabel: 'Home',
                title: 'Home'
            }} component={HomeScreen} />
            <Drawer.Screen name="Settings" component={Setttings} />
        </Drawer.Navigator>
    );
}

export default MyDrawer