import { useCallback, useState } from "react";
import { DOCTOR_PROFILE_SCREEN_DATA } from "../../helpers/data";
import { useNavigation } from "@react-navigation/native";
import { Screens } from "../../navigation/helper";
import DoctorCard from "./components/DoctorCard";
import { showToast } from "../../helpers/helper-functions";

const useScreenHooks = () => {

    // Variables
    const navigation = useNavigation();
    const data = DOCTOR_PROFILE_SCREEN_DATA;

    // UseStates
    const [search, setSearch] = useState('');
    const [selectedDoctor, setSelectedDoctor] = useState();

    // UseEffects


    // Methods
    const renderList = useCallback(({ item, index }) =>
        <DoctorCard
            data={item}
            selected={selectedDoctor?.id === item?.id}
            onPress={handleDoctorSelect}
        />, [data.categories, selectedDoctor, handleDoctorSelect])

    const handleDoctorSelect = useCallback(setSelectedDoctor, []);

    const handleBackPress = useCallback(() => { if (navigation.canGoBack()) navigation.goBack() }, [])
    const handleNextPress = useCallback(() => {
        if (!selectedDoctor) return showToast('Select Doctor');
        navigation.navigate(Screens.BookSlotScreen, { data: selectedDoctor })
    }, [selectedDoctor])

    return {
        data,
        search, setSearch,

        renderList,
        handleBackPress,
        handleNextPress,
    };
}

export default useScreenHooks