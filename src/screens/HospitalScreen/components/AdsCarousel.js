import { Animated, Image, StyleSheet, View } from 'react-native'
import React, { memo, useCallback, useMemo, useRef } from 'react'
import { ResponsiveSizeWp, screenWidth } from '../../../helpers/responsive'
import { COLOR } from '../../../helpers/colors';

const CARD_WIDTH = screenWidth - ResponsiveSizeWp(15 * 2);

const AdsCarousel = ({
    data = [],
}) => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const scaleAnimaiton = useRef(new Animated.Value(0)).current;

    const inputRange = useCallback((index) => [
        (index - 2) * (CARD_WIDTH),
        (index - 1) * (CARD_WIDTH),
        (index) * (CARD_WIDTH),
        (index + 1) * (CARD_WIDTH),
        (index + 2) * (CARD_WIDTH),
    ], [])

    return (
        <View style={styles.wrapper}>
            <Animated.ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                snapToInterval={CARD_WIDTH}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false, }
                )}
            >
                {
                    data?.map((ad, index) =>
                        <Animated.Image
                            key={index}
                            source={ad}
                            resizeMode='cover'
                            style={[styles.adView, {
                                transform: [{
                                    scale: scrollX.interpolate({
                                        inputRange: inputRange(index),
                                        outputRange: [0.95, 0.95, 1, 0.95, 0.95],
                                    })
                                }]
                            }]}
                        />
                    )
                }
            </Animated.ScrollView>

            <View style={styles.indicatorContainer}>
                {
                    data?.map((ad, index) =>
                        <Animated.View
                            key={index}
                            style={[styles.indicators, {
                                width: scrollX.interpolate({
                                    inputRange: inputRange(index),
                                    outputRange: [ResponsiveSizeWp(10), ResponsiveSizeWp(10), ResponsiveSizeWp(30), ResponsiveSizeWp(10), ResponsiveSizeWp(10)],
                                }),
                                backgroundColor: scrollX.interpolate({
                                    inputRange: inputRange(index),
                                    outputRange: [COLOR.GRAY, COLOR.GRAY, COLOR.PRIMARY, COLOR.GRAY, COLOR.GRAY],
                                }),
                            }]}
                        />
                    )
                }
            </View>
        </View>
    )
}

export default memo(AdsCarousel)

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        paddingHorizontal: ResponsiveSizeWp(15),
        gap: ResponsiveSizeWp(7),
    },
    container: {
        width: CARD_WIDTH,
        aspectRatio: 2.91,
        borderRadius: ResponsiveSizeWp(10),
        overflow: 'hidden',
    },
    adView: {
        width: CARD_WIDTH,
        borderWidth: ResponsiveSizeWp(0.5),
        borderColor: COLOR.PRIMARY,
        borderRadius: ResponsiveSizeWp(10),
        height: '100%',
    },
    indicatorContainer: {
        width: '100%',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        gap: ResponsiveSizeWp(5),
    },
    indicators: {
        height: ResponsiveSizeWp(4),
        width: ResponsiveSizeWp(10),
        backgroundColor: COLOR.GRAY,
        borderRadius: ResponsiveSizeWp(10),
    },
})