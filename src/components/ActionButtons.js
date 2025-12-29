import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import useKeyboardStatus from '../hooks/ui/useKeyboardStatus'
import { iOS_Device, ResponsiveSizeWp, useBottomSafeArea } from '../helpers/responsive';
import { fontFamily } from '../helpers/fonts';
import { COLOR } from '../helpers/colors';
import VectorIcons from '../helpers/vector-icons';

const ActionButtons = ({
    nextButtonText = `Next`,
    nextVisible,

    backButtonText = `Back`,
    backVisible,

    onBackPress = () => { },
    onNextPress = () => { },
}) => {

    const { keyboardVisible } = useKeyboardStatus();
    const bottomSpace = useBottomSafeArea();

    return (
        <View style={[styles.container, { paddingBottom: bottomSpace }, keyboardVisible === true && { display: 'none', }]}>
            {
                backVisible &&
                <TouchableOpacity
                    style={styles.button}
                    onPress={onBackPress}
                >
                    <Text style={styles.buttonText} numberOfLines={1}>
                        {backButtonText}
                    </Text>
                </TouchableOpacity>
            }
            {
                nextVisible &&
                <TouchableOpacity
                    style={[styles.button, styles.nextButton]}
                    onPress={onNextPress}
                >
                    <Text style={[styles.buttonText, styles.nextButtonText]} numberOfLines={1}>
                        {nextButtonText}
                    </Text>

                    <VectorIcons.FontAwesome6
                        name={`arrow-right-long`}
                        size={ResponsiveSizeWp(18)}
                        color={COLOR.WHITE}
                    />
                </TouchableOpacity>
            }
        </View>
    )
}

export default memo(ActionButtons)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: ResponsiveSizeWp(10),
        width: '100%',
        paddingHorizontal: ResponsiveSizeWp(15),
        paddingTop: ResponsiveSizeWp(10),
    },
    button: {
        flex: 1,
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
        color: COLOR.SLAT,
        top: iOS_Device ? 0 : ResponsiveSizeWp(1),
    },
    nextButton: {
        backgroundColor: COLOR.PRIMARY,
    },
    nextButtonText: {
        color: COLOR.WHITE,
    },
})