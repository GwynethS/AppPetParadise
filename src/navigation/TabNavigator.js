import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Profile, Shop } from "../screens";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { colors } from "../global/colors";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.morado,
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 80,
        },
        tabBarLabelStyle:{
          fontFamily: 'OpenSans',
          fontSize: 16,
          marginTop: 5,
          marginBottom: 10
        },
        tabBarIconStyle:{
          marginTop: 10,
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarLabel: "Tienda",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="shop" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
