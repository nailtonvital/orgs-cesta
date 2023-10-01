import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Top from "./components/Top";
import Details from "./components/Details";
import Item from "./components/Item";
import Texto from "../../Components/Texto";

export default function Cesta({ top, details, items }) {
  console.log(items.list);
  return (
    <>
      <FlatList
        data={items.list}
        renderItem={Item}
        keyExtractor={({ name }) => name}
        ListHeaderComponent={() => (
          <>
            <Top {...top} />

            <View style={styles.cesta}>
              <Details {...details} />
              <Texto style={styles.title}>{items.title}</Texto>
            </View>
          </>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#464646",
    marginTop: 32,
    marginBottom: 8,
  },
  cesta: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
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
    lineHeight: 42,
    marginTop: 8,
  },
});
