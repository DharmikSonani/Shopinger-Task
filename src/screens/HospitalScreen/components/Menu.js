import { Animated, StyleSheet, View } from 'react-native'
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { HOME_MENU_TABS } from '../../../helpers/helper'
import { ResponsiveSizeWp, screenWidth } from '../../../helpers/responsive';
import { COLOR } from '../../../helpers/colors';
import MenuItemButton from './MenuItemButton';

const MENU_ITEM_WIDTH = (screenWidth - ResponsiveSizeWp(15 * 2)) / 5;

const Menu = ({
    initialSelected = HOME_MENU_TABS[0].id,
    onManuChange = () => { },
}) => {
    const slider = useRef(new Animated.Value(0)).current;
    const scaleAnimation = useRef(new Animated.Value(0)).current;

    const [selected, setSelected] = useState(initialSelected);

    useEffect(() => {
        onManuChange(selected);
        indicatorMoveToSelected(selected);
    }, [selected])

    const handleMenuItemPress = useCallback(setSelected, [])

    const indicatorMoveToSelected = useCallback((selected) => {
        const index = HOME_MENU_TABS?.findIndex((tab) => tab.id === selected);
        if (index > -1) {
            Animated.timing(slider, {
                toValue: index * MENU_ITEM_WIDTH,
                useNativeDriver: true,
                duration: 200,
            }).start(() => {
                Animated.spring(scaleAnimation, {
                    toValue: 0,
                    useNativeDriver: true,
                }).start()
            });
            Animated.spring(scaleAnimation, {
                toValue: 1,
                useNativeDriver: true,
            }).start()
        }
    }, [HOME_MENU_TABS])

    return (
        <View style={styles.container}>
            {
                HOME_MENU_TABS?.map((tab, index) =>
                    <MenuItemButton
                        key={index}
                        data={tab}
                        onPress={handleMenuItemPress}
                        selected={selected === tab?.id}
                    />
                )
            }

            <Animated.View style={[styles.indicatorContainer, {
                transform: [{
                    translateX: slider.interpolate({
                        inputRange: [0, MENU_ITEM_WIDTH * 5],
                        outputRange: [0, MENU_ITEM_WIDTH * 5]
                    })
                }]
            }]}>
                <Animated.View style={[styles.indicator, {
                    transform: [{
                        scaleX: scaleAnimation.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 1.5]
                        })
                    }]
                }]} />
            </Animated.View>
        </View>
    )
}

export default memo(Menu)

const styles = StyleSheet.create({
    container: {
        marginHorizontal: ResponsiveSizeWp(15),
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: ResponsiveSizeWp(1),
        borderColor: COLOR.GRAY2,
    },
    indicatorContainer: {
        width: MENU_ITEM_WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 100,
        bottom: -ResponsiveSizeWp(1),
    },
    indicator: {
        width: ResponsiveSizeWp(40),
        height: ResponsiveSizeWp(3),
        backgroundColor: COLOR.PRIMARY,
    },
})