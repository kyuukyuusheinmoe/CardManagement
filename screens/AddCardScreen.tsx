import React, { useContext } from 'react';
import { View, StyleSheet, DimensionValue } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { AddCardComponents } from '../constant/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import ImageComponent from '../components/Image';
import { useForm } from '../hooks/useForm';
import { createCardToken, updateCardUser } from '../services/customer';
import { AuthContext } from '../context/AuthContext';

type RootStackParamList = {
    CardList: undefined;
    AddCard: undefined;
};

type AddCardScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddCard'>;
type AddCardScreenRouteProp = RouteProp<RootStackParamList, 'AddCard'>;

type Props = {
    navigation: AddCardScreenNavigationProp;
    route: AddCardScreenRouteProp;
};

const AddCardScreen: React.FC<Props> = ({ navigation }) => {
    const { formData, setForm } = useForm();
    const { customerData, updateCards } = useContext(AuthContext)

    const handleFormChange = (name: string, value: string) => {
        setForm({ [name]: value })
    }

    const handleSubmit = async () => {
        const [month, year] = formData.expiryDate?.split("/")
        const result = await createCardToken({
            name: formData.name,
            number: formData.number,
            expiration_month: +month,
            expiration_year: +year,
            security_code: +formData.security_code,
        })
        if (result?.id && customerData?.id) {
            const response = await updateCardUser(customerData.id, result.id)
            if (response) {
                updateCards?.(response.cards)
                navigation.navigate('Cards' as keyof RootStackParamList)
            }
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                {AddCardComponents.map((component, index) => <View key={index} style={[styles.inputWrapper, { flexBasis: component.width as DimensionValue || '100%', }]}><Input {...component} value={formData[component.name]} onChange={(value) => handleFormChange(component.name, value)} /></View >)}
            </View>
            <View style={styles.imagesContainer}>
                {[require("../assets/verified-by-visa.png"), require("../assets/mastercard-securecode-grey.png"), require("../assets/omise-grey.png"),].map((img, index) => <ImageComponent imageSource={img} key={index} imageStyle={styles.image
                } />)}
            </View>
            <Button title="Add Card" onPress={handleSubmit} style={styles.button} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#fff"
    },
    formContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    inputWrapper: {
        paddingHorizontal: 8,
        flexGrow: 1,
        marginBottom: 15,
    },
    imagesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
        marginVertical: 16
    },
    image: {
        width: 50,
        height: 25,
        resizeMode: 'contain',
    },
    button: {
        position: "absolute",
        bottom: 20,
        left: 20, // Adjust left padding as needed
        right: 20,
        flexGrow: 1,
        borderRadius: 30,
        backgroundColor: "#4AD8DA",
    }
});

export default AddCardScreen;
