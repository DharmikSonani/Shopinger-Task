import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo, useCallback } from 'react'
import { iOS_Device, ResponsiveSizeWp } from '../../../helpers/responsive'
import { COLOR } from '../../../helpers/colors'
import { UPLOAD_PRESCRIPTION_PLACEHOLDER, UPLOAD_PRESCRIPTION_TOP } from '../../../assets/assets'
import { fontFamily } from '../../../helpers/fonts'
import { useNavigation } from '@react-navigation/native'
import { Screens } from '../../../navigation/helper'

const UploadPrescriptionCard = () => {

    const navigation = useNavigation();

    const handleShopNowPress = useCallback(() => {
        navigation.navigate(Screens.UploadPrescriptionScreen);
    }, [])

    return (
        <View style={styles.container}>
            <Image
                source={UPLOAD_PRESCRIPTION_TOP}
                style={styles.topBannerImage}
                resizeMode='stretch'
            />
            <Text style={styles.titleText}>
                {`Upload Prescription`}
            </Text>

            <View style={styles.contentContainer}>
                <View style={styles.leftContentContainer}>
                    <Text style={styles.todayText} numberOfLines={1}>
                        {`today & get`}
                    </Text>

                    <Text style={styles.descText}>
                        {`medicines delivered at your doorstep.`}
                    </Text>

                    <TouchableOpacity
                        style={styles.shopNowButton}
                        onPress={handleShopNowPress}
                    >
                        <Text style={styles.shopNowButtonText}>
                            {`Shop Now`}
                        </Text>
                    </TouchableOpacity>
                </View>
                <Image
                    style={styles.rightContentImage}
                    source={UPLOAD_PRESCRIPTION_PLACEHOLDER}
                    resizeMode='contain'
                />
            </View>
        </View>
    )
}

export default memo(UploadPrescriptionCard)

const styles = StyleSheet.create({
    container: {
        marginHorizontal: ResponsiveSizeWp(15),
        backgroundColor: COLOR.PRIMARYLIGHT3,
        borderWidth: ResponsiveSizeWp(1),
        borderColor: COLOR.PRIMARY,
        borderRadius: ResponsiveSizeWp(13),
        minHeight: ResponsiveSizeWp(50),
        elevation: 2,
        shadowColor: COLOR.BLACK,
        shadowOffset: { height: 2, width: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    topBannerImage: {
        width: '100%',
        height: ResponsiveSizeWp(40),
        borderTopLeftRadius: ResponsiveSizeWp(12),
        borderTopRightRadius: ResponsiveSizeWp(12),
        position: 'absolute',
    },
    titleText: {
        fontFamily: fontFamily.SemiBold,
        fontSize: ResponsiveSizeWp(20),
        color: COLOR.BLACK,
        paddingHorizontal: ResponsiveSizeWp(20),
        marginTop: ResponsiveSizeWp(10),
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        width: '100%',
        marginTop: iOS_Device ? ResponsiveSizeWp(3) : 0,
    },
    leftContentContainer: {
        flex: 1,
        paddingHorizontal: ResponsiveSizeWp(20),
        gap: iOS_Device ? ResponsiveSizeWp(5) : 0,
        paddingBottom: ResponsiveSizeWp(15),
    },
    rightContentImage: {
        width: '40%',
        aspectRatio: 1.4,
        bottom: -ResponsiveSizeWp(1),
        marginRight: ResponsiveSizeWp(7),
    },
    todayText: {
        fontFamily: fontFamily.Medium,
        fontSize: ResponsiveSizeWp(15),
        color: COLOR.PRIMARY,
    },
    descText: {
        fontFamily: fontFamily.Medium,
        fontSize: ResponsiveSizeWp(15),
        color: COLOR.SLAT,
    },
    shopNowButton: {
        paddingVertical: ResponsiveSizeWp(7),
        paddingHorizontal: ResponsiveSizeWp(20),
        backgroundColor: COLOR.PRIMARY,
        borderRadius: ResponsiveSizeWp(40),
        alignSelf: 'flex-start',
        marginTop: ResponsiveSizeWp(7),
    },
    shopNowButtonText: {
        fontFamily: fontFamily.Medium,
        fontSize: ResponsiveSizeWp(12),
        color: COLOR.WHITE,
        textTransform: 'uppercase',
        top: iOS_Device ? 0 : ResponsiveSizeWp(1),
    },
})