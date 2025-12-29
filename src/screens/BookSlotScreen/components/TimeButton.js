import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { iOS_Device, ResponsiveSizeWp } from '../../../helpers/responsive'
import { COLOR } from '../../../helpers/colors'
import { fontFamily } from '../../../helpers/fonts'

const TimeButton = ({
    data,
    selected,
    onPress = () => { },
}) => {
    return (
        <TouchableOpacity
            style={[styles.container, selected && styles.selectedContainer]}
            activeOpacity={1}
            onPress={() => { onPress(data) }}
            disabled={data?.booked}
        >
            <Text style={[styles.timeText, data?.booked && styles.bookedText]} numberOfLines={1}>
                {data?.time}
            </Text>
        </TouchableOpacity>
    )
}

export default memo(TimeButton)

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
    timeText: {
        fontFamily: fontFamily.Regular,
        fontSize: ResponsiveSizeWp(14),
        color: COLOR.BLACK,
        top: iOS_Device ? 0 : ResponsiveSizeWp(1.5),
    },
    bookedText: {
        textDecorationLine: 'line-through',
        textDecorationColor: COLOR.SLAT4,
        color: COLOR.SLAT4,
        textDecorationStyle: 'solid'
    },
})