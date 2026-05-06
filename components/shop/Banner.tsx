import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const Banner = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("@/data/shop/banner6.png")}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 19/ 9,
    backgroundColor: "#f0f0f0",
  },
});
