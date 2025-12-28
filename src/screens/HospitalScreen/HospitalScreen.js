import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import React from 'react'
import useScreenHooks from './HospitalScreen.Hooks';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { GRADIENTCOLOR } from '../../helpers/colors';
import Location from './components/Location';
import { BELL_ICON, PERSON_ICON, PRODUCT_01, PRODUCT_03, WARNING_ICON } from '../../assets/assets';
import SearchBar from '../../components/SearchBar';
import TopTab from './components/TopTab';
import AdsCarousel from './components/AdsCarousel';
import ProductSection from './components/ProductSection';
import RecommadationCard from './components/RecommadationCard';
import BankOfferCard from './components/BankOfferCard';
import UploadPrescriptionCard from './components/UploadPrescriptionCard';
import Menu from './components/Menu';

const HospitalScreen = () => {

    const {
        topSpace,
        data,
    } = useScreenHooks();

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={GRADIENTCOLOR.PRIMARY}
                style={styles.headerWrapper}
                useAngle
                angle={0}
            >
                <View style={[styles.headerContainer, { paddingTop: topSpace }]}>
                    <View style={styles.headerTopContainer}>
                        <Location />

                        <TouchableOpacity
                            style={styles.headerTopRightButton}
                        >
                            <Image
                                style={styles.headerTopRightButtonIcon}
                                source={BELL_ICON}
                                resizeMode='contain'
                            />

                            {
                                typeof data?.notificationCount === 'number' && data?.notificationCount > 0 &&
                                <View style={styles.notificationCountContainer}>
                                    <Text style={styles.notificationCountText}>
                                        {data?.notificationCount}
                                    </Text>
                                </View>
                            }
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.headerTopRightButton}
                        >
                            <Image
                                style={[styles.headerTopRightButtonIcon, { transform: [{ scale: 1.1 }] }]}
                                source={PERSON_ICON}
                                resizeMode='contain'
                            />

                            {
                                typeof data?.profileCompleted === 'number' && data?.profileCompleted < 100 &&
                                <Image
                                    style={styles.warningIcon}
                                    source={WARNING_ICON}
                                    resizeMode='contain'
                                />
                            }
                        </TouchableOpacity>
                    </View>

                    <SearchBar
                        showCallButton
                        showMicButton
                        showScanButton
                        placeholder={`Search anything on shopinger`}
                    />
                </View>
            </LinearGradient>

            <ScrollView
                style={styles.dataContainer}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                <TopTab />

                <AdsCarousel data={data?.ads} />

                <Menu />

                <ProductSection data={data?.pharmacyEssentials} />

                <BankOfferCard data={data?.offerAd} />

                <ProductSection data={data?.medicalHaircare} />

                <UploadPrescriptionCard />

                <ProductSection data={data?.pharmacyEssentials} />

                <RecommadationCard data={data?.recommandation} />

                <ProductSection data={data?.medicalHaircare} />
            </ScrollView>
        </View>
    )
}

export default HospitalScreen