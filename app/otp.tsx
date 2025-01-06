import { View, Text, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router';
import colors from '@/constants/colors';

const Otp = () => {
    const [loading, setLoading] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const router = useRouter();
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 0;
    return (
        <KeyboardAvoidingView>
            <View style={styles.container}>
                <Text style={styles.description}>
                    Whatsapp will need to verify your account. Carrier charges may apply.
                </Text>
                <View style={styles.list}>
                    <View style={styles.listItem}>

                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 80,
        color: colors.gray
    },
    list: {
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 10,
        padding: 10
    },
    listItem: {
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 10,
        padding: 10
    }
})

export default Otp