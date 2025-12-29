import { StyleSheet } from 'react-native'
import { COLOR } from '../../helpers/colors'
import { iOS_Device, ResponsiveSizeWp } from '../../helpers/responsive'
import { fontFamily } from '../../helpers/fonts'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.WHITE,
    },
    backBanner: {
        width: '100%',
        height: '25%',
        position: 'absolute',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        gap: iOS_Device ? ResponsiveSizeWp(15) : ResponsiveSizeWp(12),
        paddingHorizontal: ResponsiveSizeWp(20),
        paddingTop: ResponsiveSizeWp(50),
    },
    iconStyle: {
        height: ResponsiveSizeWp(80),
        aspectRatio: 1,
    },
    successText: {
        textAlign: 'center',
        marginTop: ResponsiveSizeWp(10),
        color: COLOR.PRIMARY,
        fontFamily: fontFamily.Medium,
        fontSize: ResponsiveSizeWp(16),
    },
    successHighlightText: {
        textDecorationColor: COLOR.PRIMARY,
        textDecorationLine: 'underline',
    },
    thanksText: {
        textAlign: 'center',
        color: COLOR.SLAT,
        fontFamily: fontFamily.Medium,
        fontSize: ResponsiveSizeWp(14),
        marginTop: ResponsiveSizeWp(10),
        paddingHorizontal: ResponsiveSizeWp(20),
    },
    infoText: {
        textAlign: 'center',
        color: COLOR.SLAT,
        fontFamily: fontFamily.Regular,
        fontSize: ResponsiveSizeWp(14),
        paddingHorizontal: ResponsiveSizeWp(10),
    },
    button: {
        marginHorizontal: ResponsiveSizeWp(15),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: ResponsiveSizeWp(10),
        borderRadius: ResponsiveSizeWp(45),
        height: ResponsiveSizeWp(45),
        borderColor: COLOR.PRIMARY,
        backgroundColor: COLOR.LIGHTGRAY,
        borderWidth: ResponsiveSizeWp(1),
    },
    buttonText: {
        fontFamily: fontFamily.SemiBold,
        fontSize: ResponsiveSizeWp(14),
        color: COLOR.PRIMARY,
        top: iOS_Device ? 0 : ResponsiveSizeWp(1),
    },
})