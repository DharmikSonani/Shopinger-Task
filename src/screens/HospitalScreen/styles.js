import { StyleSheet } from 'react-native'
import { COLOR } from '../../helpers/colors'
import { fontFamily } from '../../helpers/fonts'
import { ResponsiveSizeWp } from '../../helpers/responsive'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.WHITE,
        justifyContent: 'center',
        alignItems: 'center',
        gap: ResponsiveSizeWp(5),
    },
    nameText: {
        fontFamily: fontFamily.Medium,
        color: COLOR.SLAT,
        fontSize: ResponsiveSizeWp(15),
        textAlign: 'center',
    },
    iconStyle: {
        height: ResponsiveSizeWp(50),
        aspectRatio: 0.85,
        tintColor: COLOR.SLAT,
        resizeMode: 'contain',
    }
})