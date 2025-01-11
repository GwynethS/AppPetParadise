import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, OnBoarding, SignUp } from "../screens";
import { fetchSession } from "../db";
import { setUser } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    (async ()=>{
      const sessions = await fetchSession()
      if(sessions.rows.length){
        dispatch(setUser(sessions.rows._array[0]))
      }
    })()
  },[])

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OnBoarding" component={OnBoarding}></Stack.Screen>
        <Stack.Screen name="Main" component={TabNavigator}></Stack.Screen>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
