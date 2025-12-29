import { useNavigation } from "@react-navigation/native";
import { useBottomSafeArea, useTopPadding } from "../../helpers/responsive";
import { useCallback } from "react";
import { navigationToReset, Screens, useParams } from "../../navigation/helper";

const useScreenHooks = () => {

    // Variables
    const topSpace = useTopPadding();
    const navigation = useNavigation();
    const bottomSpace = useBottomSafeArea();
    const { data } = useParams();

    // UseStates


    // UseEffects


    // Methods
    const handleBackToHomePress = useCallback(() => { navigationToReset(navigation, Screens.HospitalTabs) }, [])

    return {
        topSpace,
        bottomSpace,
        data,

        handleBackToHomePress,
    };
}

export default useScreenHooks