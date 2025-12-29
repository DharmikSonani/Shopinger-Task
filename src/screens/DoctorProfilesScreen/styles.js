import { StyleSheet } from 'react-native'
import { COLOR } from '../../helpers/colors'
import { ResponsiveSizeWp } from '../../helpers/responsive'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.WHITE,
    },
    paddingHorizontal: {
        paddingHorizontal: ResponsiveSizeWp(15),
        gap: ResponsiveSizeWp(15),
    },
    listContainer: {
        flex: 1,
        marginTop: ResponsiveSizeWp(15),
    },
    listContentContainer: {
        paddingTop: ResponsiveSizeWp(5),
        paddingHorizontal: ResponsiveSizeWp(15),
        paddingBottom: ResponsiveSizeWp(15),
        gap: ResponsiveSizeWp(10),
    },
})