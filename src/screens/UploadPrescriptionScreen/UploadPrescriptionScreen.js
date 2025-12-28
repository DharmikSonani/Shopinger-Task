import {
    ScrollView,
    View,
} from 'react-native'
import React from 'react'
import useScreenHooks from './UploadPrescriptionScreen.Hooks';
import { styles } from './styles';
import ScreenHeader from '../../components/ScreenHeader';
import PickerButton from './components/PickerButton';
import { CAMERA_ICON, GALLERY_ICON } from '../../assets/assets';
import PostProcessGuide from './components/PostProcessGuide';
import UploadFormat from './components/UploadFormat';

const UploadPrescriptionScreen = () => {

    const {
        handleClickPhotoPress,
        handleUploadPhotoPress,
    } = useScreenHooks();

    return (
        <View style={styles.container}>
            <ScreenHeader title={`Upload Prescription`} />

            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
                bounces={false}
                alwaysBounceVertical={false}
            >
                <View style={styles.topButtonContainer}>
                    <PickerButton
                        icon={CAMERA_ICON}
                        title={`Click Photo`}
                        onPress={handleClickPhotoPress}
                    />

                    <PickerButton
                        icon={GALLERY_ICON}
                        title={`Upload Photo`}
                        onPress={handleUploadPhotoPress}
                    />
                </View>

                <UploadFormat />

                <PostProcessGuide />
            </ScrollView>
        </View>
    )
}

export default UploadPrescriptionScreen