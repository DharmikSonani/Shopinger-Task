import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { fontFamily } from '../../../helpers/fonts';
import { COLOR } from '../../../helpers/colors';
import { iOS_Device, ResponsiveSizeWp } from '../../../helpers/responsive';
import VectorIcons from '../../../helpers/vector-icons';

const Point = ({
    number,
    point,
}) => {
    return (
        <View style={styles.pointContainer}>
            <View style={styles.pointNumberContainer}>
                <Text style={styles.pointNumber} numberOfLines={1}>
                    {number}
                </Text>
            </View>
            <Text style={styles.pointText} numberOfLines={1}>
                {point}
            </Text>
        </View>
    )
}

const PostProcessGuide = () => {

    const rotation = useRef(new Animated.Value(0)).current;

    const [expended, setExpended] = useState(false);

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
                <Text style={styles.questionText} numberOfLines={2}>
                    {`What will happen after uploading?`}
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
                expended === true &&
                <>
                    <Point
                        number={1}
                        point={`Our team will verify and create your order.`}
                    />

                    <View style={styles.line} />

                    <Point
                        number={2}
                        point={`We'll apply the most possible discounts.`}
                    />

                    <View style={styles.line} />

                    <Point
                        number={3}
                        point={`You can pay online or cash on delivery.`}
                    />
                </>
            }
        </View>
    )
}

export default memo(PostProcessGuide)

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: ResponsiveSizeWp(iOS_Device ? 15 : 13),
    },
    questionText: {
        fontFamily: fontFamily.SemiBold,
        color: COLOR.BLACK,
        fontSize: ResponsiveSizeWp(16),
        flex: 1,
    },
    pointContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        gap: ResponsiveSizeWp(11),
    },
    pointNumberContainer: {
        width: ResponsiveSizeWp(23),
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: ResponsiveSizeWp(23),
        backgroundColor: COLOR.PRIMARY,
    },
    pointNumber: {
        fontFamily: fontFamily.SemiBold,
        fontSize: ResponsiveSizeWp(11.5),
        color: COLOR.WHITE,
        top: iOS_Device ? 0 : ResponsiveSizeWp(1),
    },
    pointText: {
        fontFamily: fontFamily.Regular,
        fontSize: ResponsiveSizeWp(14),
        color: COLOR.SLAT4,
        top: iOS_Device ? 0 : ResponsiveSizeWp(1.5),
    },
    line: {
        height: ResponsiveSizeWp(25),
        width: ResponsiveSizeWp(1),
        backgroundColor: COLOR.PRIMARY,
        marginLeft: ResponsiveSizeWp(11),
    },
})