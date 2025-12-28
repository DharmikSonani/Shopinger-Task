import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { iOS_Device, ResponsiveSizeWp } from '../../../helpers/responsive'
import { COLOR } from '../../../helpers/colors'
import { BANK_BACKGROUND_MASK } from '../../../assets/assets'
import { fontFamily } from '../../../helpers/fonts'

const BankOfferCard = ({
    data,
}) => {
    return (
        <ImageBackground
            style={styles.container}
            source={BANK_BACKGROUND_MASK}
        >
            <Image
                source={data?.icon}
                style={styles.bankIcon}
                resizeMode='contain'
            />
            <Text style={styles.descText}>
                {data?.desc}
            </Text>

            <View style={styles.couponContainer}>
                <Text style={styles.couponText}>
                    {data?.code}
                </Text>
            </View>
        </ImageBackground>
    )
}

export default memo(BankOfferCard)

const styles = StyleSheet.create({
    container: {
        marginHorizontal: ResponsiveSizeWp(15),
        backgroundColor: COLOR.PRIMARYLIGHT,
        resizeMode: 'stretch',
        borderWidth: ResponsiveSizeWp(1),
        borderColor: COLOR.PRIMARY,
        borderRadius: ResponsiveSizeWp(10),
        padding: ResponsiveSizeWp(10),
        flexDirection: 'row',
        alignItems: 'center',
        gap: ResponsiveSizeWp(10),
    },
    bankIcon: {
        width: ResponsiveSizeWp(50),
        aspectRatio: 1.9,
    },
    descText: {
        flex: 1,
        fontFamily: fontFamily.SemiBold,
        fontSize: ResponsiveSizeWp(12),
        color: COLOR.BLACK,
        top: iOS_Device ? 0 : ResponsiveSizeWp(2),
    },
    couponContainer: {
        backgroundColor: COLOR.PRIMARY,
        borderWidth: ResponsiveSizeWp(1),
        paddingHorizontal: ResponsiveSizeWp(8),
        paddingVertical: ResponsiveSizeWp(3),
        borderRadius: ResponsiveSizeWp(7),
        borderColor: COLOR.WHITE,
    },
    couponText: {
        fontFamily: fontFamily.SemiBold,
        fontSize: ResponsiveSizeWp(11),
        color: COLOR.WHITE,
        textAlign: 'center',
    },
})