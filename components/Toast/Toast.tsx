import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

interface ToastProps {
    message: string, visible: boolean, onClose: () => void
}
const Toast = ({ message, visible, onClose }: ToastProps) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={() => onClose()}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.messageText}>{message}</Text>
                    <TouchableOpacity
                        style={styles.okButton}
                        onPress={() => onClose()}
                    >
                        <Text style={styles.okButtonText}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    messageText: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
    okButton: {
        backgroundColor: '#2196F3',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    okButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default Toast;
