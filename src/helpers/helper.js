import {
    ALL_MENU_ICON,
    DOCTOR_ICON,
    GROCERY_ICON,
    LAB_TEST_ICON,
    MEDICAL_ICON,
    MEDICINES_ICON,
    ONLINE_CONSULT_ICON,
    QUICK_ICON,
    REPORTS_ICON,
} from "../assets/assets";

export const KEYBOARD_TYPES = {
    ascii_capable: 'ascii-capable',
    decimal_pad: 'decimal-pad',
    default: 'default',
    email_address: 'email-address',
    name_phone_pad: 'name-phone-pad',
    number_pad: 'number-pad',
    numbers_and_punctuation: 'numbers-and-punctuation',
    numeric: 'numeric',
    phone_pad: 'phone-pad',
    twitter: 'twitter',
    url: 'url',
    visible_password: 'visible-password',
    web_search: 'web-search',
}

export const HOME_TOP_TABS = [
    {
        id: `quick`,
        title: `Quick`,
        icon: QUICK_ICON,
    },
    {
        id: `medical`,
        title: `Medical`,
        icon: MEDICAL_ICON,
    },
    {
        id: `grocery`,
        title: `Grocery`,
        icon: GROCERY_ICON,
    },
]

export const HOME_MENU_TABS = [
    {
        id: `all`,
        title: `All`,
        icon: ALL_MENU_ICON,
    },
    {
        id: `doctor`,
        title: `Doctor`,
        icon: DOCTOR_ICON,
    },
    {
        id: `lab-test`,
        title: `Lab Test`,
        icon: LAB_TEST_ICON,
    },
    {
        id: `medicines`,
        title: `Medicines`,
        icon: MEDICINES_ICON,
    },
    {
        id: `reports`,
        title: `Reports`,
        icon: REPORTS_ICON,
    },
]

export const MAIN_MEDICAL_CATEGORIES = [
    {
        id: `online-consult`,
        title: `Online Consult`,
        icon: ONLINE_CONSULT_ICON,
    },
    {
        id: `hospital-visit`,
        title: `Hospital Visit`,
        icon: ONLINE_CONSULT_ICON,
    },
    {
        id: `surgical-care`,
        title: `Surgical Care`,
        icon: ONLINE_CONSULT_ICON,
    },
]

export const PAYMENT_METHODS = [
    {
        id: `upi`,
        title: `Pay by any UPI ID`,
        desc: `*Get upto ₹35 cashback`,
    },
    {
        id: `card`,
        title: `Credit/Debit Card`,
        desc: `*Add a secure card and get 10% cashback`,
    },
    {
        id: `cod`,
        title: `Cash On Delivery`,
        desc: `*Applicable for orders below ₹20,000 & additional ₹10 fee`,
    },
    {
        id: `net-banking`,
        title: `Net Banking`,
    },
]

export const ADDRESSS_TYPES = [
    {
        id: `home`,
        title: `Hospital`,
    },
    {
        id: `work`,
        title: `Work`,
    },
    {
        id: `other`,
        title: `Other`,
    },
]