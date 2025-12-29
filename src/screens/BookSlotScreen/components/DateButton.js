import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { iOS_Device, ResponsiveSizeWp } from '../../../helpers/responsive'
import { COLOR } from '../../../helpers/colors'
import { shortDateFormat } from '../../../helpers/helper-functions'
import { fontFamily } from '../../../helpers/fonts'

const DateButton = ({
    data,
    selected,
    onPress = () => { },
}) => {
    return (
        <TouchableOpacity
            style={[styles.container, selected && styles.selectedContainer]}
            activeOpacity={1}
            onPress={() => { onPress(data) }}
        >
            <Text style={styles.dateText} numberOfLines={1}>
                {shortDateFormat(data)}
            </Text>
        </TouchableOpacity>
    )
}

export default memo(DateButton)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: ResponsiveSizeWp(5),
        backgroundColor: COLOR.LIGHTGRAY,
        paddingHorizontal: ResponsiveSizeWp(10),
        borderRadius: ResponsiveSizeWp(45),
        borderWidth: ResponsiveSizeWp(1),
        borderColor: COLOR.GRAY3,
        justifyContent: 'center',
        alignItems: 'center',
        height: ResponsiveSizeWp(45),
    },
    selectedContainer: {
        borderColor: COLOR.PRIMARY,
        backgroundColor: COLOR.PRIMARYLIGHT,
    },
    dateText: {
        fontFamily: fontFamily.Regular,
        fontSize: ResponsiveSizeWp(14),
        color: COLOR.BLACK,
        top: iOS_Device ? 0 : ResponsiveSizeWp(1),
    },
})