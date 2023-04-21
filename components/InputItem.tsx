import { Pressable, StyleSheet, Text, View } from 'react-native'
import { FC } from 'react'
import { TodoI } from '../models';

interface Props extends TodoI {
    onDelete: (id: number) => void;
}

const InputItem: FC<Props> = ({ text, id, onDelete }) => {
    return (
        <Pressable onPress={() => onDelete(id as number)}>
            <View key={id}>
                <Text style={styles.todo}>{text}</Text>
            </View>
        </Pressable>

    )
}

export default InputItem

const styles = StyleSheet.create({
    todo: {
        backgroundColor: 'black',
        color: 'white',
        paddingVertical: 12,
        paddingLeft: 12,
        borderRadius: 6,
        marginTop: 12
    },
})