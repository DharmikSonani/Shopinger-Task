import { StyleSheet } from 'react-native'
import { COLOR } from '../../helpers/colors'
import { iOS_Device, ResponsiveSizeWp } from '../../helpers/responsive'
import { fontFamily } from '../../helpers/fonts'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.WHITE,
    },
    contentContainer: {
        paddingHorizontal: ResponsiveSizeWp(15),
        paddingBottom: ResponsiveSizeWp(15),
        gap: ResponsiveSizeWp(15),
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: iOS_Device ? -ResponsiveSizeWp(3) : -ResponsiveSizeWp(7),
    },
    titleText: {
        fontFamily: fontFamily.SemiBold,
        fontSize: ResponsiveSizeWp(14),
        color: COLOR.BLACK,
        flex: 1,
    },
    changeButtonText: {
        fontFamily: fontFamily.SemiBold,
        fontSize: ResponsiveSizeWp(13),
        color: COLOR.PRIMARY,
        textDecorationLine: 'underline',
    },
    dateTimeWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '65%',
        gap: ResponsiveSizeWp(10),
    },
    dateTimePill: {
        flex: 1,
        paddingHorizontal: ResponsiveSizeWp(10),
        borderRadius: ResponsiveSizeWp(45),
        borderWidth: ResponsiveSizeWp(1),
        justifyContent: 'center',
        alignItems: 'center',
        height: ResponsiveSizeWp(45),
        borderColor: COLOR.PRIMARY,
        backgroundColor: COLOR.PRIMARYLIGHT,
    },
    dateTimeText: {
        fontFamily: fontFamily.Regular,
        fontSize: ResponsiveSizeWp(14),
        color: COLOR.BLACK,
        top: iOS_Device ? 0 : ResponsiveSizeWp(1.5),
    },
    bookContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: ResponsiveSizeWp(15),
        paddingTop: ResponsiveSizeWp(10),
        backgroundColor: COLOR.WHITE,
        elevation: 10,
        shadowColor: COLOR.SLAT,
        shadowOffset: { height: 2, width: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    priceContainer: {
        flex: 1,
    },
    priceText: {
        fontFamily: fontFamily.SemiBold,
        fontSize: ResponsiveSizeWp(16),
        color: COLOR.PRIMARY,
    },
    totalText: {
        fontFamily: fontFamily.Regular,
        fontSize: ResponsiveSizeWp(13),
        color: COLOR.SLAT,
        marginTop: iOS_Device ? 0 : -ResponsiveSizeWp(4),
    },
    bookButton: {
        width: '55%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: ResponsiveSizeWp(10),
        borderRadius: ResponsiveSizeWp(45),
        height: ResponsiveSizeWp(45),
        borderColor: COLOR.PRIMARY,
        backgroundColor: COLOR.PRIMARY,
        borderWidth: ResponsiveSizeWp(1),
    },
    bookButtonText: {
        fontFamily: fontFamily.SemiBold,
        fontSize: ResponsiveSizeWp(14),
        color: COLOR.WHITE,
        top: iOS_Device ? 0 : ResponsiveSizeWp(1),
    },
})