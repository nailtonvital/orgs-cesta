import React from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Texto from "../../../Components/Texto";

export default function Item({ item: { name, image } }) {
  return (
    <View style={styles.item}>
      <Image style={styles.image} source={image} />
      <Texto style={styles.name}>{name}</Texto>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: "center",
  },
  image: {
    width: 140,
    height: 140,
    marginRight: 20,
  },
  name: {
    color: "#464646",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 12,
  },
});
