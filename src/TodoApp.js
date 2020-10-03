import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'
import AddTodo from './contianers/AddTodo';

 class TodoApp extends Component {

    state = {
        region: '',
    }
    render() {
        return (
            <View style={styles.container}>
               <TextInput
                    placeholder="введите"
                    style={styles.textinput}
               />
               <Button
                title="сохранить"
                onPress={()=>{}}
               />
            </View>
        )
    }
}
export default TodoApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      textinput: {
          borderBottomWidth: 1,
          borderColor: 'grey',
          height: 50,
          width: '50%'
         
      },
})
