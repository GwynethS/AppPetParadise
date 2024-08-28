import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './TabNavigator'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { OnBoarding } from '../screens'

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='OnBoarding' component={OnBoarding}></Stack.Screen>
        <Stack.Screen name='Main' component={TabNavigator}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})