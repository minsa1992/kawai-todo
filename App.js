/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Dimensions,
  Platform
} from 'react-native';

const {hegiht, width} = Dimensions.get("window");

export default class App extends React.Component{
  state = {
    newToDo: ""
  };
  render(){
    const {newToDo} = this.state;
    return(
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <Text style={styles.title}>Kawai To Do</Text>
        <View style={styles.card}>
          <TextInput style={styles.input}
           placeholder={"New To Do"}
           value={newToDo}
           onChangeText={this._controlNewToDo}
           placeholderTextColor={"#999"}
           returnKeyType={"done"}
           autoCorrect={false}
           />
        </View>
      </View>
    );
  }

  _controlNewToDo = text => {
    this.setState({
      newToDo : text
    });
  };
}

const styles = StyleSheet.create({
    container : {
      flex:1,
      backgroundColor:"skyblue",
      alignItems:"center"
    },
    title:{
      color : "white",
      fontSize:30,
      marginTop:50,
      fontWeight:"200",
      marginBottom:30
    },
    card:{
      backgroundColor:"white",
      flex:1,
      width:width-25,
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
      ...Platform.select({
        ios:{
          shadowColor:"rgb(50,50,50)",
          shadowOpacity:0.5,
          shadowRadius:5,
          shadowOffset:{
            hegiht : -1,
            width : 0
          }
        },
        android:{
          elevation: 3
        }
      })
    },
    input:{
      padding :20,
      borderBottomColor:"#bbb",
      borderBottomWidth:1,
      fontSize:25
    }
});