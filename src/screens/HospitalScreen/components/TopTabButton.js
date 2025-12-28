import { Image, StyleSheet, Text, TouchableOpacity, } from 'react-native'
import React, { memo } from 'react'
import { iOS_Device, ResponsiveSizeWp } from '../../../helpers/responsive'
import { COLOR } from '../../../helpers/colors'
import { fontFamily } from '../../../helpers/fonts'

const TopTabButton = ({
    selected,
    data,
    onPress = () => { },
}) => {
    return (
        <TouchableOpacity
            style={[styles.container, selected && styles.selectedContainer]}
            onPress={() => { onPress(data?.id) }}
            activeOpacity={1}
        >
            <Image
                style={[styles.iconStyle, { width: ResponsiveSizeWp(18) * data?.aspectRatio }]}
                source={data?.icon}
                resizeMode='contain'
            />
            <Text style={[styles.textStyle, selected && styles.selectedTextStyle]} numberOfLines={1}>
                {data?.title}
            </Text>
        </TouchableOpacity>
    )
}

export default memo(TopTabButton)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        borderWidth: ResponsiveSizeWp(1),
        borderColor: COLOR.GRAY2,
        borderRadius: ResponsiveSizeWp(40),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: ResponsiveSizeWp(5),
    },
    selectedContainer: {
        borderColor: COLOR.PRIMARY,
        backgroundColor: COLOR.PRIMARY,
    },
    iconStyle: {
        height: ResponsiveSizeWp(18),
    },
    textStyle: {
        fontFamily: fontFamily.Regular,
        color: COLOR.SLAT2,
        fontSize: ResponsiveSizeWp(12),
        top: iOS_Device ? 0 : ResponsiveSizeWp(1),
    },
    selectedTextStyle: {
        color: COLOR.WHITE,
    },
})