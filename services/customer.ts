import Omise from 'omise-react-native';
import { OMISE_SECRET_KEY, OMISE_PUBLIC_KEY } from '@env'

export const createCardUser = async (email: string) => {
    Omise.config(OMISE_SECRET_KEY, '2015-11-17');
    try {
        const response = await Omise.createCustomer({ email });
        return response;

    } catch (error) {
        return null;
    }
}

export const updateCardUser = async (customerId: string, cardToken: string) => {
    Omise.config(OMISE_SECRET_KEY, '2015-11-17');
    try {
        const response = await Omise.updateCustomer(customerId, { card: cardToken });

        return response;

    } catch (error) {
        return null;
    }
}

export const createCardToken = async (card: {
    name: string,
    number: string,
    expiration_month: number,
    expiration_year: number,
    security_code: number
}) => {
    Omise.config(OMISE_PUBLIC_KEY, '2015-11-17');
    try {
        const response = await Omise.createToken({
            card
        });
        return response;

    } catch (error) {
        return null;
    }
}
