import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button } from "react-native";
import { StyleSheet, Text, View } from "react-native";

export default function App() {

  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={styles.mainheading}>Welcome To Counter Application</Text>
      <Text style={styles.heading}>COUNT : {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="INCREMENT" onPress={() => {setCount(count + 1)}} style={styles.buttonIncrement} />
        <Button title="DECREMENT" onPress={() => {setCount(count - 1)}} style={styles.buttonDecrement} />
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    marginLeft: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "black",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 30,
    color: "orange",
    fontWeight: "bold",
    marginBottom: 20,
  },
  mainheading: {
    fontSize: 30,
    color: "orange",
    fontWeight: "bold",
  },
});
