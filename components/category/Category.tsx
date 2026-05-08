import { Image } from "expo-image";
import React, { FC } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export interface CategoryProps {
  id: number;
  name: string;
  image: any;
  isSelected?: boolean;
  onPress?: () => void;
}
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";


const Category: FC<CategoryProps> = ({ id, name, image, isSelected, onPress }) => {
  return (
    <View style={{ marginHorizontal: 15 }}>
      <Pressable
        onPress={onPress}
        style={{ alignItems: "center", gap: 2 }}
      >
        <Image
          style={[styles.image, isSelected && styles.selectedHighlight]}
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

const styles = StyleSheet.create({
  image: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 3,
    borderColor: "transparent",
  },
  selectedHighlight: {
    borderColor: "#fcba03",
  }
});

export default React.memo(Category);
