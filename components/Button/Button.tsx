import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, StyleProp, ViewStyle, TextStyle } from 'react-native';

interface TextButtonProps {
    onPress: (event: GestureResponderEvent) => void;
    title: string;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}


const Button = ({ onPress, title, style, textStyle }: TextButtonProps) => {
    return (<TouchableOpacity onPress={onPress} style={[styles.button, style]}>
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>)
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#ffffff',
    },
});

export default Button;