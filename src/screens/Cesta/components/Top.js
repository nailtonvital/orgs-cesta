import React from "react";
import { Image } from "react-native";
import Texto from "../../../Components/Texto";

import { View, Text, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default function Top({title}) {
  return (
    <>
      <Image
        style={styles.topImage}
        source={require("../../../../assets/topo.png")}
      />
      <Texto style={styles.title}>{title}</Texto>
    </>
  );
}

const styles = StyleSheet.create({
  topImage: {
    width: "100%",
    height: (578 / 768) * width,
  },
  title: {
    position: "absolute",
    fontSize: 16,
    textAlign: "center",
    width: "100%",
    color: "#fff",
    lineHeight: 37,
    fontWeight: "bold",
    padding: 16,
  },
});
