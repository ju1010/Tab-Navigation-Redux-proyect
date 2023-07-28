import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'

const Header = () => {
  return (
    <View 
        style={styles.containerHeader}>
      <Text style ={styles.text}>Tienda multi</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    containerHeader: {
        backgroundColor: colors.black,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    text: {
        fontSize: 25,
        fontFamily: 'RobotoScript',
        color: 'white'
    }
})