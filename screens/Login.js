import React, { useContext,useState, Component } from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import { AuthContext } from "../navigation/AuthProvider";
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { LoginButton } from "react-native-fbsdk";
import { windowHeight, windowWidth } from '../utils/Dimensions';
import { color } from "react-native-reanimated";
 
export const Login = ({ navigation }) => {
  const { login, loginFacebook } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Đăng Nhập </Text>
      <FormInput
        value={email}
        placeholderText='Tài khoản'
        onChangeText={userEmail => setEmail(userEmail)}
        autoCapitalize='none'
        keyboardType='email-address'
        autoCorrect={false}
      />
      
      <FormInput
        value={password}
        placeholderText='Mật khẩu'
        onChangeText={userPassword => setPassword(userPassword)}
        secureTextEntry={true}
      />
    
      <FormButton buttonTitle='Đăng Nhập' onPress={() => login(email, password)} />
      <TouchableOpacity
        style={styles.butonFB}
        onPress={()=> loginFacebook()}>
      <Text style ={styles.textFB}>LoginFaceBook</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.navButtonText}>Đăng ký tài khoản ?</Text>
      </TouchableOpacity>
      
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