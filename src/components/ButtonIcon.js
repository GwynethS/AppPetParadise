import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const ButtonIcon = ({children, btnStyle, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[styles.btn, btnStyle]}
      onPress={onPress}
    >
        {children}
    </TouchableOpacity>
  )
}

export default ButtonIcon

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
})