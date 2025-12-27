import { KeyboardAvoidingView, Modal, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import { COLOR } from '../../helpers/colors'
import { ResponsiveSizeWp, useTopPadding, } from '../../helpers/responsive'
import useKeyboardStatus from '../../hooks/ui/useKeyboardStatus'

const BottomSheet = ({
    visible = false,
    onDismiss = () => { },
    children,
    bottomSheetWrapperStyle,
    fullView,
}) => {

    const topSpace = useTopPadding();
    const { keyboardVisible } = useKeyboardStatus();

    return (
        <>
            <Modal
                visible={visible}
                transparent={true}
                animationType='slide'
                onRequestClose={onDismiss}
                onDismiss={onDismiss}
                statusBarTranslucent={true}
            >
                <View style={styles.Wrapper}>
                    <TouchableOpacity
                        style={styles.DismissWrapper}
                        onPress={onDismiss}
                        activeOpacity={1}
                    />
                    <KeyboardAvoidingView
                        style={[styles.BottomSheetWrapper, bottomSheetWrapperStyle && bottomSheetWrapperStyle, fullView && { height: '70%', }, keyboardVisible && { height: '100%', maxHeight: '100%', paddingTop: topSpace }]}
                        behavior='padding'
                    >
                        <View style={styles.Indicator} />
                        {children}
                    </KeyboardAvoidingView>
                </View>
            </Modal>
        </>
    )
}

export default memo(BottomSheet)

const styles = StyleSheet.create({
    Wrapper: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        zIndex: -100,
    },
    DismissWrapper: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        zIndex: -10,
    },
    BottomSheetWrapper: {
        backgroundColor: COLOR.GREY_3,
        maxHeight: '70%',
        width: '100%',
        borderTopLeftRadius: ResponsiveSizeWp(25),
        borderTopRightRadius: ResponsiveSizeWp(25),
        overflow: 'hidden',
        paddingTop: ResponsiveSizeWp(25),
        gap: ResponsiveSizeWp(20),
    },
    Indicator: {
        width: ResponsiveSizeWp(50),
        height: ResponsiveSizeWp(5),
        backgroundColor: COLOR.WHITE_40,
        alignSelf: 'center',
        borderRadius: ResponsiveSizeWp(5),
    }
})