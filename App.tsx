import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { TodoI } from './models';
import InputItem from './components/InputItem';
import Input from './components/Input';

export default function App() {

  const [userInput, setUserInput] = useState<string>("")
  const [todos, setTodos] = useState<TodoI[]>([])


  const userInputHandler = (enteredText: string): void => {
    setUserInput(enteredText)
  }

  const addTodoHandler = () => {
    if (userInput.trim().length !== 0) {
      setTodos((prevTodos) => [...prevTodos, { text: userInput, id: Math.random() }])
      setUserInput("")
    } else return;
  }

  const deleteHandler = (id: number) => {
    setTodos(todos.filter(item => item.id !== id))
  }

  return (
    <View style={styles.container}>

      <Input onAddTodo={addTodoHandler} userInputHandler={userInputHandler} userInput={userInput} />

      <View style={{ borderTopWidth: 1, paddingTop: 12 }}>
        <FlatList style={styles.todosItems} data={todos} alwaysBounceVertical={false} renderItem={item => {
          return (
            <InputItem text={item.item.text} id={item.item.id} onDelete={deleteHandler} />
          )
        }} />
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
  todosItems: {
    flexDirection: "column",
  }
});
