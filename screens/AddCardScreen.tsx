// screens/AddCardScreen.tsx
import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Card } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';
import { AddCardComponents } from '../constant/Card';
import Input from '../components/Input';

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
            {AddCardComponents.map(component => <Input {...component} />)}
            <Button title="Save Card" onPress={saveCard} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    input: {
        borderWidth: 1.5,
        borderColor: '#E6E3E6',
        padding: 10,
        marginVertical: 8,
        borderRadius: 5,
    },
});

export default AddCardScreen;
