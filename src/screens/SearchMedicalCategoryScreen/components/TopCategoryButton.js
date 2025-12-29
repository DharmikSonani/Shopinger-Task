import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { COLOR } from '../../../helpers/colors'
import { iOS_Device, ResponsiveSizeWp } from '../../../helpers/responsive'
import { fontFamily } from '../../../helpers/fonts'

const TopCategoryButton = ({
    icon,
    title,

    onPress = () => { },
}) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <Image
                style={styles.iconStyle}
                source={icon}
                resizeMode='contain'
            />
            <Text style={styles.titleText} numberOfLines={1}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default memo(TopCategoryButton)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: ResponsiveSizeWp(1),
        borderColor: COLOR.PRIMARY,
        backgroundColor: COLOR.PRIMARYLIGHT3,
        borderRadius: ResponsiveSizeWp(10),
        paddingHorizontal: ResponsiveSizeWp(5),
        paddingVertical: ResponsiveSizeWp(5),
        alignItems: 'center',
        gap: iOS_Device ? ResponsiveSizeWp(8) : ResponsiveSizeWp(5),
    },
    titleText: {
        fontFamily: fontFamily.Medium,
        fontSize: ResponsiveSizeWp(12),
        color: COLOR.SLAT,
        marginBottom: iOS_Device ? ResponsiveSizeWp(5) : 0,
    },
    iconStyle: {
        height: ResponsiveSizeWp(40),
        aspectRatio: 1,
        marginTop: ResponsiveSizeWp(10),
    },
})