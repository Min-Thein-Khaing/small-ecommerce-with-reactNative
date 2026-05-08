import { categories } from "@/data";
import React, { useCallback, useState } from "react";
import { View } from "react-native";
import Title from "../shop/Title";
import Category, { CategoryProps } from "./Category";

import { FlashList } from "@shopify/flash-list";

const CategoryHeader = () => {
  const [selectedId, setSelectedId] = useState<number | null>(1);

  const handlePress = useCallback((id: number) => {
    setSelectedId(id);
  }, []);
  return (
    <View>
      <Title title="Shop by Category" btnTitle="See All" />
      <FlashList
        data={categories as CategoryProps[]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Category
            {...item}
            isSelected={selectedId === item.id}
            onPress={() => {
              handlePress(item.id)
            }}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        extraData={selectedId}
        estimatedItemSize={80}
        contentContainerStyle={{ paddingHorizontal: 5, marginVertical: 5 }}

      />
    </View>
  );
};

export default CategoryHeader;
