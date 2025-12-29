import {
    FlatList,
    KeyboardAvoidingView,
    View,
} from 'react-native'
import React from 'react'
import useScreenHooks from './DoctorProfilesScreen.Hooks';
import { styles } from './styles';
import ScreenHeader from '../../components/ScreenHeader';
import SearchBar from '../../components/SearchBar';
import ActionButtons from '../../components/ActionButtons';

const DoctorProfilesScreen = () => {

    const {
        data,
        search, setSearch,

        renderList,
        handleBackPress,
        handleNextPress,
    } = useScreenHooks();

    return (
        <KeyboardAvoidingView
            style={[styles.container]}
            behavior='padding'
        >
            <ScreenHeader title={`Doctor Profile`} />

            <View style={styles.paddingHorizontal}>
                <SearchBar
                    showMicButton
                    showFilterButton
                    showScanButton
                    showSortButton
                    placeholder={`Search`}
                    search={search}
                    onSearch={setSearch}
                />
            </View>

            <FlatList
                data={data.doctors}
                style={styles.listContainer}
                contentContainerStyle={styles.listContentContainer}
                keyExtractor={(_, index) => `${index}`}
                renderItem={renderList}
                showsVerticalScrollIndicator={false}
            />

            <ActionButtons
                backVisible
                nextVisible
                onBackPress={handleBackPress}
                onNextPress={handleNextPress}
            />
        </KeyboardAvoidingView>
    )
}

export default DoctorProfilesScreen