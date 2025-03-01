import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import pattern from "../../assets/pattern.jpg";
import logo from "../../assets/logo.png";
import { button1 } from "../common/button";
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
import { useState } from "react";

const Signup = ({ navigation }) => {
  const [fdata, setFdata] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [errormsg, setErrormsg] = useState(null);

  const Sendtobackend = async () => {
    // console.log(fdata);
    if (
      fdata.name == "" ||
      fdata.email == "" ||
      fdata.password == "" ||
      fdata.cpassword == ""
    ) {
      setErrormsg("All fields are required");
      return;
    } else {
      if (fdata.password != fdata.cpassword) {
        setErrormsg("Password and Confirm Password must be same");
        return;
      } else {
        await fetch("https://keecommbackend.onrender.com/api/users/signup", {
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
              alert("account created successfully");
              navigation.navigate("login");
            }
          })
          .catch((error) => {
            // Handle any errors that occur
            console.error(error);
          });
      }
    }
  };
  //127.0.0.1
  return (
    <View style={styles.container}>
      <Image style={styles.patternjpg} source={pattern} />
      <View style={styles.container1}>
        <View style={styles.s1}>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.h1}>Farmer's Affirmative Sacco</Text>
          <Text style={styles.small1}>Savings and Credits Cooperation</Text>
        </View>
        <ScrollView style={styles.s2}>
          <Text style={head1}>Sign Up</Text>
          <Text style={head2}>Sign up to continue</Text>
          {errormsg ? <Text style={errormessage}>{errormsg}</Text> : null}
          <View style={formgroup}>
            <Text style={label}>Name</Text>
            <TextInput
              style={input}
              placeholder='Enter your name'
              onChangeText={(text) => setFdata({ ...fdata, name: text })}
              onPressIn={() => setErrormsg(null)}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>Email</Text>
            <TextInput
              style={input}
              placeholder='Enter your email'
              onChangeText={(text) => setFdata({ ...fdata, email: text })}
              onPressIn={() => setErrormsg(null)}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>Password</Text>
            <TextInput
              style={input}
              placeholder='Enter your password'
              onChangeText={(text) => setFdata({ ...fdata, password: text })}
              secureTextEntry={true}
              onPressIn={() => setErrormsg(null)}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>Confirm password</Text>
            <TextInput
              style={input}
              placeholder='Confirm password'
              onChangeText={(text) => setFdata({ ...fdata, cpassword: text })}
              secureTextEntry={true}
              onPressIn={() => setErrormsg(null)}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              Sendtobackend();
            }}
          >
            <Text style={button1}>Signup</Text>
          </TouchableOpacity>
          <Text style={link2}>
            Already Registered?
            <Text style={link} onPress={() => navigation.navigate("login")}>
              {" "}
              Login here
            </Text>
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default Signup;

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
    color: "#fff",
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
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 10,
  },
});
