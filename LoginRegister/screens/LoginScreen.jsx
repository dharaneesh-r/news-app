import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import Auth from "../services/FirebaseAuth";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const checkIfLoggedIn = () => {
    onAuthStateChanged(Auth, (user) => {
        if(user) {
            navigation.navigate("Dashboard")
        }else{
            console.log("LOGGED OUT")
        }
    })
  }

  useEffect(() => {
    checkIfLoggedIn()
  },[])

  const handleLogin = () => {
    setError("");
    console.log("Email - ", email, "Password - ", password);
    signInWithEmailAndPassword(Auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        navigation.navigate("Dashboard");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const navigateRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center", fontSize: 30 }}>LOGIN</Text>
      <View style={styles.boxContainer}>
        <TextInput
          placeholder="email"
          onChangeText={setEmail}
          style={styles.textInputContainer}
          textContentType="emailAddress"
        />
        <TextInput
          placeholder="password"
          onChangeText={setPassword}
          style={styles.textInputContainer}
          textContentType="password"
          secureTextEntry
        />
        {error && <Text style={{ color: "red", marginTop: 2 }}>{error}</Text>}
      </View>
      <Button title="Login" variant="danger" onPress={handleLogin} />
      <Text style={{ marginTop: 3 }} onPress={navigateRegister}>
        If don't have an account ? Register Here
      </Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  textInputContainer: {
    borderWidth: 1,
    width: 200,
    marginTop: 10,
    padding: 5,
  },
  boxContainer: {
    margin: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
