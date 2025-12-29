import { Image, StyleSheet, Text, View } from 'react-native'
import React, { memo, useCallback, useEffect, useState } from 'react'
import { PAYMENT_METHODS } from '../../../helpers/helper'
import { RUPEE_ICON } from '../../../assets/assets';
import { iOS_Device, ResponsiveSizeWp } from '../../../helpers/responsive';
import { fontFamily } from '../../../helpers/fonts';
import { COLOR } from '../../../helpers/colors';
import PaymentMethodButton from './PaymentMethodButton';

const PaymentMethods = ({
    onChange = () => { },
}) => {

    const [selected, setSelected] = useState(PAYMENT_METHODS[0]);

    useEffect(() => { onChange(selected) }, [selected])

    const handlePaymentMethodChange = useCallback(setSelected, []);

    return (
        <View style={styles.wrapper}>
            <View style={styles.titleContainer}>
                <Image
                    source={RUPEE_ICON}
                    style={styles.rupeeIcon}
                    resizeMode='contain'
                />
                <Text style={styles.titleText} numberOfLines={1}>
                    {`Select Payment Method`}
                </Text>
            </View>

            <View style={styles.container}>
                {
                    PAYMENT_METHODS?.map((method, index) =>
                        <PaymentMethodButton
                            key={index}
                            data={method}
                            selected={selected?.id === method?.id}
                            onPress={handlePaymentMethodChange}
                        />
                    )
                }
            </View>

            <Text style={styles.secureText} numberOfLines={1}>
                {`100% Secure Payment!`}
            </Text>
        </View>
    )
}

export default memo(PaymentMethods)

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
    },
    titleContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: ResponsiveSizeWp(6),
    },
    rupeeIcon: {
        width: ResponsiveSizeWp(20),
        aspectRatio: 1,
    },
    titleText: {
        fontFamily: fontFamily.SemiBold,
        fontSize: ResponsiveSizeWp(14),
        color: COLOR.BLACK,
        top: iOS_Device ? 0 : ResponsiveSizeWp(1),
    },
    container: {
        backgroundColor: COLOR.WHITE,
        borderWidth: ResponsiveSizeWp(1),
        borderColor: COLOR.PRIMARY,
        padding: ResponsiveSizeWp(13),
        borderRadius: ResponsiveSizeWp(15),
        gap: ResponsiveSizeWp(5),
        marginTop: ResponsiveSizeWp(10),
        marginBottom: ResponsiveSizeWp(6),
    },
    secureText: {
        fontFamily: fontFamily.Medium,
        fontSize: ResponsiveSizeWp(12),
        color: COLOR.BLACK,
    },
})