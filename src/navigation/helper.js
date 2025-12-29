import { useRoute } from "@react-navigation/native";

export const Screens = {
    HospitalTabs: `Hospital Tabs`,
    HospitalScreen: `Hospital Screen`,
    MenuScreen: `Menu Screen`,
    CartScreen: `Cart Screen`,
    PatientScreen: `Patient Screen`,
    BarsatiScreen: `Barsati Screen`,
    UploadPrescriptionScreen: `Upload Prescription Screen`,
    SearchMedicalCategoryScreen: `Search Medical Category Screen`,
    DoctorProfilesScreen: `Doctor Profiles Screen`,
    BookSlotScreen: `Book Slot Screen`,
    PaymentScreen: `Payment Screen`,
    ConfirmationScreen: `Confirmation Screen`,
}

export const navigationToReset = (navigation, screen) => {
    return navigation.reset({
        index: 0,
        routes: [{ name: screen }],
    });
}

export const useParams = () => {
    return useRoute()?.params ?? {};
}