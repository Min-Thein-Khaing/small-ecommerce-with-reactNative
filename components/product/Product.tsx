import { ProductProps } from '@/types/ProductType';
import { Image } from 'expo-image';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { IconSymbol } from '../ui/icon-symbol';

import CustomIcon from '../ui/lucide-react';


// interface ProductType extends ProductProps {
//     itemWidth: number;
// }

const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";


const Product = ({ id, brand, title, star, quantity, price, discount, image, colors, sizes, users, description, }: ProductProps) => {
    return (
        <Pressable style={[styles.container, { marginBottom: 15 }]}>
            <Image
                style={styles.imageStyle}
                source={image}
                placeholder={{ blurhash }}
                contentFit="cover"
                transition={1000}
            />
            <Pressable style={styles.heartContainer}>
                <IconSymbol name={users.length > 0 ? "heart.fill" : "heart"} size={18} color="#ab1d18" />
            </Pressable>
            <View style={{gap:2, marginTop: 5 }}>
                <View style={styles.bodyContent}>
                    <Text style={{ fontSize: 14 }}>{brand}</Text>
                    <CustomIcon name="star" size={14} color="#ffbf00" />
                    <Text>{star}</Text>
                    <Text>({quantity})</Text>
                </View>
                <View>
                    <Text style={styles.titleLength}>{title.length > 22 ? `${title.slice(0, 22)}...` : title}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={{ color: "#08752d", fontWeight: "bold" }}>${price.toFixed(2)}</Text>
                    {
                        discount !== 0 && <Text style={[styles.textColor, { textDecorationLine: "line-through" }]}>${discount.toFixed(2)}</Text>
                    }
                </View>
            </View>
        </Pressable>
    )
}

export default Product

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
    },
    imageStyle: {
        width: '100%',
        aspectRatio: 3 / 4,
        borderRadius: 12,
    },
    heartContainer: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "#00000015",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 5,
        right: 5
    },
    bodyContent: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
        gap: 5.5
    },
    textColor: {
        color: "#c22525"
    },
    titleLength: {
        fontSize: 12,
        // color:"#6e7170",
        fontWeight: "400"
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    }
})