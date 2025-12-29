import {
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import React from 'react'
import useScreenHooks from './PaymentScreen.Hooks';
import { styles } from './styles';
import ScreenHeader from '../../components/ScreenHeader';
import { CURRENCY_SYMBOL } from '../../helpers/helper';
import { ResponsiveSizeWp } from '../../helpers/responsive';
import { shortDateFormat } from '../../helpers/helper-functions';
import DoctorCard from '../../components/DoctorCard';
import BankOffer from './components/BankOffer';
import PaymentMethods from './components/PaymentMethods';
import VectorIcons from '../../helpers/vector-icons';
import { COLOR } from '../../helpers/colors';

const PaymentScreen = () => {

    const {
        data,
        bottomSpace,

        handleBackPress,
        handleNextPress,
    } = useScreenHooks();

    return (
        <View style={[styles.container]}>
            <ScreenHeader title={`Payment`} />

            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
                bounces={false}
                alwaysBounceVertical={false}
            >
                <DoctorCard data={data} />

                <View style={styles.titleContainer}>
                    <Text style={styles.titleText} numberOfLines={1}>
                        {`Selected Date & Time Slot:`}
                    </Text>

                    <TouchableOpacity onPress={handleBackPress}>
                        <Text style={styles.changeButtonText} numberOfLines={1}>
                            Change
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.dateTimeWrapper}>
                    <View style={styles.dateTimePill}>
                        <Text style={styles.dateTimeText} numberOfLines={1}>
                            {shortDateFormat(data?.date)}
                        </Text>
                    </View>

                    <View style={styles.dateTimePill}>
                        <Text style={styles.dateTimeText} numberOfLines={1}>
                            {data?.time?.time}
                        </Text>
                    </View>
                </View>

                <BankOffer />

                <PaymentMethods />
            </ScrollView>

            <View style={[styles.bookContainer, { paddingBottom: bottomSpace, }]}>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceText} numberOfLines={1}>
                        {CURRENCY_SYMBOL}{data?.charge}
                    </Text>
                    <Text style={styles.totalText} numberOfLines={1}>
                        {`Total Price`}
                    </Text>
                </View>

                <TouchableOpacity
                    style={[styles.bookButton]}
                    onPress={handleNextPress}
                >
                    <Text style={[styles.bookButtonText]} numberOfLines={1}>
                        {`Book Consultation`}
                    </Text>

                    <VectorIcons.FontAwesome6
                        name={`arrow-right-long`}
                        size={ResponsiveSizeWp(18)}
                        color={COLOR.WHITE}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PaymentScreen