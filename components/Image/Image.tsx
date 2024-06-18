import React from 'react';
import { Image, StyleSheet, GestureResponderEvent, StyleProp, ImageStyle, ViewStyle } from 'react-native';

interface ImageComponentProps {
    imageSource: any
    style?: StyleProp<ViewStyle>;
    imageStyle?: StyleProp<ImageStyle>;
}

const ImageComponent = ({ imageSource, imageStyle }: ImageComponentProps) => {
    return (
        <Image source={imageSource} style={[styles.image, imageStyle]} alt='Image' />
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 350,
        height: 350,
        resizeMode: 'contain',
    },
});

export default ImageComponent;