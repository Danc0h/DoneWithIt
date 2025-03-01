import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import pattern from "../../assets/pattern.jpg";
import { button1 } from "../common/button";
import logo from "../../assets/logo.png";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.patternjpg} source={pattern} />
      <View style={styles.container1}>
        <Text style={styles.head}>Welcome to </Text>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.head}>Affirmative Farmers </Text>
        <Text style={styles.head}> SACCO</Text>
        <Text style={button1} onPress={() => navigation.navigate("login")}>
          Log in
        </Text>
        <Text style={button1} onPress={() => navigation.navigate("signup")}>
          Sign Up
        </Text>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  patternjpg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  head: {
    fontSize: 30,
    color: "#fff",
    alignItems: "center",
  },
  container1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  logo: {
    height: 80,
    resizeMode: "contain",
  },
});

//DMH2.Ivw<i@;kMZR
