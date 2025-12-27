import { Image, StyleSheet, Text, TouchableOpacity, } from 'react-native'
import React, { memo, } from 'react'
import { ResponsiveSizeWp } from '../../helpers/responsive';
import { fontFamily } from '../../helpers/fonts';
import { COLOR } from '../../helpers/colors';

export default TabButton = memo(({ data, onPress, focused, }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={1}
            style={[styles.TabButtonView]}
        >
            <Image
                source={data?.icon}
                style={[styles.iconStyle, { aspectRatio: data?.aspectRatio, }, focused && { tintColor: COLOR.PRIMARY }]}
                resizeMode='contain'
            />
            <Text style={[styles.nameText, focused && { fontFamily: fontFamily.SemiBold, color: COLOR.PRIMARY, }]} numberOfLines={1}>
                {data?.title}
            </Text>
        </TouchableOpacity>
    )
})

const styles = StyleSheet.create({
    TabButtonView: {
        flex: 1,
        paddingVertical: ResponsiveSizeWp(15),
        alignItems: 'center',
        justifyContent: 'center',
        gap: ResponsiveSizeWp(3),
    },
    nameText: {
        fontFamily: fontFamily.Regular,
        color: COLOR.BLACK,
        fontSize: ResponsiveSizeWp(12),
        textAlign: 'center',
    },
    selectedNameText: {
        fontFamily: fontFamily.Bold,
        color: COLOR.PRIMARY,
    },
    iconStyle: {
        height: ResponsiveSizeWp(32.5),
        aspectRatio: 0.8,
        tintColor: COLOR.BLACK,
        resizeMode: 'contain',
    }
})