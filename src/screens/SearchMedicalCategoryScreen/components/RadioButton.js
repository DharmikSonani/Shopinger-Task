import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import { iOS_Device, ResponsiveSizeWp } from '../../../helpers/responsive'
import { COLOR } from '../../../helpers/colors'
import { fontFamily } from '../../../helpers/fonts'

const RadioButton = ({
    selected,
    data,
    isFirst,
    onPress = () => { },
}) => {
    return (
        <TouchableOpacity
            style={[styles.container, isFirst && { borderTopWidth: 0, paddingTop: ResponsiveSizeWp(5), }]}
            onPress={() => { onPress(data?.id) }}
            activeOpacity={1}
        >
            <View style={[styles.radioButton, selected && { borderColor: COLOR.PRIMARY, }]}>
                {selected && <View style={styles.selectedRadioButton} />}
            </View>

            <Text style={styles.text} numberOfLines={1}>
                {data?.title}
            </Text>
        </TouchableOpacity>
    )
}

export default memo(RadioButton)

const styles = StyleSheet.create({
    container: {
        borderTopWidth: ResponsiveSizeWp(1),
        borderColor: COLOR.GRAY3,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: ResponsiveSizeWp(15),
        gap: ResponsiveSizeWp(10),
    },
    radioButton: {
        width: ResponsiveSizeWp(22),
        aspectRatio: 1,
        borderRadius: ResponsiveSizeWp(20),
        borderColor: COLOR.SLAT4,
        borderWidth: ResponsiveSizeWp(1),
        padding: ResponsiveSizeWp(3),
    },
    selectedRadioButton: {
        width: '100%',
        height: '100%',
        borderRadius: ResponsiveSizeWp(20),
        backgroundColor: COLOR.PRIMARY,
    },
    text: {
        fontFamily: fontFamily.Medium,
        fontSize: ResponsiveSizeWp(15),
        color: COLOR.BLACK,
        top: iOS_Device ? 0 : ResponsiveSizeWp(1),
    },
})