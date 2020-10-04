import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'
import { addRegion } from './actions';
import { connect } from 'react-redux';


class Root extends Component {
    state={
        inputText: '',
    }

    inputTextbox = (text) => {
        this.setState({inputText: text})
    }

    buttonInStore = (valueregion) => {
        this.props.addRegion(valueregion)
        this.setState({inputText: ''})
        console.log(this.props)
    }
    
    

    render() {
        console.log(this.props)

       
        
        const{ inputText } = this.state
        
        return (
            <View style={styles.center}>
                <Text style={styles.h1}> Root Container </Text>
                <View style={styles.inputbox}>
                    <TextInput 
                        placeholder="введите..." 
                        style={styles.input}
                        onChangeText={input => this.inputTextbox(input)}
                        value={inputText}
                        />
                    <View style={styles.button}>
                        <Button title="в Store" onPress={() => this.buttonInStore(inputText)}/></View>
                </View>
                <Text>Сторка в store:</Text>
                <Text style={{fontSize: 24}}>{this.props.region}</Text> 
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    console.log('mapStateToProps',state) 
    return {region: state.RegionReducer.region}
};

//export default connect(mapStateToProps) (Root);

export default connect(mapStateToProps,{addRegion}) (Root);

const styles = StyleSheet.create({
    inputbox: {
        flexDirection: 'row',
        height: 50,
    },
    button:{
        height: 40,
        paddingHorizontal: 10,
    },
    input:{
        height: 40,
        width: '50%',
        borderColor: 'grey',
        borderBottomWidth: 1
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    h1: {
        fontSize: 34,
        fontWeight: '700',
        padding: 20,
    },

})
