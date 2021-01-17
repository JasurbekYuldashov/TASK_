import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {AntDesign, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';

import Search from "./src/Views/Search";
import Offer from "./src/Views/Offer";
import Message from "./src/Views/Message";
import Account from "./src/Views/Account";
import {StatusBar} from "react-native";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar hidden/>
            <Tab.Navigator

                initialRouteName="Feed"
                tabBarOptions={{
                    inactiveTintColor: 'blue',
                    activeTintColor: 'darkblue',
                    tabStyle: {
                        // paddingVertical:40,
                        height: 60
                    },
                    style: {
                        height: 80,
                        paddingVertical:10,
                        backgroundColor:"#abcdef"
                    },
                    labelStyle:{
                        fontSize:15,
                        fontWeight:"bold",
                    }
                }}>

                <Tab.Screen name="Search" options={{tabBarIcon: () => <AntDesign name="search1" size={40}/>,tabBarLabel:"Qidiruv"}}
                            component={Search}/>
                <Tab.Screen name="Offer" options={{tabBarIcon: () => <MaterialIcons name="local-offer" size={40}/>,tabBarLabel:"Taklif"}}
                            component={Offer}/>
                <Tab.Screen name="Message" options={{tabBarIcon: () => <MaterialIcons name="message" size={40}/>,tabBarLabel:"Xabar"}}
                            component={Message}/>
                <Tab.Screen name="Account" options={{tabBarIcon: () => <MaterialCommunityIcons name="account-circle-outline" size={40}/>,tabBarLabel:"Profil"}}
                            component={Account}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
