import { products } from '@/data'
import { FlashList } from '@shopify/flash-list'
import React from 'react'
import { Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import Title from '../shop/Title'
import Product from './Product'


const RecommandProduct = ({ header }: { header: React.ReactNode }) => {
  const width = Dimensions.get("window").width;
  const numCol = width < 600 ? 2 : width < 768 ? 3 : 4;
  // const itemWidth = width / numCol - 20;

  return (
    <ScrollView>
      <View >
        {header}
        <Title title="Recommended for you" btnTitle="See All" />
      </View>

      <FlashList
        data={products}
        numColumns={numCol}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Product {...item} />}
        estimatedItemSize={300}
        // ListHeaderComponent={() => (
        //   <View>
        //     {header}
        //     <View >
        //       <Title title="Recommended for you" btnTitle="See All" />
        //     </View>
        //   </View>
        // )}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        showsVerticalScrollIndicator={false}
        // columnWrapperStyle={{ paddingHorizontal: 10, marginVertical: 10 }}// not working in flashList working flatList
        ListFooterComponent={() => (
          <View>
            <Pressable style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: "auto", borderWidth: 1, borderRadius: 10, padding: 5, borderColor: "black", width: "50%" }}>
              <Text >Explore More</Text>
            </Pressable>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default RecommandProduct

const styles = StyleSheet.create({

})