import { createStackNavigator } from '@react-navigation/stack';
import { Screens } from './helper';
import TabBar from './bottom-tab/TabBar';
import UploadPrescriptionScreen from '../screens/UploadPrescriptionScreen/UploadPrescriptionScreen';

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
            <Stack.Screen name={Screens.UploadPrescriptionScreen} component={UploadPrescriptionScreen} />
        </Stack.Navigator>
    );
}