
import React from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardTypeOptions } from 'react-native';

interface InputProps {
    name: string,
    label: string,
    placeholder?: string,
    value: string,
    onChange: (value: string) => void,
    keyboardType?: string,
    format?: RegExp,
    replacement?: string
}

const Input = ({ label, placeholder, value, onChange, keyboardType, format, replacement = "$ " }: InputProps) => {
    return (<View>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={styles.input} value={value} onChangeText={(text) => {
            onChange(format ? text.replace(format, replacement) : text)
        }} placeholder={placeholder} keyboardType={keyboardType as KeyboardTypeOptions} /></View>)
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