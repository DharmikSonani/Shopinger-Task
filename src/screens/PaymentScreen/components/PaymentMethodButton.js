import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import { iOS_Device, ResponsiveSizeWp } from '../../../helpers/responsive'
import { COLOR } from '../../../helpers/colors'
import { fontFamily } from '../../../helpers/fonts'

const PaymentMethodButton = ({
    selected,
    data,
    onPress = () => { },
}) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => { onPress(data) }}
            activeOpacity={1}
        >
            <View style={styles.contentContainer}>
                <Text style={styles.titleText} numberOfLines={1}>
                    {data?.title}
                </Text>
                {
                    data?.desc &&
                    <Text style={styles.descText} numberOfLines={2}>
                        {data?.desc}
                    </Text>
                }
            </View>

            <View style={styles.radioButton}>
                {selected && <View style={styles.selectedRadioButton} />}
            </View>
        </TouchableOpacity>
    )
}

export default memo(PaymentMethodButton)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        gap: ResponsiveSizeWp(10),
        paddingVertical: ResponsiveSizeWp(5),
    },
    contentContainer: {
        flex: 1,
        gap: iOS_Device ? ResponsiveSizeWp(3) : 0,
    },
    titleText: {
        width: '100%',
        fontFamily: fontFamily.Medium,
        color: COLOR.BLACK,
        fontSize: ResponsiveSizeWp(15),
    },
    descText: {
        width: '100%',
        fontFamily: fontFamily.Regular,
        color: COLOR.SLAT2,
        fontSize: ResponsiveSizeWp(10),
    },
    radioButton: {
        width: ResponsiveSizeWp(25),
        aspectRatio: 1,
        borderRadius: ResponsiveSizeWp(25),
        borderWidth: ResponsiveSizeWp(1),
        borderColor: COLOR.PRIMARY,
        padding: ResponsiveSizeWp(4),
    },
    selectedRadioButton: {
        width: '100%',
        height: '100%',
        borderRadius: ResponsiveSizeWp(30),
        backgroundColor: COLOR.PRIMARY,
    },
})