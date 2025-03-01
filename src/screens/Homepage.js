import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { button2 } from "../common/button2";
import { cont1 } from "../common/cont1";
import { mainview } from "../common/mainview";
import { mainview2 } from "../common/mainview2";
import { mainview3 } from "../common/mainview3";
import logo from "../../assets/logo.png";
import pattern from "../../assets/pattern.jpg";
import Icon from "react-native-vector-icons/MaterialIcons";
import { header } from "../common/header";

const Homepage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.patternjpg} source={pattern} />
      <View style={styles.container1}>
        <View style={styles.s1}>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.h1}>Farmer's Affirmative </Text>
          <Text style={styles.small1}>Savings and Credits Cooperation</Text>
          <Text style={header}>Welcome to Affirmative SACCO!</Text>
        </View>
      </View>

      <View style={mainview}>
        <View style={cont1}>
          <View style={button2}>
            <View style={styles.cont2}>
              <Text
                style={styles.head3}
                onPress={() => navigation.navigate("deposit")}
              >
                Deposit Money
              </Text>
              <Icon name='arrow-upward' size={30} color='green' />
            </View>
          </View>
        </View>

        <View style={cont1}>
          <View style={button2}>
            <View style={styles.cont2}>
              <Text
                style={styles.head3}
                onPress={() => navigation.navigate("send")}
              >
                Send Money
              </Text>
              <Icon name='send' size={30} color='black' />
            </View>
          </View>
        </View>

        <View style={cont1}>
          <View style={button2}>
            <View style={styles.cont2}>
              <Text
                style={styles.head3}
                onPress={() => navigation.navigate("balance")}
              >
                Check Balance
              </Text>
              <Icon name='credit-card' size={30} color='black' />
            </View>
          </View>
        </View>
      </View>

      <View style={mainview2}>
        <View style={cont1}>
          <View style={button2}>
            <View style={styles.cont2}>
              <Text
                style={styles.head3}
                onPress={() => navigation.navigate("apply")}
              >
                Apply Loan
              </Text>
              <Icon name='description' size={30} color='black' />
            </View>
          </View>
        </View>

        <View style={cont1}>
          <View style={button2} onPress={() => navigation.navigate("payment")}>
            <View style={styles.cont2}>
              <Text style={styles.head3}>Payment Methods</Text>
              <Icon name='check' size={30} color='green' />
            </View>
          </View>
        </View>

        <View style={cont1}>
          <View style={button2}>
            <View style={styles.cont2}>
              <Text
                style={styles.head3}
                onPress={() => navigation.navigate("pay")}
              >
                Repay Loan
              </Text>
              <Icon name='check-circle' size={30} color='green' />
            </View>
          </View>
        </View>
      </View>
      <View style={mainview3}>
        <View style={cont1}>
          <View style={button2}>
            <View style={styles.cont2}>
              <Text
                style={styles.head3a}
                onPress={() => navigation.navigate("withdraw")}
              >
                Withdraw Money
              </Text>
              <Icon name='arrow-downward' size={30} color='black' />
            </View>
          </View>
        </View>

        <View style={cont1}>
          <View style={button2} onPress={() => navigation.navigate("activity")}>
            <View style={styles.cont2}>
              <Text style={styles.head3}>SACCO Activity</Text>
              <Icon name='history' size={30} color='black' />
            </View>
          </View>
        </View>
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
    marginTop: 7,
    marginBottom: 0,
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
    height: "30%",
    width: "100%",
  },
  logo: {
    height: 80,
    resizeMode: "contain",
    marginTop: 5,
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
    marginBottom: 0,
    fontFamily: "sans-serif",
  },
  small2: {
    color: "#fff",
    fontSize: 14,
    marginTop: 5,
  },
  h1: {
    fontSize: 25,
    color: "#fff",
  },
  cont2: {
    flex: 1,
    justifyContent: "center", // Center vertically
    alignItems: "center",
  },
  head3: {
    marginBottom: 10,
    color: "#f0f",
  },
  head3a: {
    marginBottom: 10,
    color: "#f0f",
    fontSize: 12,
  },
});

////taskkill /f /im ngrok.exe
