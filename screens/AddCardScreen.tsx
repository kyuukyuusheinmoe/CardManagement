import React, { useState } from 'react';
import { View, StyleSheet, DimensionValue } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Card } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';
import { AddCardComponents } from '../constant/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import ImageComponent from '../components/Image';

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
    const [name, setName] = useState<string>('');
    const [type, setType] = useState<string>('');
    const [number, setNumber] = useState<string>('');
    const [expirationDate, setExpirationDate] = useState<string>('');

    const saveCard = async () => {
        const newCard: Card = {
            id: uuidv4(),
            name,
            type,
            number,
            expirationDate,
        };

        const storedCards = await AsyncStorage.getItem('cards');
        const cards = storedCards ? JSON.parse(storedCards) : [];
        cards.push(newCard);
        await AsyncStorage.setItem('cards', JSON.stringify(cards));

        navigation.navigate('CardList');
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                {AddCardComponents.map((component, index) => <View key={index} style={[styles.inputWrapper, { flexBasis: component.width as DimensionValue || '100%', }]}><Input {...component} /></View >)}
            </View>
            <View style={styles.imagesContainer}>
                {[require("../assets/verified-by-visa.png"), require("../assets/mastercard-securecode-grey.png"), require("../assets/omise-grey.png"),].map((img, index) => <ImageComponent imageSource={img} key={index} imageStyle={styles.image
                } />)}
            </View>
            <Button title="Add Card" onPress={() => navigation.navigate('AddCard')} style={styles.button} />
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
