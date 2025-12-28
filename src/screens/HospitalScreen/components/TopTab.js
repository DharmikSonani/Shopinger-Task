import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo, useCallback, useEffect, useState } from 'react'
import { iOS_Device, ResponsiveSizeWp } from '../../../helpers/responsive'
import TopTabButton from './TopTabButton'
import { HOME_TOP_TABS } from '../../../helpers/helper'
import { UPLOAD_ICON } from '../../../assets/assets'
import { COLOR, GRADIENTCOLOR } from '../../../helpers/colors'
import { fontFamily } from '../../../helpers/fonts'
import LinearGradient from 'react-native-linear-gradient'

const TopTab = ({
    initialSelected = HOME_TOP_TABS[1]?.id,
    onTabChange = () => { },
}) => {
    const [selected, setSelected] = useState(initialSelected);

    useEffect(() => {
        onTabChange(selected);
    }, [selected])

    const handleTabChange = useCallback(setSelected, []);
    const handleUploadPress = useCallback(() => { }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.uploadButtonWrapper}
                onPress={handleUploadPress}
            >
                <LinearGradient
                    style={styles.uploadButtonContainer}
                    colors={GRADIENTCOLOR.UPLOADBORDER}
                    useAngle
                    angle={90}
                >
                    <View style={styles.uploadButton}>
                        <Image
                            style={[styles.uploadButtonIconStyle]}
                            source={UPLOAD_ICON}
                            resizeMode='contain'
                        />
                        <Text style={styles.uploadButtonTextStyle} numberOfLines={1}>
                            {`Upload`}
                        </Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
            {
                HOME_TOP_TABS.map((tab, index) =>
                    <TopTabButton
                        key={index}
                        data={tab}
                        onPress={handleTabChange}
                        selected={tab?.id === selected}
                    />
                )
            }
        </View>
    )
}

export default memo(TopTab)

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        height: ResponsiveSizeWp(35),
        paddingHorizontal: ResponsiveSizeWp(15),
        gap: ResponsiveSizeWp(7),
    },
    uploadButtonWrapper: {
        flex: 1,
        height: '100%',
        borderRadius: ResponsiveSizeWp(40),
    },
    uploadButtonContainer: {
        height: '100%',
        width: '100%',
        borderRadius: ResponsiveSizeWp(40),
    },
    uploadButton: {
        flex: 1,
        borderRadius: ResponsiveSizeWp(40),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: ResponsiveSizeWp(5),
        margin: ResponsiveSizeWp(1),
        backgroundColor: COLOR.WHITE,
    },
    uploadButtonIconStyle: {
        height: ResponsiveSizeWp(18),
        width: ResponsiveSizeWp(18),
    },
    uploadButtonTextStyle: {
        fontFamily: fontFamily.Regular,
        color: COLOR.SLAT2,
        fontSize: ResponsiveSizeWp(12),
        top: iOS_Device ? 0 : ResponsiveSizeWp(1),
    },
})