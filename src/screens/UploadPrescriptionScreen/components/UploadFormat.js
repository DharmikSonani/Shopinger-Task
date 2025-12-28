import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { COLOR } from '../../../helpers/colors'
import { iOS_Device, ResponsiveSizeWp } from '../../../helpers/responsive'
import { fontFamily } from '../../../helpers/fonts'

const POINTS = [
    `File size should be less than 15 MB.`,
    `Can be in PDF/JPG/JPEG/PNG formats.`,
    `Prescription should be less than 6 months old.`,
]

const FORMATE = [
    {
        w: 29,
        h: ResponsiveSizeWp(40),
        title: `Doctor's details`,
    },
    {
        w: 29,
        h: ResponsiveSizeWp(25),
        title: `Date of prescription`,
    },
    {
        w: 37,
        h: ResponsiveSizeWp(40),
        title: `Patient's details`,
    },
    {
        w: 41.5,
        h: ResponsiveSizeWp(50),
        title: `Medicine details`,
    },
]

const UploadFormat = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>
                {`Make sure your prescription contains the following elements as shown:`}
            </Text>

            <View style={styles.formatContainer}>
                <View style={styles.formatCard} />

                <View style={styles.formatCardContent}>
                    {
                        FORMATE?.map((format, index) =>
                            <View style={styles.formatWrapper} key={index}>
                                <View style={[styles.formateView, { width: `${format?.w}%`, height: format?.h }]} />

                                <View style={styles.formatLine} />

                                <View style={styles.formatCircle} />

                                <Text style={styles.formateTitle} numberOfLines={1}>
                                    {format?.title}
                                </Text>
                            </View>
                        )
                    }
                </View>
            </View>

            <View style={styles.pointsContainer}>
                {
                    POINTS?.map((point, index) =>
                        <View style={styles.pointWrapper} key={index}>
                            <View style={styles.point} />

                            <Text style={styles.pointText}>
                                {point}
                            </Text>
                        </View>
                    )
                }
            </View>
        </View>
    )
}

export default memo(UploadFormat)

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: COLOR.LIGHTGRAY,
        borderWidth: ResponsiveSizeWp(1),
        borderColor: COLOR.GRAY3,
        borderRadius: ResponsiveSizeWp(15),
        padding: ResponsiveSizeWp(15),
        gap: ResponsiveSizeWp(15),
        paddingVertical: iOS_Device ? ResponsiveSizeWp(15) : ResponsiveSizeWp(12),
    },
    titleText: {
        fontFamily: fontFamily.Medium,
        color: COLOR.BLACK,
        fontSize: ResponsiveSizeWp(15),
    },
    formatContainer: {
        width: '100%',
        marginTop: iOS_Device ? ResponsiveSizeWp(5) : 0,
        marginBlock: ResponsiveSizeWp(5),
        padding: ResponsiveSizeWp(10),
        paddingRight: 0,
    },
    formatCard: {
        width: '47.5%',
        backgroundColor: COLOR.WHITE,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        borderRadius: ResponsiveSizeWp(12),
        elevation: 10,
        shadowColor: COLOR.SLAT4,
        shadowOffset: { height: 2, width: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    formatCardContent: {
        zIndex: 100,
        gap: ResponsiveSizeWp(10),
    },
    formatWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    formateView: {
        borderWidth: ResponsiveSizeWp(1),
        borderColor: COLOR.PRIMARY,
        borderStyle: 'dashed',
        borderRadius: ResponsiveSizeWp(7),
    },
    formatLine: {
        flex: 1,
        height: ResponsiveSizeWp(1),
        backgroundColor: COLOR.PRIMARY,
    },
    formatCircle: {
        height: ResponsiveSizeWp(5),
        backgroundColor: COLOR.PRIMARY,
        borderRadius: ResponsiveSizeWp(5),
        aspectRatio: 1,
    },
    formateTitle: {
        width: '40%',
        textAlign: 'left',
        fontFamily: fontFamily.Medium,
        fontSize: ResponsiveSizeWp(12),
        color: COLOR.BLACK,
        marginLeft: ResponsiveSizeWp(5),
        top: iOS_Device ? 0 : ResponsiveSizeWp(1),
    },
    pointsContainer: {
        gap: ResponsiveSizeWp(5),
        width: '100%'
    },
    pointWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: ResponsiveSizeWp(8),
    },
    point: {
        backgroundColor: COLOR.SLAT4,
        width: ResponsiveSizeWp(4),
        aspectRatio: 1,
        borderRadius: ResponsiveSizeWp(4),
        top: ResponsiveSizeWp(8),
    },
    pointText: {
        flex: 1,
        fontFamily: fontFamily.Regular,
        fontSize: ResponsiveSizeWp(14),
        color: COLOR.SLAT4,
    },
})