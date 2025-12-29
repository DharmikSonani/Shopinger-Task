import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import { iOS_Device, ResponsiveSizeWp } from '../helpers/responsive'
import { COLOR } from '../helpers/colors'
import { CALL_ICON, SCANNER_ICON } from '../assets/assets'
import VectorIcons from '../helpers/vector-icons'
import { fontFamily } from '../helpers/fonts'

const SearchBar = ({
  search,
  placeholder,
  showCallButton,
  showMicButton,
  showScanButton,
  showSortButton,
  showFilterButton,

  onSearch,
  onSearchPress,
}) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.searchContainer}
        disabled={typeof onSearchPress !== 'function'}
        activeOpacity={1}
        onPress={onSearchPress}
      >
        <VectorIcons.Ionicons
          name={`search-outline`}
          size={ResponsiveSizeWp(18)}
          color={COLOR.BLACK}
        />

        {
          typeof onSearchPress !== 'function' && typeof onSearch === 'function' ?
            <TextInput
              value={search}
              onChangeText={onSearch}
              style={styles.textInputStyle}
              placeholder={placeholder || `Search`}
              placeholderTextColor={COLOR.BLACK_60}
              editable={typeof onSearchPress !== 'function' && typeof onSearch === 'function'}
            />
            :
            <Text style={[styles.textInputStyle, { color: COLOR.BLACK_60 }]} numberOfLines={1}>
              {placeholder || `Search`}
            </Text>
        }

        {
          showMicButton &&
          <TouchableOpacity
            style={styles.actionButton}
          >
            <VectorIcons.FontAwesome6
              name={`microphone`}
              size={ResponsiveSizeWp(17)}
              color={COLOR.SLAT}
            />
          </TouchableOpacity>
        }
        {
          showScanButton &&
          <TouchableOpacity
            style={styles.actionButton}
          >
            <Image
              source={SCANNER_ICON}
              style={styles.actionButtonIcon}
              resizeMode='contain'
            />
          </TouchableOpacity>
        }
      </TouchableOpacity>

      {
        showSortButton &&
        <TouchableOpacity
          style={styles.sortButton}
        >
          <Text style={styles.sortButtonText} numberOfLines={1}>
            {`Sort By`}
          </Text>

          <VectorIcons.Entypo
            name={`chevron-thin-down`}
            size={ResponsiveSizeWp(15)}
            color={COLOR.SLAT3}
          />
        </TouchableOpacity>
      }

      {
        showFilterButton &&
        <TouchableOpacity
          style={styles.callButton}
        >
          <VectorIcons.FontAwesome6
            name={`sliders`}
            size={ResponsiveSizeWp(19)}
            color={COLOR.SLAT}
          />
        </TouchableOpacity>
      }

      {
        showCallButton &&
        <TouchableOpacity
          style={styles.callButton}
        >
          <Image
            source={CALL_ICON}
            style={styles.callButtonIcon}
            resizeMode='contain'
          />
        </TouchableOpacity>
      }
    </View>
  )
}

export default memo(SearchBar)

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    gap: ResponsiveSizeWp(10),
    flexDirection: 'row',
    alignItems: 'center',
    height: ResponsiveSizeWp(40),
  },
  searchContainer: {
    height: '100%',
    flex: 1,
    borderRadius: ResponsiveSizeWp(20),
    backgroundColor: COLOR.WHITE,
    borderWidth: ResponsiveSizeWp(1),
    borderColor: COLOR.PRIMARY,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: ResponsiveSizeWp(10),
    gap: ResponsiveSizeWp(5),
  },
  textInputStyle: {
    flex: 1,
    fontFamily: fontFamily.Regular,
    fontSize: ResponsiveSizeWp(11.5),
    color: COLOR.BLACK,
    includeFontPadding: false,
  },
  actionButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: ResponsiveSizeWp(20),
    aspectRatio: 1,
    marginRight: ResponsiveSizeWp(3),
  },
  actionButtonIcon: {
    height: ResponsiveSizeWp(18),
    aspectRatio: 1 / 1,
  },
  callButton: {
    height: '100%',
    aspectRatio: 1,
    backgroundColor: COLOR.PRIMARYLIGHT2,
    borderRadius: ResponsiveSizeWp(18),
    borderWidth: ResponsiveSizeWp(1),
    borderColor: COLOR.PRIMARY,
    padding: ResponsiveSizeWp(9),
    justifyContent: 'center',
    alignItems: 'center',
  },
  callButtonIcon: {
    height: '100%',
    width: '100%',
  },
  sortButton: {
    height: '100%',
    paddingHorizontal: ResponsiveSizeWp(10),
    gap: ResponsiveSizeWp(4),
    flexDirection: 'row',
    borderColor: COLOR.GRAY3,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: ResponsiveSizeWp(1),
    borderRadius: ResponsiveSizeWp(20),
  },
  sortButtonText: {
    fontFamily: fontFamily.Medium,
    color: COLOR.SLAT3,
    fontSize: ResponsiveSizeWp(13),
    top: iOS_Device ? 0 : ResponsiveSizeWp(1),
  },
})