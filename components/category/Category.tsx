import { Image } from "expo-image";
import React, { FC } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export interface CategoryProps {
  id: number;
  name: string;
  image: string; // သို့မဟုတ် ImageSourcePropType
}
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";


const Category: FC<CategoryProps> = ({ id, name, image }) => {
  return (
    <View style={{ marginHorizontal: 15 }}>
      <Pressable style={{ alignItems: "center", gap: 5 }}>
        <Image
        key={id}
          style={styles.image}
          source={image}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
        <Text>{name}</Text>
      </Pressable>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  image: {
    width: 56,
    height: 56,
    borderRadius: 30,
  },
});
