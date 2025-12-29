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
    titleText: {
        fontFamily: fontFamily.SemiBold,
        fontSize: ResponsiveSizeWp(16),
        color: COLOR.BLACK,
    },
    subTitleText: {
        fontFamily: fontFamily.Medium,
        fontSize: ResponsiveSizeWp(14),
        color: COLOR.BLACK,
    },
    listContentContainer: {
        gap: ResponsiveSizeWp(10),
    },
    viewMoreButton: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        gap: ResponsiveSizeWp(7),
    },
    viewMoreText: {
        fontFamily: fontFamily.Medium,
        fontSize: ResponsiveSizeWp(12),
        color: COLOR.PRIMARY,
        top: iOS_Device ? 0 : ResponsiveSizeWp(0.7),
    },
})