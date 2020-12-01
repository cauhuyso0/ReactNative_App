import React, { useContext } from "react";
import { View, Text, StyleSheet, Button, ImageBackground , Image} from "react-native";
import { AuthContext } from "../navigation/AuthProvider";



export const Home = ({ navigation }) => {
  const { user } = useContext(AuthContext);
  return (
    
    <View style={styles.container}>
     <ImageBackground source = {require("../img/bg1.jpg")} style = {styles.image}>
      <Text>LOL</Text>
     </ImageBackground>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    flexDirection: "column"

    },
  text: {
    fontSize: 25,
    color: "green",
  },
  image: {
  
    flex:1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});