import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { CURRENCY_SYMBOL } from '../../../helpers/helper'
import { COLOR } from '../../../helpers/colors'
import { iOS_Device, ResponsiveSizeWp } from '../../../helpers/responsive'
import { fontFamily } from '../../../helpers/fonts'

const DoctorCard = ({
    data,
    selected,
    onPress = () => { },
}) => {
    return (
        <TouchableOpacity
            style={[styles.container, selected && styles.selectedContainer]}
            onPress={() => { onPress(data) }}
        >
            <Image
                style={styles.profileIcon}
                source={data.profile}
                resizeMode='contain'
            />

            <View style={styles.infoContainer}>
                <Text style={styles.nameText}>
                    {data?.name}
                </Text>

                <View style={styles.infoContentContainer}>
                    <Text style={styles.infoText} numberOfLines={1}>
                        ({data?.speciality})
                    </Text>
                    <View style={styles.bulletPointContainer}>
                        <View style={styles.bulletPoint} />
                        <Text style={styles.infoText} numberOfLines={1}>
                            {`Exp: `}
                            <Text style={styles.expText}>
                                {data?.exp}
                            </Text>
                        </Text>
                    </View>
                </View>

                <View style={styles.infoContentContainer}>
                    <Text style={styles.licenceText} numberOfLines={1}>
                        License No: {data?.licenseNo}
                    </Text>
                    <View style={styles.bulletPointContainer}>
                        <View style={styles.bulletPoint} />
                        <Text style={styles.infoText} numberOfLines={1}>
                            {CURRENCY_SYMBOL}{data?.charge}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default DoctorCard

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: COLOR.LIGHTGRAY,
        padding: ResponsiveSizeWp(15),
        borderRadius: ResponsiveSizeWp(15),
        borderWidth: ResponsiveSizeWp(1),
        borderColor: COLOR.GRAY3,
        flexDirection: 'row',
        gap: ResponsiveSizeWp(10),
        paddingBottom: iOS_Device ? ResponsiveSizeWp(15) : ResponsiveSizeWp(10),
    },
    selectedContainer: {
        borderColor: COLOR.PRIMARY,
        backgroundColor: COLOR.PRIMARYLIGHT,
    },
    profileIcon: {
        width: ResponsiveSizeWp(45),
        aspectRatio: 1 / 1,
        borderRadius: ResponsiveSizeWp(45),
    },
    infoContainer: {
        flex: 1,
        gap: ResponsiveSizeWp(6),
    },
    nameText: {
        fontFamily: fontFamily.SemiBold,
        color: COLOR.BLACK,
        fontSize: ResponsiveSizeWp(16),
        marginBottom: iOS_Device ? 0 : -ResponsiveSizeWp(3),
    },
    infoContentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    infoText: {
        fontFamily: fontFamily.Medium,
        color: COLOR.SLAT,
        fontSize: ResponsiveSizeWp(14),
        flex: 1,
        top: iOS_Device ? 0 : ResponsiveSizeWp(1),
    },
    expText: {
        color: COLOR.PRIMARY,
    },
    licenceText: {
        fontFamily: fontFamily.Medium,
        color: COLOR.SLAT,
        fontSize: ResponsiveSizeWp(13),
        flex: 1,
    },
    bulletPointContainer: {
        width: '35%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: ResponsiveSizeWp(10),
    },
    bulletPoint: {
        width: ResponsiveSizeWp(4),
        aspectRatio: 1,
        borderRadius: ResponsiveSizeWp(2),
        backgroundColor: COLOR.SLAT,
    },
})