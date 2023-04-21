import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import { FC } from 'react'

type Props = {
    onAddTodo: () => void;
    userInputHandler: (enteredText: string) => void;
    userInput: string;
}

const Input: FC<Props> = ({ onAddTodo, userInputHandler, userInput }) => {
    return (
        <View style={styles.goalBlock}>
            <TextInput style={styles.input} placeholder='Write your goal' onChangeText={userInputHandler} value={userInput} />
            <Button title='Add goal' onPress={onAddTodo} />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    goalBlock: {
        gap: 12,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        width: '80%',
        borderWidth: 1,
        paddingLeft: '4%',
    },
})