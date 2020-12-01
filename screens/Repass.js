import React, { useContext,useState, Component } from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import { AuthContext } from "../navigation/AuthProvider";
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { windowHeight, windowWidth } from '../utils/Dimensions';
 
export const Repass = ({ navigation }) => {
  
  const [password1, setPassword1] = useState('');
  const [password, setPassword] = useState('');

function Repass (){
  var user = firebaseConfig.auth().currentUser;
  if(password1 === password){
    user.updatePassword(password).then(function() {
      console.log("Đổi pass thành công")
      ToastAndroid.show('Update success!', ToastAndroid.SHORT);
      setPassword("");
      setPassword1("");
      
    }).catch(function(error) {
      console.log(error)
    });
  }
}
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Đổi Password </Text>
     
	  <FormInput
       // value={password}
        placeholderText='Mật khẩu'
        onChangeText={userPassword => setPassword1(userPassword)}
        secureTextEntry={true}
      />

      <FormInput
        //value={password}
        placeholderText='Nhập lại Mật khẩu'
        onChangeText={userPassword => setPassword(userPassword)}
        secureTextEntry={true}
      />
    
      <FormButton buttonTitle='Xác nhận' onPress={() => {Repass();}}/>
      
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    marginBottom: 10
  },
  textFB:{
    color: '#ffffff',
    fontSize: 20,
  },
  navButton: {
    marginTop: 15
  },
  navButtonText: {
    fontSize: 20,
    color: '#8a2be2'
  },
  butonFB:{
    marginTop: 10,
    width: windowWidth / 2,
    height: windowHeight / 15,
    backgroundColor: '#8a2be2',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  }
});