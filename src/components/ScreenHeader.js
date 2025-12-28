import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo, useCallback } from 'react'
import { ResponsiveSizeWp, useTopPadding } from '../helpers/responsive';
import { useNavigation } from '@react-navigation/native';
import VectorIcons from '../helpers/vector-icons';
import { COLOR } from '../helpers/colors';
import { fontFamily } from '../helpers/fonts';

const ScreenHeader = ({
    title
}) => {
    const topSpace = useTopPadding();
    const navigation = useNavigation();

    const handleBackPress = useCallback(() => {
        if (navigation?.canGoBack()) navigation?.goBack();
    }, [])

    return (
        <View style={[styles.container, { paddingTop: topSpace }]}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={handleBackPress}
            >
                <VectorIcons.Entypo
                    name={`chevron-thin-left`}
                    size={ResponsiveSizeWp(20)}
                    color={COLOR.SLAT}
                />
            </TouchableOpacity>

            {
                title &&
                <>
                    <Text style={styles.screenTitle} numberOfLines={1}>
                        {title}
                    </Text>
                    <VectorIcons.Entypo
                        name={`chevron-thin-left`}
                        size={ResponsiveSizeWp(20)}
                        color={COLOR.WHITE}
                    />
                </>
            }
        </View>
    )
}

export default memo(ScreenHeader)

const styles = StyleSheet.create({
    container: {
        paddingLeft: ResponsiveSizeWp(15),
        paddingRight: ResponsiveSizeWp(15),
        gap: ResponsiveSizeWp(10),
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: ResponsiveSizeWp(15),
    },
    screenTitle: {
        flex: 1,
        fontFamily: fontFamily.SemiBold,
        fontSize: ResponsiveSizeWp(16),
        color: COLOR.BLACK,
        textAlign: 'center',
    },
})