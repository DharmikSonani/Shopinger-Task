import {
    FlatList,
    KeyboardAvoidingView,
    Text,
    View,
} from 'react-native'
import React from 'react'
import useScreenHooks from './SearchMedicalCategoryScreen.Hooks';
import { styles } from './styles';
import ScreenHeader from '../../components/ScreenHeader';
import SearchBar from '../../components/SearchBar';
import TopCategoryButton from './components/TopCategoryButton';
import { HOSPITAL_VISIT_ICON, ONLINE_CONSULT_ICON, SURGICAL_CARE_ICON } from '../../assets/assets';
import ActionButtons from '../../components/ActionButtons';

const SearchMedicalCategoryScreen = () => {

    const {
        data,
        search, setSearch,

        renderCategories,
        handleBackPress,
        handleNextPress,
    } = useScreenHooks();

    return (
        <KeyboardAvoidingView
            style={[styles.container]}
            behavior='padding'
        >
            <ScreenHeader />

            <View style={styles.paddingHorizontal}>
                <SearchBar
                    showCallButton
                    showMicButton
                    placeholder={`Search medical cateogry`}
                    search={search}
                    onSearch={setSearch}
                />

                <View style={styles.topCategoryContainer}>
                    <TopCategoryButton
                        icon={ONLINE_CONSULT_ICON}
                        title={`Online Consult`}
                    />

                    <TopCategoryButton
                        icon={HOSPITAL_VISIT_ICON}
                        title={`Hospital Visit`}
                    />

                    <TopCategoryButton
                        icon={SURGICAL_CARE_ICON}
                        title={`Surgical Care`}
                    />
                </View>

                <Text style={styles.titleText} numberOfLines={1}>
                    {`Select Medical Category`}
                </Text>
            </View>

            <FlatList
                data={data.categories}
                style={styles.listContainer}
                contentContainerStyle={styles.listContentContainer}
                keyExtractor={(_, index) => `${index}`}
                renderItem={renderCategories}
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

export default SearchMedicalCategoryScreen