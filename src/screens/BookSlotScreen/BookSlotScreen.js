import {
    Animated,
    FlatList,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import React from 'react'
import useScreenHooks from './BookSlotScreen.Hooks';
import { styles } from './styles';
import ScreenHeader from '../../components/ScreenHeader';
import ActionButtons from '../../components/ActionButtons';
import DoctorCard from './components/DoctorCard';
import { CURRENCY_SYMBOL } from '../../helpers/helper';
import { ResponsiveSizeWp } from '../../helpers/responsive';
import VectorIcons from '../../helpers/vector-icons';
import { COLOR } from '../../helpers/colors';

const BookSlotScreen = () => {

    const {
        data,
        slotData,
        showAllTime,
        rotation,

        handleBackPress,
        handleNextPress,
        renderTimeSlots,
        renderDateSlots,
        toggleAllTimeVisible,
    } = useScreenHooks();

    return (
        <View style={[styles.container]}>
            <ScreenHeader title={`Book Slot`} />

            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
                bounces={false}
                alwaysBounceVertical={false}
            >
                <DoctorCard data={data} />

                <Text style={styles.titleText} numberOfLines={1}>
                    {`Select Date & Time Slot to Book:`}
                </Text>

                <Text style={styles.subTitleText} numberOfLines={1}>
                    {`Available Dates:`}
                </Text>

                <FlatList
                    data={slotData.availableDates}
                    renderItem={renderDateSlots}
                    keyExtractor={(_, index) => `${index}`}
                    scrollEnabled={false}
                    numColumns={3}
                    style={{ marginHorizontal: -ResponsiveSizeWp(5), }}
                    contentContainerStyle={styles.listContentContainer}
                />

                <Text style={styles.subTitleText} numberOfLines={1}>
                    {`Available Time:`}
                </Text>

                <FlatList
                    data={showAllTime ? slotData?.availableTimes : slotData?.availableTimes?.slice(0, 6)}
                    renderItem={renderTimeSlots}
                    keyExtractor={(_, index) => `${index}`}
                    scrollEnabled={false}
                    numColumns={3}
                    style={{ marginHorizontal: -ResponsiveSizeWp(5), }}
                    contentContainerStyle={styles.listContentContainer}
                />

                <TouchableOpacity
                    style={styles.viewMoreButton}
                    onPress={toggleAllTimeVisible}
                    activeOpacity={1}
                >
                    <Text style={styles.viewMoreText}>
                        {showAllTime ? `View Less` : `View More`}
                    </Text>

                    <Animated.View
                        style={{
                            transform: [{
                                rotate: rotation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ['0deg', '180deg']
                                })
                            }]
                        }}
                    >
                        <VectorIcons.Entypo
                            name={`chevron-thin-down`}
                            size={ResponsiveSizeWp(14)}
                            color={COLOR.PRIMARY}
                        />
                    </Animated.View>
                </TouchableOpacity>
            </ScrollView>

            <ActionButtons
                nextButtonText={`Pay ${CURRENCY_SYMBOL}${data?.charge || 0}`}
                backVisible
                nextVisible
                onBackPress={handleBackPress}
                onNextPress={handleNextPress}
            />
        </View >
    )
}

export default BookSlotScreen