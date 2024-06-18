import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Card } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../components/Button';
import CardListContainer from '../containers/CardListContainer';

type RootStackParamList = {
    CardList: undefined;
    AddCard: undefined;
};

type CardListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CardList'>;

type Props = {
    navigation: CardListScreenNavigationProp;
};

const CardListScreen: React.FC<Props> = ({ navigation }) => {
    const [cards, setCards] = useState<Card[]>([
        {
            "id": "card_test_5y7g6uc6a44m1z7wy3s",
            "brand": "Visa",
            "last_digits": "4242",
            "expiration_month": 12,
            "expiration_year": 2024,
            "country": "US",
            "fingerprint": "1asdb3d2332f4fg5g",
            "name": "Card Holder Name",
        }
    ]);

    useEffect(() => {
        const loadCards = async () => {
            const storedCards = await AsyncStorage.getItem('cards');
            if (storedCards) {
                setCards(JSON.parse(storedCards));
            }
        };
        loadCards();
    }, []);

    return (
        <View style={styles.container}>
            {cards.length ? <CardListContainer cards={cards} /> : <View style={styles.emptyContainer}>
                <Text>💳</Text>
                <Text>
                    No Cards Found
                </Text>
                <Text>
                    We recommend adding a cardfor easy payment
                </Text>
                    <Button title="Add New Card" onPress={() => navigation.navigate('AddCard')} textStyle={{ color: "#4AD8DA" }} />
            </View>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#fff"
    },
    emptyContainer: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: 16,
        fontSize: 18
    },
    card: {
        padding: 16,
        backgroundColor: '#fff',
        marginBottom: 8,
        borderRadius: 8,
        elevation: 1,
    },

});

export default CardListScreen;
