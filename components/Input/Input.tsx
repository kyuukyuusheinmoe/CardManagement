
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface InputProps {
    name: string,
    label: string,
    placeholder?: string,
    width?: number
}

const Input = ({ label, placeholder, width }: InputProps) => {
    const [cardNumber, setCardNumber] = useState('');

    return (<View>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={styles.input} value={cardNumber} onChangeText={setCardNumber} placeholder={placeholder} /></View>)
}

const styles = StyleSheet.create({
    label: {
        fontWeight: "bold"
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        marginVertical: 8,
        borderRadius: 4,
    },
});

export default Input