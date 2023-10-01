import React from "react";
import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import Texto from "../../../Components/Texto";

export default function Details({
  name,
  farm,
  farmLogo,
  description,
  price,
  button,
}) {
  return (
    <>
      <Texto style={styles.name}>{name}</Texto>
      <View style={styles.farm}>
        <Image style={styles.farmImage} source={farmLogo} />
        <Texto style={styles.farmName}>{farm}</Texto>
      </View>
      <Texto style={styles.description}>{description}</Texto>
      <Texto style={styles.price}>{price}</Texto>

      <TouchableOpacity style={styles.button}>
        <Texto style={styles.buttonText}>{button}</Texto>
      </TouchableOpacity>
    </>
  );
}
const styles = StyleSheet.create({
  name: {
    color: "#464646",
    fontSize: 26,
    fontWeight: "bold",
    lineHeight: 40,
  },
  farm: {
    flexDirection: "row",
    paddingVertical: 12,
    alignItems: "center",
  },
  farmImage: {
    width: 32,
    height: 32,
    marginTop: 8,
  },
  farmName: {
    fontFamily: "MontserratRegular",
    fontSize: 16,

    marginLeft: 12,
  },
  description: {
    fontFamily: "MontserratRegular",
    color: "#a3a3a3",
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: "#2a9f85",
    fontWeight: "bold",
    fontSize: 26,
  },
  button: {
    marginTop: 16,
    backgroundColor: "#2a9f85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "MontserratRegular",
    fontWeight: "bold",
    fontSize: 16,
  },
});
