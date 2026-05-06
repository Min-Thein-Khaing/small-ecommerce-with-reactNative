import { categories } from "@/data";
import React from "react";
import { View } from "react-native";
import Title from "../shop/Title";
import Category, { CategoryProps } from "./Category";

import { FlashList } from "@shopify/flash-list";

const CategoryHeader = () => {
  return (
    <View>
      <Title title="Shop by Category" btnTitle="See All" />
      <FlashList
        data={categories as CategoryProps[]} 
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Category {...item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        estimatedItemSize={75}
        contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: 10 }}
      />
    </View>
  );
};

export default CategoryHeader;
