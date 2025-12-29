import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { Screens, useParams } from "../../navigation/helper";
import { useBottomSafeArea } from "../../helpers/responsive";

const useScreenHooks = () => {

    // Variables
    const navigation = useNavigation();
    const { data } = useParams();
    const bottomSpace = useBottomSafeArea();

    // UseStates


    // UseEffects


    // Methods
    const handleBackPress = useCallback(() => { if (navigation.canGoBack()) navigation.goBack() }, [])
    const handleNextPress = useCallback(() => {
        navigation.navigate(Screens.ConfirmationScreen, { data });
    }, [])

    return {
        data,
        bottomSpace,

        handleBackPress,
        handleNextPress,
    };
}

export default useScreenHooks