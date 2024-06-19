import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Button from '../components/Button';
import CardListContainer from '../containers/CardListContainer';
import { AuthContext } from '../context/AuthContext';

type RootStackParamList = {
    CardList: undefined;
    AddCard: undefined;
};

type CardListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CardList'>;

type Props = {
    navigation: CardListScreenNavigationProp;
};

const CardListScreen: React.FC<Props> = ({ navigation }) => {
    const { customerData } = useContext(AuthContext)

    const cardList = customerData?.cards?.data?.length ? customerData.cards.data : []

    return (
        <View style={styles.container}>
            {cardList.length ? <CardListContainer cards={cardList} /> : <View style={styles.emptyContainer}>
                <Text>💳</Text>
                <Text>
                    No Cards Found
                </Text>
                <Text>
                    We recommend adding a card for easy payment
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
