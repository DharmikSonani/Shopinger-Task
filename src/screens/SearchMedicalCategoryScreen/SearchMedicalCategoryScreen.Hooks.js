import { useCallback, useState } from "react";
import { MEDICAL_CATEGORIES_SCREEN_DATA } from "../../helpers/data";
import RadioButton from "./components/RadioButton";
import { useNavigation } from "@react-navigation/native";
import { Screens } from "../../navigation/helper";

const useScreenHooks = () => {

    // Variables
    const navigation = useNavigation();
    const data = MEDICAL_CATEGORIES_SCREEN_DATA;

    // UseStates
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState();

    // UseEffects


    // Methods
    const renderCategories = useCallback(({ item, index }) =>
        <RadioButton
            data={item}
            isFirst={index === 0}
            selected={selectedCategory === item?.id}
            onPress={handleCategorySelect}
        />, [data.categories, selectedCategory, handleCategorySelect])

    const handleCategorySelect = useCallback(setSelectedCategory, []);

    const handleBackPress = useCallback(() => { if (navigation.canGoBack()) navigation.goBack() }, [])
    const handleNextPress = useCallback(() => { navigation.navigate(Screens.DoctorProfilesScreen) }, [])

    return {
        data,
        search, setSearch,

        renderCategories,
        handleBackPress,
        handleNextPress,
    };
}

export default useScreenHooks