import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { formgroup, label } from "../common/formcss";
import { button1 } from "../common/button";
import logo from "../../assets/logo.png";
import { header } from "../common/header";
import pattern from "../../assets/pattern.jpg";
import { head4, input2, input3 } from "../common/formcss2";

const Homepage = ({ navigation }) => {
  const handlePress = () => {
    Alert.alert(
      "Mpesa Integration",
      "Mpesa payment integration under development"
    );
  };

  return (
    <View style={styles.container}>
      <Image style={styles.patternjpg} source={pattern} />
      <View style={styles.container1}>
        <View style={styles.s1}>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.h1}>Farmer's Affirmative </Text>
          <Text style={styles.small1}>Savings and Credits Cooperation</Text>
          <Text style={header}>Deposit Money</Text>
        </View>
      </View>
      <View style={styles.s2}>
        <Text style={head4}>Please enter the deposit details </Text>
        <View style={formgroup}>
          <Text style={label}>Deposit to</Text>
          <TextInput
            style={input3}
            placeholder='Credit Account 176890743'
            editable={false}
          />
        </View>
        <View style={formgroup}>
          <Text style={label}>Enter amount to deposit</Text>
          <TextInput
            style={input2}
            placeholder='Enter amount'
            keyboardType='numeric'
          />
        </View>
        <TouchableOpacity onPress={handlePress}>
          <Text style={button1}>Deposit Money</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  patternjpg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  container1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40%",
    width: "100%",
  },
  logo: {
    height: 80,
    resizeMode: "contain",
  },
  s1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "30%",
  },
  small1: {
    color: "#fff",
    fontSize: 17,
  },
  h1: {
    fontSize: 25,
    color: "#fff",
  },
});
