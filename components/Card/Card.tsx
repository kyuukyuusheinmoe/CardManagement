import { ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CardProps {
    header: ReactNode,
    body: ReactNode

}
const Card = ({ header, body }: CardProps) => {
    return (<View style={styles.card}>
        {header}
        {body}
    </View>)
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    cardText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Card;