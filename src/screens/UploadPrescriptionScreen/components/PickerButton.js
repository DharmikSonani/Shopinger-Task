import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import { iOS_Device, ResponsiveSizeWp } from '../../../helpers/responsive'
import { COLOR } from '../../../helpers/colors'
import { fontFamily } from '../../../helpers/fonts'

const PickerButton = ({
    icon,
    title,
    onPress = () => { },
}) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <View style={styles.iconContainer}>
                <Image
                    style={styles.iconStyle}
                    source={icon}
                    resizeMode='contain'
                />
            </View>
            <Text style={styles.titleText} numberOfLines={1}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default memo(PickerButton)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: ResponsiveSizeWp(1),
        borderColor: COLOR.PRIMARY,
        backgroundColor: COLOR.PRIMARYLIGHT3,
        borderRadius: ResponsiveSizeWp(15),
        padding: ResponsiveSizeWp(15),
        alignItems: 'center',
        gap: iOS_Device ? ResponsiveSizeWp(13) : ResponsiveSizeWp(10),
    },
    titleText: {
        fontFamily: fontFamily.Medium,
        fontSize: ResponsiveSizeWp(16),
        color: COLOR.SLAT,
        marginBottom: iOS_Device ? 0 : -ResponsiveSizeWp(5),
    },
    iconContainer: {
        height: ResponsiveSizeWp(45),
        aspectRatio: 1,
        backgroundColor: COLOR.WHITE,
        padding: ResponsiveSizeWp(12),
        borderRadius: ResponsiveSizeWp(45),
        elevation: 10,
        shadowColor: COLOR.SLAT,
        shadowOffset: { height: 2, width: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    iconStyle: {
        width: '100%',
        height: '100%',
    },
})