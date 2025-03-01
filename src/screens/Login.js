import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import pattern from "../../assets/pattern.jpg";
import logo from "../../assets/logo.png";
import { button1 } from "../common/button";
import { useState } from "react";
import {
  formgroup,
  head1,
  head2,
  input,
  label,
  link,
  link2,
  errormessage,
} from "../common/formcss";

const Login = ({ navigation }) => {
  const [fdata, setFdata] = useState({
    email: "",
    password: "",
  });

  const [errormsg, setErrormsg] = useState(null);

  const Sendtobackend = async () => {
    // console.log(fdata);
    if (fdata.email == "" || fdata.password == "") {
      setErrormsg("All fields are required");
      return;
    } else {
      await fetch(" https://keecommbackend.onrender.com/api/users/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fdata),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.error) {
            setErrormsg(data.error);
          } else {
            alert("logged successfully");
            navigation.navigate("homepage");
          }
        })
        .catch((error) => {
          // Handle any errors that occur
          console.error(error);
        });
    }
  };
  return (
    <View style={styles.container}>
      <Image style={styles.patternjpg} source={pattern} />
      <View style={styles.container1}>
        <View style={styles.s1}>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.h1}>Farmer's Affirmative </Text>
          <Text style={styles.small1}>Savings and Credits Cooperation</Text>
        </View>

        <View style={styles.s2}>
          <Text style={head1}>Login</Text>
          <Text style={head2}>Sign in to continue</Text>
          {errormsg ? <Text style={errormessage}>{errormsg}</Text> : null}
          <View style={formgroup}>
            <Text style={label}>Email</Text>
            <TextInput
              style={input}
              placeholder='Enter your email'
              onPressIn={() => setErrormsg(null)}
              onChangeText={(text) => setFdata({ ...fdata, email: text })}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>Password</Text>
            <TextInput
              style={input}
              placeholder='Enter your password'
              secureTextEntry={true}
              onChangeText={(text) => setFdata({ ...fdata, password: text })}
              onPressIn={() => setErrormsg(null)}
            />
          </View>
          <View style={styles.fp}>
            <Text style={link}>Forgot Password?</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              Sendtobackend();
            }}
          >
            <Text style={button1}>Sign In</Text>
          </TouchableOpacity>
          <Text style={link2}>
            Don't have an account?;
            <Text style={link} onPress={() => navigation.navigate("signup")}>
              Create a new account
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;

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
  container1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  logo: {
    height: 80,
    resizeMode: "contain",
  },
  small1: {
    color: "#fff",
    fontSize: 17,
  },
  h1: {
    fontSize: 30,
    color: "#ffff",
  },
  s1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "30%",
  },
  s2: {
    display: "flex",
    backgroundColor: "#fff",
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  fp: {
    display: "flex",
    alignItems: "flex-end",
    marginHorizontal: 10,
    marginVertical: 5,
  },
});
