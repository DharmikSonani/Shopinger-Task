import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo, useCallback } from 'react'
import { iOS_Device, ResponsiveSizeWp, screenWidth } from '../../../helpers/responsive'
import { COLOR } from '../../../helpers/colors'
import VectorIcons from '../../../helpers/vector-icons'
import { fontFamily } from '../../../helpers/fonts'
import { CURRENCY_SYMBOL } from '../../../helpers/helper'
import { showToast } from '../../../helpers/helper-functions'

const ProductCard = ({
    data,
}) => {

    const handleOnPress = useCallback(() => {
        showToast(data?.name);
    }, [data?.name])

    const handleAddCartPress = useCallback(() => {
        showToast(`Add to cart`);
    }, [])

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={handleOnPress}
            activeOpacity={0.9}
        >
            <View style={styles.productImageContainer}>
                <Image
                    source={data?.image}
                    style={styles.productImage}
                    resizeMode='cover'
                />

                <TouchableOpacity
                    style={styles.addCartButton}
                    onPress={handleAddCartPress}
                >
                    <VectorIcons.Entypo
                        name={`plus`}
                        size={ResponsiveSizeWp(18)}
                        color={COLOR.PRIMARY}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.ratingContainer}>
                <VectorIcons.Ionicons
                    name={`star`}
                    size={ResponsiveSizeWp(15)}
                    color={COLOR.YELLOW}
                />
                <Text style={styles.ratingText} numberOfLines={1}>
                    {data?.ratings}
                </Text>
            </View>

            <Text style={styles.productName} numberOfLines={2}>
                {data?.name}
            </Text>

            <View style={styles.priceContainer}>
                <Text style={styles.priceText}>
                    {CURRENCY_SYMBOL}{data?.price}
                </Text>
                <Text style={styles.discountText}>
                    {data?.discount}% off
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default memo(ProductCard)

const styles = StyleSheet.create({
    container: {
        width: screenWidth * 0.27,
    },
    productImageContainer: {
        height: screenWidth * 0.27,
        aspectRatio: 1,
        borderRadius: ResponsiveSizeWp(10),
        borderColor: COLOR.PRIMARYLIGHT,
        borderWidth: ResponsiveSizeWp(1),
    },
    productImage: {
        height: '100%',
        width: '100%',
        borderRadius: ResponsiveSizeWp(9),
    },
    addCartButton: {
        height: ResponsiveSizeWp(26),
        aspectRatio: 1.3,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 10,
        backgroundColor: COLOR.LIGHTGRAY,
        borderWidth: ResponsiveSizeWp(1),
        borderColor: COLOR.PRIMARY,
        borderRadius: ResponsiveSizeWp(20),
        bottom: -ResponsiveSizeWp(13),
    },
    ratingContainer: {
        marginTop: ResponsiveSizeWp(13),
        flexDirection: 'row',
        alignItems: 'center',
        gap: ResponsiveSizeWp(5),
    },
    ratingText: {
        fontFamily: fontFamily.Medium,
        fontSize: ResponsiveSizeWp(13),
        color: COLOR.BLACK,
        top: iOS_Device ? ResponsiveSizeWp(1) : ResponsiveSizeWp(2),
    },
    productName: {
        fontFamily: fontFamily.Regular,
        fontSize: ResponsiveSizeWp(12),
        color: COLOR.SLAT,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        width: '100%',
        gap: ResponsiveSizeWp(5),
        marginTop: ResponsiveSizeWp(3),
    },
    priceText: {
        fontFamily: fontFamily.SemiBold,
        fontSize: ResponsiveSizeWp(14),
        color: COLOR.PRIMARY,
    },
    discountText: {
        fontFamily: fontFamily.SemiBold,
        fontSize: ResponsiveSizeWp(11),
        color: COLOR.RED,
    },
})