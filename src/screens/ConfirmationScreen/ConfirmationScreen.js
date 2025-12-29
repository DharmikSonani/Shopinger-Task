import {
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import React from 'react'
import useScreenHooks from './ConfirmationScreen.Hooks';
import { styles } from './styles';
import { BOOK_SUCCESS_ICON, SUCCESS_BACKGROUND } from '../../assets/assets';
import VectorIcons from '../../helpers/vector-icons';
import { COLOR } from '../../helpers/colors';
import { ResponsiveSizeWp } from '../../helpers/responsive';
import { fullDateFormat } from '../../helpers/helper-functions';

const ConfirmationScreen = () => {

    const {
        data,
        topSpace,
        bottomSpace,

        handleBackToHomePress,
    } = useScreenHooks();

    return (
        <View style={[styles.container, { paddingTop: topSpace, paddingBottom: bottomSpace }]}>
            <Image
                style={styles.backBanner}
                source={SUCCESS_BACKGROUND}
                resizeMode='cover'
            />

            <View style={styles.contentContainer}>
                <Image
                    style={styles.iconStyle}
                    source={BOOK_SUCCESS_ICON}
                    resizeMode='contain'
                />

                <Text style={styles.successText}>
                    {`Your appointment with ${data?.name} is booked for `}
                    <Text style={styles.successHighlightText}>
                        {fullDateFormat(data?.date)} at {data?.time?.time}
                    </Text>
                    {`.`}
                </Text>

                <Text style={styles.thanksText}>
                    {`Thank you for choosing Shopinger HealthCare Assistance.`}
                </Text>

                <Text style={styles.infoText}>
                    {`Your consultation request has been registered. Our medical coordination team will contact you shortly on your registered mobile number.`}
                </Text>
            </View>

            <TouchableOpacity
                style={[styles.button]}
                onPress={handleBackToHomePress}
            >
                <Text style={[styles.buttonText]} numberOfLines={1}>
                    {`Back to Home`}
                </Text>

                <VectorIcons.FontAwesome6
                    name={`arrow-right-long`}
                    size={ResponsiveSizeWp(18)}
                    color={COLOR.PRIMARY}
                />
            </TouchableOpacity>
        </View>
    )
}

export default ConfirmationScreen