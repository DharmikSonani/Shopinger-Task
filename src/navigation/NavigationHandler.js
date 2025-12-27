import { createStackNavigator } from '@react-navigation/stack';
import { Screens } from './helper';
import TabBar from './bottom-tab/TabBar';

const Stack = createStackNavigator();

export const HospitalStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right',
                autoHideHospitalIndicator: true,
                gestureEnabled: true,
                gestureDirection: 'horizontal',
            }}
            initialRouteName={Screens.HospitalTabs}
        >
            <Stack.Screen name={Screens.HospitalTabs} component={TabBar} />
        </Stack.Navigator>
    );
}