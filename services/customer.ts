import Omise from 'omise-react-native';
import { OMISE_PUBLIC_KEY, OMISE_SECRET_KEY } from '@env'

Omise.config(OMISE_PUBLIC_KEY, OMISE_SECRET_KEY, '2017-11-12');

console.log("xxx OMISE_PUBLIC_KEY, OMISE_SECRET_KEY ", OMISE_PUBLIC_KEY, OMISE_SECRET_KEY)

export const createCustomer = async (email: string) => {


    try {
        const data = await Omise.createCustomer({
            email
        });
        console.log('xxx data', JSON.stringify(data));

    } catch (error) {
        console.log('xxx error', error);

    }

}