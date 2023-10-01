import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({ children, style }) {
  let textStyle = textStyles.text;

  if (style?.fontWeight === "bold") {
    textStyle = textStyles.boldText;
  }
  return <Text style={[style, textStyle]}>{children}</Text>;
}

const textStyles = StyleSheet.create({
  text: {
    fontFamily: "MontserratRegular",
    fontWeight: "normal",
  },
  boldText: {
    fontFamily: "MontserratBold",
    fontWeight: "normal",
  },
});
