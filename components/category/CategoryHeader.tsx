import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import Title from "../shop/Title";
import Category from "./Category";
import { Container } from "lucide-react-native";
import { categories } from "@/data";
import { ScrollView } from "react-native";

const CategoryHeader = () => {
  return (
    <View>
      <Title title="Shop by Category" btnTitle="See All" />
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Category {...item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoryHeader;
