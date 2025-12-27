import Toast from 'react-native-simple-toast';
import { COLOR } from './colors';
import moment from 'moment';

export const showToast = (message) => {
    if (message && message?.trim() !== '' && message !== null) {
        Toast.show(message, Toast.SHORT, {
            backgroundColor: COLOR.BLACK,
            textColor: COLOR.WHITE,
        });
    }
}

export const normalizeText = (text) => text?.toLowerCase()?.trim();

export const compareString = (str1 = '', str2 = '') => normalizeText(str1)?.includes(normalizeText(str2));

export const shortDateFormat = (date) => moment(new Date(date?.toString())).format(`D MMM`);

export const fullDateFormat = (date) => moment(new Date(date?.toString())).format(`D MMMM`);