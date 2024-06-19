import { ReactNode } from 'react';
import { View, TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native';

interface CardProps {
    header: ReactNode,
    body: ReactNode
    onPress: (event: GestureResponderEvent) => void
}
const CardComponent = ({ header, body, onPress }: CardProps) => {
    return (<TouchableOpacity style={styles.card} onPress={onPress}><View>
        {header}
        {body}
    </View></TouchableOpacity>)
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

export default CardComponent;