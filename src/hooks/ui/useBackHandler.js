import { useEffect } from "react";
import { BackHandler } from "react-native";

export const useBackHandler = (handleBackButtonClick = () => { }, dependencies = [],) => {
    useEffect(() => {
        const handler = BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return handler.remove;
    }, dependencies)
}