import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { header } from "../common/header";
import logo from "../../assets/logo.png";
import pattern from "../../assets/pattern.jpg";

const Homepage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.patternjpg} source={pattern} />
      <View style={styles.container1}>
        <View style={styles.s1}>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.h1}>Farmer's Affirmative </Text>
          <Text style={styles.small1}>Savings and Credits Cooperation</Text>
          <Text style={header}>Check Balance</Text>
        </View>
      </View>
      <Text style={styles.head5}>
        Dear Member,your account balance is Ksh.17,600
      </Text>

      <View style={styles.container2}>
        <View style={styles.creditCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Farmer's Affirmative </Text>
          </View>
          <View style={styles.cardNumber}>
            <Text style={styles.cardNumberText}>1234 5678 9876 5432</Text>
          </View>
          <View style={styles.cardDetails}>
            <View style={styles.cardDetailItem}>
              <Text style={styles.cardDetailLabel}>Card Holder</Text>
              <Text style={styles.cardDetailValue}>Dancun Kipkorir</Text>
            </View>
            <View style={styles.cardDetailItem}>
              <Text style={styles.cardDetailLabel}>Expires</Text>
              <Text style={styles.cardDetailValue}>12/24</Text>
            </View>
            <View style={styles.cardDetailItem}>
              <Text style={styles.cardDetailLabel}>Account Balance</Text>
              <Text style={styles.cardDetailValue}>17,600</Text>
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
  container2: {
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
    marginTop: 2,
  },
  h1: {
    fontSize: 30,
    color: "#fff",
  },
  creditCard: {
    backgroundColor: "#F50057",
    borderRadius: 15,
    padding: 20,
    width: 300,
  },
  cardHeader: {
    marginBottom: 20,
  },
  cardHeaderText: {
    color: "#fff",
    fontSize: 24,
  },
  cardNumber: {
    marginBottom: 20,
  },
  cardNumberText: {
    color: "#fff",
    fontSize: 18,
    letterSpacing: 2,
  },
  cardDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardDetailItem: {
    flex: 1,
  },
  cardDetailLabel: {
    color: "#fff",
    fontSize: 12,
  },
  cardDetailValue: {
    color: "#fff",
    fontSize: 16,
  },
  head5: {
    fontSize: 20,
    color: "#ffffff",
    textAlign: "center",
  },
});
