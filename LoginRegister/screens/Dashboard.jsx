import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import Auth from '../services/FirebaseAuth'

const Dashboard = ({navigation}) => {

    const handleLogout = () => {
        signOut(Auth).then(() => {
            navigation.navigate("Login")
        })
        // onAuthStateChanged(Auth, (user) => {
        //     if(user){
        //         console.log("LOGGED IN")
        //         console.log(user)
        //     }else{
        //         console.log('LOGGED OUT')
        //     }
        // })
    }

  return (
    <View>
      <Text style={{ textAlign: "center", fontSize: 30, margin : 10}}>Welcome To Dashboard</Text>
      <Button title="Logout" onPress={handleLogout}/>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({})