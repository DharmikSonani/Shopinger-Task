import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo, useCallback } from 'react'
import VectorIcons from '../../../helpers/vector-icons'
import { iOS_Device, ResponsiveSizeWp } from '../../../helpers/responsive'
import { COLOR } from '../../../helpers/colors'
import { fontFamily } from '../../../helpers/fonts'
import { showToast } from '../../../helpers/helper-functions'
import ProductCard from './ProductCard'

const ProductSection = ({
    data,
}) => {

    const handleMorePress = useCallback(() => {
        showToast(`More ${data?.title} Products`);
    }, [data?.title])

    const renderProducts = useCallback(({ item }) => <ProductCard data={item} />, [data?.list])

    return (
        <View style={styles.wrapper}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText} numberOfLines={1}>
                    {data?.title}
                </Text>

                <TouchableOpacity
                    style={styles.moreButton}
                    onPress={handleMorePress}
                >
                    <VectorIcons.Entypo
                        name={`chevron-thin-right`}
                        size={ResponsiveSizeWp(16)}
                        color={COLOR.SLAT}
                    />
                </TouchableOpacity>
            </View>

            <FlatList
                data={data?.list}
                keyExtractor={(_, index) => `${index}`}
                renderItem={renderProducts}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
            />
        </View>
    )
}

export default memo(ProductSection)

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        gap: ResponsiveSizeWp(10),
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: ResponsiveSizeWp(15),
        gap: ResponsiveSizeWp(10),
    },
    titleText: {
        flex: 1,
        fontFamily: fontFamily.SemiBold,
        color: COLOR.BLACK,
        fontSize: ResponsiveSizeWp(16),
        top: iOS_Device ? 0 : ResponsiveSizeWp(2),
    },
    moreButton: {
        padding: 0,
        margin: 0,
    },
    container: {
        width: '100%',
    },
    contentContainer: {
        paddingHorizontal: ResponsiveSizeWp(15),
        gap: ResponsiveSizeWp(10),
    },
})