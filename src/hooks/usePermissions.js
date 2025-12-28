import { Platform, PermissionsAndroid } from "react-native";
import { request, PERMISSIONS, RESULTS } from "react-native-permissions";
import { iOS_Device } from "../helpers/responsive";

export const usePermissions = () => {
    const requestPhotoPermission = async () => {
        let granted = false;
        if (!iOS_Device) {
            if (Platform.Version >= 33) return true; // Android 13 or Above
            const androidPermissions = [
                PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
            ]
            const results = await PermissionsAndroid.requestMultiple(androidPermissions);
            granted = Object.values(results).every(result => result === PermissionsAndroid.RESULTS.GRANTED);
        } else {
            granted = await request(PERMISSIONS.IOS.PHOTO_LIBRARY) === RESULTS.GRANTED;
        }
        return granted;
    };

    const requestCameraPermission = async () => {
        let granted = false;
        if (!iOS_Device) {
            const androidPermissions = [PERMISSIONS.ANDROID.CAMERA];
            const results = await PermissionsAndroid.requestMultiple(androidPermissions);
            granted = Object.values(results).every(result => result === PermissionsAndroid.RESULTS.GRANTED);
        } else {
            granted = await request(PERMISSIONS.IOS.CAMERA) === RESULTS.GRANTED;
        }
        return granted;
    };

    return { requestPhotoPermission, requestCameraPermission, };
};