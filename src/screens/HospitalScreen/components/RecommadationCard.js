import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { memo, useCallback } from 'react'
import { ResponsiveSizeWp } from '../../../helpers/responsive'
import { COLOR } from '../../../helpers/colors'
import { RECOMMANDATION_BACKGROUND } from '../../../assets/assets'
import { fontFamily } from '../../../helpers/fonts'
import RecommandationProductCard from './RecommandationProductCard'

const RecommadationCard = ({
    data,
}) => {

    const renderProducts = useCallback(({ item }) => <RecommandationProductCard data={item} />, [data?.list])

    return (
        <View style={styles.wrapper}>
            <ImageBackground
                style={styles.container}
                source={RECOMMANDATION_BACKGROUND}
            >
                <Text style={styles.titleText} numberOfLines={1}>
                    {data?.title}
                </Text>

                <FlatList
                    data={data?.list}
                    keyExtractor={(_, index) => `${index}`}
                    renderItem={renderProducts}
                    scrollEnabled={false}
                    contentContainerStyle={styles.contentContainer}
                    numColumns={2}
                />
            </ImageBackground>
        </View>
    )
}

export default memo(RecommadationCard)

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        paddingHorizontal: ResponsiveSizeWp(15),
    },
    container: {
        paddingVertical: ResponsiveSizeWp(13),
        paddingHorizontal: ResponsiveSizeWp(8),
        borderRadius: ResponsiveSizeWp(13),
        backgroundColor: COLOR.PRIMARY,
        resizeMode: 'stretch',
        overflow: 'hidden',
        gap: ResponsiveSizeWp(10),
    },
    titleText: {
        fontFamily: fontFamily.SemiBold,
        fontSize: ResponsiveSizeWp(15),
        color: COLOR.WHITE,
        paddingHorizontal: ResponsiveSizeWp(5),
    },
    contentContainer: {
        gap: ResponsiveSizeWp(10),
    },
})