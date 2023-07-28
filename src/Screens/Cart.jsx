import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartData from '../Data/cart.json'
import CartItem from '../Components/CartItem'
import { colors } from '../Global/Colors'

const Cart = () => {

  const total = CartData.reduce((acumulador, currentItem) => acumulador += currentItem.price * currentItem.quantity, 0)

  return (
    <View style={styles.cartContainer}>
      <FlatList
        data={CartData}
        keyExtractor={cartItem => cartItem.id}
        renderItem={({item})=> {
          return (
            <CartItem
                cartItem={item}
            />
          )
        }}
      />
      <View style={styles.totalContainer}>
        <Pressable>
          <Text style={styles.btnConfirm}>Confirmar</Text>
        </Pressable>
        <Text style={styles.textConfirm}>Total: ${total}</Text>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  cartContainer: {
    backgroundColor: colors.black,
    height: "100%",
    alignItems: 'center'
  },
  totalContainer: {
    flexDirection: 'row',
    marginBottom: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    gap: 25
  },
  btnConfirm: {
    backgroundColor: colors.violet,
    borderRadius: 20,
    borderBottomWidth: 3.5,
    borderRightWidth: 3.5,
    borderColor: colors.deepViolet,
    fontFamily: "RobotScript",
    fontSize: 23,
    color: "black",
    paddingLeft: 25,
    paddingRight: 25
  },
  textConfirm: {
    backgroundColor: colors.borderViolet,
    borderRadius: 25,
    fontFamily: "RobotScript",
    fontSize: 20,
    color: "white",
    paddingLeft: 25,
    paddingRight: 25
  }
})