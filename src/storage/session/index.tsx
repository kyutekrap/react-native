import AsyncStorage from '@react-native-async-storage/async-storage';

export const setSession = async (username: string) => {
    await AsyncStorage.setItem('@user_session', username);
};

export const checkSession = async () => {
    const response = await AsyncStorage.getItem('@user_session');
    return response
};

export const clearSession = async () => {
    await AsyncStorage.removeItem('@user_session');
};
