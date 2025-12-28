import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo, useEffect, useRef } from 'react'
import { ResponsiveSizeWp } from '../../../helpers/responsive'
import { fontFamily } from '../../../helpers/fonts'
import { COLOR, GRADIENTCOLOR } from '../../../helpers/colors'
import LinearGradient from 'react-native-linear-gradient'

const MenuItemButton = ({
    data,
    selected,
    onPress = () => { },
}) => {

    const animation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        let toValue = 0;
        if (selected) toValue = 1;
        Animated.timing(animation, {
            toValue: toValue,
            duration: 250,
            useNativeDriver: true,
        }).start()
    }, [selected])

    const scale = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    })

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => { onPress(data?.id) }}
            activeOpacity={1}
        >
            <Animated.View style={[styles.animatedViewWrapper, { transform: [{ scale: scale, }], opacity: scale, }]}>
                <LinearGradient
                    style={styles.animatedViewBorder}
                    colors={GRADIENTCOLOR.MENUBORDER}
                >
                    <View style={styles.animatedViewBack}>
                        <View style={{ width: '100%', height: '100%', borderRadius: ResponsiveSizeWp(8), backgroundColor: COLOR.WHITE }} />
                    </View>
                    <LinearGradient
                        style={[styles.animatedViewBorder2]}
                        colors={GRADIENTCOLOR.MENUBACK}
                    >
                    </LinearGradient>
                </LinearGradient>

            </Animated.View>
            <Image
                style={[styles.iconStyle, { transform: [{ scale: data?.scale }] }]}
                source={data?.icon}
                resizeMode='contain'
            />

            <Text style={[styles.textStyle, selected && { fontFamily: fontFamily.SemiBold, }]} numberOfLines={1}>
                {data?.title}
            </Text>
        </TouchableOpacity>
    )
}

export default memo(MenuItemButton)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: ResponsiveSizeWp(10),
        gap: ResponsiveSizeWp(10),
    },
    iconStyle: {
        height: ResponsiveSizeWp(22),
        width: '100%',
    },
    textStyle: {
        fontFamily: fontFamily.Regular,
        color: COLOR.BLACK,
        fontSize: ResponsiveSizeWp(12),
        top: ResponsiveSizeWp(3),
    },
    animatedViewWrapper: {
        position: 'absolute',
        width: ResponsiveSizeWp(40),
        aspectRatio: 1,
        borderRadius: ResponsiveSizeWp(10),
        alignSelf: 'center',
        top: ResponsiveSizeWp(1),
    },
    animatedViewBorder: {
        borderRadius: ResponsiveSizeWp(10),
        height: '100%',
        width: '100%',
    },
    animatedViewBorder2: {
        borderTopLeftRadius: ResponsiveSizeWp(10),
        borderTopRightRadius: ResponsiveSizeWp(10),
        height: '50%',
        width: '100%',
        position: 'absolute',
        zIndex: 10,
    },
    animatedViewBack: {
        height: '100%',
        width: '100%',
        borderRadius: ResponsiveSizeWp(8.5),
        padding: ResponsiveSizeWp(1.5),
        overflow: 'hidden',
    },
})