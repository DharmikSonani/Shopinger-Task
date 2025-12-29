import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { iOS_Device, ResponsiveSizeWp } from '../../../helpers/responsive'
import { COLOR } from '../../../helpers/colors'
import VectorIcons from '../../../helpers/vector-icons'
import { fontFamily } from '../../../helpers/fonts'
import { ICICI_LOGO, OFFER_ICON, SBI_LOGO } from '../../../assets/assets'

const BankOffer = () => {
    const rotation = useRef(new Animated.Value(0)).current;

    const [expended, setExpended] = useState(true);

    useEffect(() => {
        Animated.timing(rotation, {
            toValue: expended ? 1 : 0,
            useNativeDriver: true,
            duration: 200
        }).start();
    }, [expended])

    const toggleExpended = useCallback(() => { setExpended(pre => !pre); }, [])

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.titleContainer}
                onPress={toggleExpended}
                activeOpacity={1}
            >
                <Image
                    source={OFFER_ICON}
                    style={styles.iconStyle}
                    resizeMode='contain'
                />
                <Text style={styles.titleText} numberOfLines={2}>
                    {`Bank Offers`}
                </Text>

                <Animated.View
                    style={{
                        transform: [{
                            rotate: rotation.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['0deg', '180deg']
                            })
                        }]
                    }}
                >
                    <VectorIcons.Entypo
                        name={`chevron-thin-down`}
                        size={ResponsiveSizeWp(16)}
                        color={COLOR.SLAT}
                    />
                </Animated.View>
            </TouchableOpacity>

            {
                expended &&
                <View style={styles.offerContainer}>
                    <Text style={styles.offerText} numberOfLines={1}>
                        {`10% Cashback`}
                    </Text>

                    <Image
                        source={SBI_LOGO}
                        style={styles.sbiBanner}
                        resizeMode='contain'
                    />
                    <Image
                        source={ICICI_LOGO}
                        style={styles.iciciBanner}
                        resizeMode='contain'
                    />
                </View>
            }
        </View>
    )
}

export default BankOffer

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: COLOR.LIGHTGRAY,
        padding: ResponsiveSizeWp(13),
        borderRadius: ResponsiveSizeWp(15),
        borderWidth: ResponsiveSizeWp(1),
        borderColor: COLOR.GRAY3,
        gap: ResponsiveSizeWp(10),
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        gap: ResponsiveSizeWp(7),
    },
    titleText: {
        fontFamily: fontFamily.SemiBold,
        color: COLOR.BLACK,
        fontSize: ResponsiveSizeWp(14),
        flex: 1,
        top: iOS_Device ? 0 : ResponsiveSizeWp(1),
    },
    iconStyle: {
        width: ResponsiveSizeWp(20),
        aspectRatio: 1,
    },
    offerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: ResponsiveSizeWp(10),
    },
    offerText: {
        fontFamily: fontFamily.SemiBold,
        color: COLOR.BLACK,
        fontSize: ResponsiveSizeWp(14),
        flex: 1,
        top: iOS_Device ? 0 : ResponsiveSizeWp(3),
    },
    sbiBanner: {
        width: ResponsiveSizeWp(50),
        aspectRatio: 2,
        top: ResponsiveSizeWp(2),
    },
    iciciBanner: {
        width: ResponsiveSizeWp(100),
        aspectRatio: 4,
    },
})