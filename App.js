import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Press=()=>{
    console.warn( {email},{password} );
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/images.png")} /> 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          value={email}
          onChangeText={(val) => setEmail(val)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          value={password}
          onChangeText={(val) => setPassword(val)}
        /> 
      </View> 

      <TouchableOpacity style={styles.loginBtn} onPress={Press}>
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity> 
      <View>
      <View >
        <Text style={styles.forgot_button}>Don't Have an Account? </Text> 
        <TouchableOpacity style={{alignItems:'center'}}><Text style={styles.innertext}>Sign up</Text></TouchableOpacity>
       
      </View> 
      </View>
      
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
    height:'20%',
    width:'50%',
    resizeMode:'contain',
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 10,
    width: "80%",
    height: 45,
    marginBottom: 20,

  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 0,
  },
  forgot_button: {
   fontSize:15,
    marginBottom: 30,
    color:'grey',
    paddingTop:20,

  },
  innertext:{
    fontSize:20,
   
   fontWeight:600,
    color:'blue',


  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#FF1493",
  },
});