import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import { iOS_Device, ResponsiveSizeWp } from '../../../helpers/responsive'
import { LOCATION_ICON } from '../../../assets/assets';
import VectorIcons from '../../../helpers/vector-icons';
import { COLOR } from '../../../helpers/colors';
import { fontFamily } from '../../../helpers/fonts';

const Location = () => {

    const location = {
        pincode: 110095,
        address: '',
    };

    return (
        <View style={styles.wrapper}>
            <TouchableOpacity
                style={styles.container}
            >
                <Image
                    source={LOCATION_ICON}
                    style={styles.locationPin}
                    resizeMode='contain'
                />

                <Text style={styles.locationText} numberOfLines={1}>
                    {
                        location?.pincode &&
                        <Text style={styles.pincodeText}>
                            {`${location?.pincode} `}
                        </Text>
                    }
                    {location?.address || `Select your location`}
                </Text>

                <VectorIcons.Entypo
                    name={`chevron-thin-right`}
                    size={ResponsiveSizeWp(15)}
                    color={COLOR.BLACK_90}
                />
            </TouchableOpacity>
        </View>
    )
}

export default memo(Location)

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    locationPin: {
        width: ResponsiveSizeWp(17),
        height: ResponsiveSizeWp(19),
        tintColor: COLOR.WHITE,
        bottom: iOS_Device ? 0 : ResponsiveSizeWp(2),
    },
    locationText: {
        maxWidth: '90%',
        color: COLOR.BLACK_90,
        fontFamily: fontFamily.Regular,
        marginLeft: ResponsiveSizeWp(5),
        marginRight: ResponsiveSizeWp(2),
        fontSize: ResponsiveSizeWp(14),
    },
    pincodeText: {
        fontFamily: fontFamily.Bold,
    },
})