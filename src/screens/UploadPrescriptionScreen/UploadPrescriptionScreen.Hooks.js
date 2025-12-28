import { useCallback } from "react";
import { usePermissions } from "../../hooks/usePermissions";
import ImagePicker from 'react-native-image-crop-picker';
import { showToast } from "../../helpers/helper-functions";

const useScreenHooks = () => {

    // Variables
    const { requestCameraPermission, requestPhotoPermission } = usePermissions();

    // UseStates


    // UseEffects


    // Methods
    const handleClickPhotoPress = useCallback(async () => {
        try {
            const permission = await requestCameraPermission()
            if (permission) {
                ImagePicker.openCamera({
                    compressImageQuality: 1,
                    mediaType: 'photo',
                    cropping: true,
                    multiple: false,
                    freeStyleCropEnabled: true,
                }).then((res) => { showToast(res?.filename) }).catch(console.log);
            }
        } catch (e) {
            console.log(e);
        }
    }, [])

    const handleUploadPhotoPress = useCallback(async () => {
        try {
            const permission = await requestPhotoPermission()
            if (permission) {
                ImagePicker.openPicker({
                    compressImageQuality: 1,
                    mediaType: 'photo',
                    cropping: true,
                    multiple: false,
                    freeStyleCropEnabled: true,
                }).then((res) => { showToast(res?.filename) }).catch(console.log);
            }
        } catch (e) {
            console.log(e);
        }
    }, [])

    return {
        handleClickPhotoPress,
        handleUploadPhotoPress,
    };
}

export default useScreenHooks