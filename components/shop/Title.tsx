import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

type TitleProps = {
  title: string;
  btnTitle: string;
};
const Title = ({ title, btnTitle }: TitleProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{title}</Text>
      <Pressable>
        <Text style={styles.btnTitle}>{btnTitle}</Text>
      </Pressable>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  textTitle: {
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 1,
    color: "rgb(21, 17, 17)",
  },
  btnTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0c072d",
    textDecorationLine: "underline",
    letterSpacing: 1,
  },
});
