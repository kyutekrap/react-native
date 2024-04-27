import * as RNLocalize from 'react-native-localize';
import { DateTimeFormatOptions } from 'intl';
import { Dimensions } from 'react-native';

const getDeviceTimezone = () => {
  return RNLocalize.getTimeZone();
};

export const convertTimestamp = (timestamp: number) => {
  const date = new Date(timestamp * 1000);

  const options: DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: getDeviceTimezone(),
  };

  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  return formattedDate;
};

export const currentTimestamp = () => {
  return Date.now()
}

export const currentDate = () => {
  const currentDate = new Date()
  const year = currentDate.getFullYear()
  const month = ('0' + (currentDate.getMonth() + 1)).slice(-2)
  const day = ('0' + currentDate.getDate()).slice(-2)
  return `${year}-${month}-${day}`
}

export const fontSize = (num: number) => {
  const { width: screenWidth } = Dimensions.get('window');
  const REM = screenWidth > 340 ? 18 : 16;
  const fontSize = (rem: number) => rem * REM;
  return fontSize(num)
}

export const validateForm = (payload: any) => {
  for (const key in payload) {
    if (payload[key] === undefined || payload[key] === null) {
      return false;
    }
  }
  return true
}

export const systemLang = () => {
  return RNLocalize.getLocales()[0]['languageCode']
}