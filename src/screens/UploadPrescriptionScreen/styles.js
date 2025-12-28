import { StyleSheet } from 'react-native'
import { COLOR } from '../../helpers/colors'
import { ResponsiveSizeWp } from '../../helpers/responsive'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.WHITE,
    },
    contentContainer: {
        paddingHorizontal: ResponsiveSizeWp(15),
        gap: ResponsiveSizeWp(15),
    },
    topButtonContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: ResponsiveSizeWp(10),
    },
})