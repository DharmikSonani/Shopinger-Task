import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import { iOS_Device } from '../../helpers/responsive';

const useKeyboardStatus = () => {

    const [keyboardVisible, setKeyboardVisibility] = useState(Keyboard?.isVisible());

    useEffect(() => {
        const showSubscription = Keyboard.addListener(iOS_Device ? 'keyboardWillShow' : 'keyboardDidShow', () => {
            setKeyboardVisibility(true);
        });

        const hideSubscription = Keyboard.addListener(iOS_Device ? 'keyboardWillHide' : 'keyboardDidHide', () => {
            setKeyboardVisibility(false);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    return {
        keyboardVisible,
    }
};

export default useKeyboardStatus;
