import { useCallback } from "react";
import { HOME_SCREEN_DATA } from "../../helpers/data";
import { useTopPadding } from "../../helpers/responsive";
import { useNavigation } from "@react-navigation/native";
import { Screens } from "../../navigation/helper";

const useScreenHooks = () => {

    // Variables
    const navigation = useNavigation();
    const topSpace = useTopPadding();
    const data = HOME_SCREEN_DATA;

    // UseStates


    // UseEffects


    // Methods
    const handleSearchPress = useCallback(() => {
        navigation.navigate(Screens.SearchMedicalCategoryScreen)
    }, [])

    return {
        topSpace,
        data,

        handleSearchPress,
    };
}

export default useScreenHooks