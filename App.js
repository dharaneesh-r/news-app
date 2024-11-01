import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  const [text, setText] = useState("");

  const family = ["Ravichandran", "Suguna", "Dharaneesh", "Sudharshan"];

  const increment = () => {
    setCount(count + 1);
  };

  const element = []

  for(let i = 0; i<=100; i++){
    element.push(<Text>{i}</Text>)
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <TextInput
          placeholder="Enter Aimbition"
          onChangeText={(textChange) => setText(textChange)}
          style={{ borderWidth: 1, border: "1px solid black", width: "90%" }}
        />
        <Text>{text}</Text>
        <StatusBar style="auto" />
        <Text>Welcome To Informative Journal !!!</Text>
        <Hello name="Dharaneesh" />
        <Hello name="Sudharshan" />
        <Hello name="Suguna" />
        <Hello name="Ravichandaran" />
        <Text>COUNT : {count}</Text>
        <Button onPress={increment} title="INCREMENT" />
        <Button onPress={() => setCount(count - 1)} title="DECREMENT" />
        <Button onPress={() => setCount(0)} title="RESET" />

        {family.map((name) => (
          <Text style={styles.text}>{name}</Text>
        ))}

        {element.map((number) => (
          <Text style={{ fontSize: 50 }}>{number}</Text>
        ))}
      </ScrollView>
    </View>
  );
}

const Hello = ({ name }) => {
  return <Text>Hello {name}</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 50,
    paddingBottom: 100,
  },
});
