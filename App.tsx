import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [userInput, setUserInput] = useState<string>("")
  const [todos, setTodos] = useState<string[]>([])


  const userInputHandler = (enteredText: string): void => {
    setUserInput(enteredText)
  }

  const addTodoHandler = () => {
    setTodos((prevTodos) => [...prevTodos, userInput])
    setUserInput("")
  }

  return (
    <View style={styles.container}>

      <View style={styles.goalBlock}>
        <TextInput style={styles.input} placeholder='Write your goal' onChangeText={userInputHandler} value={userInput} />
        <Button title='Add goal' onPress={addTodoHandler} />
      </View>

      <View style={{ borderTopWidth: 1, paddingTop: 12 }}>
        {todos.map((item) => (
          <Text key={Math.random()}>{item}</Text>
        ))}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '15%',
    paddingLeft: "5%",
    gap: 12,
    backgroundColor: '#fff',
    flex: 1,
    width: '80%',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    paddingLeft: '4%',
  },
  goalBlock: {
    gap: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});
