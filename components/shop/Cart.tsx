import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import CustomIcon from '../ui/lucide-react'
const Cart = () => {
    return (
        <Pressable onPress={() => alert('Cart')}>
            <View style={{ position: 'relative' }}>
                <CustomIcon name='cart' color='#000' size={24} />

                {/* Badge (နံပါတ်အနီဝိုင်းလေး) */}
                <View style={styles.cartBadge}>
                    <Text style={styles.cartBadgeText}>2</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default Cart

const styles = StyleSheet.create({
    cartBadge: {
        position: 'absolute',
        top: -4,
        right: -6,
        backgroundColor: 'red',
        borderRadius: 10, // Number ပဲ သုံးပါ (100% မသုံးပါနဲ့)
        minWidth: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartBadgeText: {
        color: 'white',
        fontSize: 9,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});