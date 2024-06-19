import Omise from 'omise-react-native';
import { OMISE_SECRET_KEY } from '@env'

Omise.config(OMISE_SECRET_KEY, '2015-11-17');

export const createCardUser = async (email: string) => {
    try {
        const response = await Omise.createCustomer({ email });
        return response;

    } catch (error) {
        return null;
    }

}