import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Screens, useParams } from "../../navigation/helper";
import { BOOK_SLOT_SCREEN_DATA } from "../../helpers/data";
import DateButton from "./components/DateButton";
import TimeButton from "./components/TimeButton";
import { Animated } from "react-native";
import { showToast } from "../../helpers/helper-functions";

const useScreenHooks = () => {

    // Variables
    const navigation = useNavigation();
    const rotation = useRef(new Animated.Value(0)).current;
    const { data } = useParams();
    const slotData = BOOK_SLOT_SCREEN_DATA;

    // UseStates
    const [selectedDate, setSelectedDate] = useState();
    const [selectedTime, setSelectedTime] = useState();
    const [showAllTime, setShowAllTime] = useState(false);

    // UseEffects
    useEffect(() => {
        Animated.timing(rotation, {
            toValue: showAllTime ? 1 : 0,
            useNativeDriver: true,
            duration: 200
        }).start();
    }, [showAllTime])

    // Methods
    const handleBackPress = useCallback(() => { if (navigation.canGoBack()) navigation.goBack() }, [])
    const handleNextPress = useCallback(() => {
        if (!selectedDate) return showToast(`Select Date`);
        if (!selectedTime) return showToast(`Select Time`);
        navigation.navigate(Screens.PatientScreen, { data: { ...data, date: selectedDate, time: selectedTime, } });
    }, [selectedDate, selectedTime])

    const handleDateChange = useCallback(setSelectedDate, [])
    const handleTimeChange = useCallback(setSelectedTime, [])

    const renderDateSlots = useCallback(({ item }) => <DateButton data={item} selected={selectedDate === item} onPress={handleDateChange} />, [selectedDate])
    const renderTimeSlots = useCallback(({ item }) => <TimeButton data={item} selected={selectedTime?.id === item?.id} onPress={handleTimeChange} />, [selectedTime])

    const toggleAllTimeVisible = useCallback(() => { setShowAllTime(pre => !pre) }, [])

    return {
        data,
        slotData,
        showAllTime,
        rotation,

        handleBackPress,
        handleNextPress,
        renderTimeSlots,
        renderDateSlots,
        toggleAllTimeVisible,
    };
}

export default useScreenHooks