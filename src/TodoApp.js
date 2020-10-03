import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

 class TodoApp extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
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
})
