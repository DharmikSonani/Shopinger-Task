import { View, StyleSheet, } from 'react-native'
import { memo } from 'react'
import TabButton from './TabButton';
import { COLOR } from '../../helpers/colors';
import { ResponsiveSizeWp } from '../../helpers/responsive';

export const BottomTabBar = memo((props) => {
    return (
        <View style={styles.wrapper}>
            <View style={[styles.TabBarContainer]}>
                {/* Tab Bar Buttons */}
                {
                    props?.state?.routes?.map((route, i) => {

                        const { options } = props.descriptors[route.key];
                        const focused = props.state.index === i;

                        const onPress = () => {
                            const event = props.navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true,
                            });
                            if (!focused && !event.defaultPrevented) {
                                props.navigation.navigate(route.name);
                            }
                        };

                        return (
                            <TabButton
                                key={i}
                                data={options?.params}
                                focused={focused}
                                onPress={onPress}
                            />
                        )
                    })
                }
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        backgroundColor: COLOR.WHITE,
    },
    TabBarContainer: {
        width: '100%',
        backgroundColor: COLOR.WHITE,
        flexDirection: 'row',
        borderTopWidth: ResponsiveSizeWp(1),
        borderColor: COLOR.LIGHTGRAY,
        shadowColor: COLOR.GRAY,
        shadowOffset: { height: 2, width: 0 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
    },
})