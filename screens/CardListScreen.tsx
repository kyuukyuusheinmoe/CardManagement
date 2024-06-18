import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Card } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../components/Button';

type RootStackParamList = {
    CardList: undefined;
    AddCard: undefined;
};

type CardListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CardList'>;

type Props = {
    navigation: CardListScreenNavigationProp;
};

const CardListScreen: React.FC<Props> = ({ navigation }) => {
    const [cards, setCards] = useState<Card[]>([]);

    useEffect(() => {
        const loadCards = async () => {
            const storedCards = await AsyncStorage.getItem('cards');
            if (storedCards) {
                setCards(JSON.parse(storedCards));
            }
        };
        loadCards();
    }, []);

    const renderCard = ({ item }: { item: Card }) => (
        <View style={styles.card}>
            <Text>{item.name}</Text>
            <Text>{item.type}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            {cards.length ? <FlatList
                data={cards}
                renderItem={renderCard}
                keyExtractor={(item) => item.id}
            /> : <View style={styles.emptyContainer}>
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
