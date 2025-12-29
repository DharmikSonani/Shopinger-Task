import { StyleSheet } from 'react-native'
import { COLOR } from '../../helpers/colors'
import { ResponsiveSizeWp } from '../../helpers/responsive'
import { fontFamily } from '../../helpers/fonts'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.WHITE,
    },
    paddingHorizontal: {
        paddingHorizontal: ResponsiveSizeWp(15),
        gap: ResponsiveSizeWp(15),
    },
    topCategoryContainer: {
        flexDirection: 'row',
        gap: ResponsiveSizeWp(10),
    },
    titleText: {
        fontFamily: fontFamily.SemiBold,
        fontSize: ResponsiveSizeWp(16),
        color: COLOR.BLACK,
    },
    listContainer: {
        flex: 1,
        marginTop: ResponsiveSizeWp(10),
    },
    listContentContainer: {
        paddingHorizontal: ResponsiveSizeWp(15),
        paddingBottom: ResponsiveSizeWp(15),
    },
})