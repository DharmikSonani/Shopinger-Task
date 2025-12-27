import moment from "moment";
import {
    AD_BANNER,
    PRODUCT_01,
    PRODUCT_02,
    PRODUCT_03,
    PRODUCT_04,
    PROFILE_ICON,
    SBI_LOGO,
} from "../assets/assets";

const PRODUCT_DATA_1 = {
    title: `Orrane Body Lotion Moisturizer`,
    ratings: 3.9,
    price: 470,
    discount: 52,
}

const PRODUCT_DATA_2 = {
    title: `Deetol Liquid 750ml`,
    image: PRODUCT_01,
    price: 390,
}

export const HOME_SCREEN_DATA = {
    notificationCount: 2,
    ads: [
        AD_BANNER,
        AD_BANNER,
        AD_BANNER,
        AD_BANNER,
    ],
    pharmacyEssentials: {
        title: `Pharmacy Essentials`,
        list: [
            { ...PRODUCT_DATA_1, image: PRODUCT_01 },
            { ...PRODUCT_DATA_1, image: PRODUCT_02 },
            { ...PRODUCT_DATA_1, image: PRODUCT_03 },
            { ...PRODUCT_DATA_1, image: PRODUCT_04 },
        ],
    },
    medicalHaircare: {
        title: `Medical Haircare`,
        list: [
            { ...PRODUCT_DATA_1, image: PRODUCT_01 },
            { ...PRODUCT_DATA_1, image: PRODUCT_02 },
            { ...PRODUCT_DATA_1, image: PRODUCT_03 },
            { ...PRODUCT_DATA_1, image: PRODUCT_04 },
        ],
    },
    recommandation: {
        title: `Inspired by your Past Purchases`,
        list: [
            PRODUCT_DATA_2,
            PRODUCT_DATA_2,
            PRODUCT_DATA_2,
            PRODUCT_DATA_2,
        ],
    },
    offerAd: {
        icon: SBI_LOGO,
        desc: `10% instant discount, up to 100/-\nValid once on all SBI Debit Cards.`,
        code: `USE CODE:\nSBI100`,
    }
}

export const UPLOAD_PRESCRIPTION_SCREEN_DATA = {
    postProcess: [
        `Our team will verify and create your order.`,
        `We'll apply the most possible discounts.`,
        `You can pay online or cash on delivery.`
    ]
}

export const MEDICAL_CATEGORIES_SCREEN_DATA = {
    categories: [
        {
            id: `cardiology`,
            title: `Cardiology`,
        },
        {
            id: `clinical-genetics`,
            title: `Clinical Genetics`,
        },
        {
            id: `dermatology`,
            title: `Dermatology`,
        },
        {
            id: `gastroenterology`,
            title: `Gastroenterology`,
        },
        {
            id: `general-physician`,
            title: `General Physician`,
        },
        {
            id: `gynaecology`,
            title: `Gynaecology`,
        },
        {
            id: `immunology`,
            title: `Immunology`,
        },
        {
            id: `nephrology`,
            title: `Nephrology`,
        },
        {
            id: `ophthalmology`,
            title: `Ophthalmology`,
        },
    ]
}

export const DOCTOR_PROFILE_SCREEN_DATA = {
    doctors: [
        {
            id: `doctor-1`,
            name: `Dr. Abhishek Pareek`,
            profile: PROFILE_ICON,
            licenseNo: `76049443323`,
            exp: `12+ Yrs`,
            charge: 499,
            speciality: `General Physician`,
        },
        {
            id: `doctor-2`,
            name: `Dr. Abhishek Pareek`,
            profile: PROFILE_ICON,
            licenseNo: `76049443323`,
            exp: `12+ Yrs`,
            charge: 499,
            speciality: `General Physician`,
        },
        {
            id: `doctor-3`,
            name: `Dr. Abhishek Pareek`,
            profile: PROFILE_ICON,
            licenseNo: `76049443323`,
            exp: `12+ Yrs`,
            charge: 499,
            speciality: `General Physician`,
        },
        {
            id: `doctor-4`,
            name: `Dr. Abhishek Pareek`,
            profile: PROFILE_ICON,
            licenseNo: `76049443323`,
            exp: `12+ Yrs`,
            charge: 499,
            speciality: `General Physician`,
        },
        {
            id: `doctor-5`,
            name: `Dr. Abhishek Pareek`,
            profile: PROFILE_ICON,
            licenseNo: `76049443323`,
            exp: `12+ Yrs`,
            charge: 499,
            speciality: `General Physician`,
        },
        {
            id: `doctor-6`,
            name: `Dr. Abhishek Pareek`,
            profile: PROFILE_ICON,
            licenseNo: `76049443323`,
            exp: `12+ Yrs`,
            charge: 499,
            speciality: `General Physician`,
        },
    ]
}

export const BOOK_SLOT_SCREEN_DATA = {
    availableDates: [0, 1, 2, 3, 4, 5].map((val) => moment(new Date()).add(val, 'days')),
    availableTimes: [
        { id: `10-30-am`, time: `10:30 am`, booked: false },
        { id: `11-am`, time: `11 am`, booked: false },
        { id: `11-30-am`, time: `11:30 am`, booked: true },
        { id: `12-pm`, time: `12 pm`, booked: true },
        { id: `12-30-pm`, time: `12:30 pm`, booked: false },
        { id: `1-30-pm`, time: `1:30 pm`, booked: false },
        { id: `4-pm`, time: `4 pm`, booked: false },
        { id: `4-30-pm`, time: `4:30 pm`, booked: true },
        { id: `5-pm`, time: `5 pm`, booked: true },
    ]
}