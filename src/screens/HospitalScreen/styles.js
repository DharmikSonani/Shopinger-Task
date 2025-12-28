import { StyleSheet } from 'react-native'
import { COLOR } from '../../helpers/colors'
import { iOS_Device, ResponsiveSizeWp } from '../../helpers/responsive'
import { fontFamily } from '../../helpers/fonts'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.WHITE,
    },
    headerWrapper: {
        backgroundColor: COLOR.WHITE,
        borderBottomLeftRadius: ResponsiveSizeWp(25),
        borderBottomRightRadius: ResponsiveSizeWp(25),
        width: '100%',
        zIndex: 2,
    },
    headerContainer: {
        paddingHorizontal: ResponsiveSizeWp(15),
        paddingBottom: ResponsiveSizeWp(15),
        gap: ResponsiveSizeWp(15),
    },
    headerTopContainer: {
        flexDirection: 'row',
        gap: ResponsiveSizeWp(30),
        width: '100%',
        alignItems: 'center',
    },
    headerTopRightButton: {
        height: ResponsiveSizeWp(24),
        aspectRatio: 1,
    },
    headerTopRightButtonIcon: {
        height: '100%',
        width: '100%',
        tintColor: COLOR.BLACK,
    },
    warningIcon: {
        position: 'absolute',
        zIndex: 10,
        width: ResponsiveSizeWp(18),
        height: ResponsiveSizeWp(16),
        left: -ResponsiveSizeWp(9),
        bottom: -ResponsiveSizeWp(3),
    },
    notificationCountContainer: {
        position: 'absolute',
        zIndex: 10,
        backgroundColor: COLOR.DARKRED,
        height: ResponsiveSizeWp(15),
        aspectRatio: 1,
        right: -ResponsiveSizeWp(3.5),
        top: -ResponsiveSizeWp(3.5),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: ResponsiveSizeWp(8),
        borderWidth: ResponsiveSizeWp(1),
        borderColor: COLOR.WHITE,
    },
    notificationCountText: {
        color: COLOR.WHITE,
        fontFamily: fontFamily.SemiBold,
        fontSize: ResponsiveSizeWp(9),
        bottom: iOS_Device ? 0 : ResponsiveSizeWp(0.5),
    },
    dataContainer: {
        marginTop: -ResponsiveSizeWp(20),
    },
    contentContainer: {
        paddingTop: ResponsiveSizeWp(35),
        paddingBottom: ResponsiveSizeWp(15),
        gap: ResponsiveSizeWp(15),
    },
})