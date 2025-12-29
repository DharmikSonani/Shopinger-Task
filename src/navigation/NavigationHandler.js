import { createStackNavigator } from '@react-navigation/stack';
import { Screens } from './helper';
import TabBar from './bottom-tab/TabBar';
import UploadPrescriptionScreen from '../screens/UploadPrescriptionScreen/UploadPrescriptionScreen';
import SearchMedicalCategoryScreen from '../screens/SearchMedicalCategoryScreen/SearchMedicalCategoryScreen';
import DoctorProfilesScreen from '../screens/DoctorProfilesScreen/DoctorProfilesScreen';
import BookSlotScreen from '../screens/BookSlotScreen/BookSlotScreen';
import PaymentScreen from '../screens/PaymentScreen/PaymentScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen/ConfirmationScreen';

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
            <Stack.Screen name={Screens.SearchMedicalCategoryScreen} component={SearchMedicalCategoryScreen} />
            <Stack.Screen name={Screens.DoctorProfilesScreen} component={DoctorProfilesScreen} />
            <Stack.Screen name={Screens.BookSlotScreen} component={BookSlotScreen} />
            <Stack.Screen name={Screens.PaymentScreen} component={PaymentScreen} />
            <Stack.Screen name={Screens.ConfirmationScreen} component={ConfirmationScreen} />
        </Stack.Navigator>
    );
}