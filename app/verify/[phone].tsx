import { View, Text, StyleSheet, Platform, Button, Alert, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '@/constants/colors'
import { Ionicons } from '@expo/vector-icons'

const Phone = () => {
    const onPressHandler = () => {
        console.log('button clicked')
    }
    return (
        <View style={styles.container}>
            <View style={{ marginVertical: 20, backgroundColor: colors.green, padding: 20, borderRadius: 100, }}>
                <Ionicons name="call-outline" size={24} color={'white'} />
            </View>
            <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>To automatically verify with a missed call to your phone:</Text>
            <View style={{ paddingHorizontal: 20 }}>
                <View style={styles.pointView}>
                    <Ionicons name="call-outline" size={24} color={colors.green} />
                    <Text style={styles.pointText}>Allow WhatsApp to manage this call so we can call your phone number and end the call automatically.</Text>
                </View>
                <View style={styles.pointView}>
                    <Ionicons name="people-outline" size={24} color={colors.green} />
                    <Text style={styles.pointText}>Allow WhatsApp to do a one-time check and access your call log so we can confirm that you receive the call.</Text>
                </View>
            </View>
            <View style={{ marginVertical: 20 }}>
                <Text style={{ fontSize: 14, color: colors.gray, textAlign: 'center' }}>Learn more about how you can manage your phone verification permissions.</Text>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => alert('Button Pressed!')}
            >
                <Text style={{ color: 'white', fontSize: 16 }}>Continue</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.verifyButton}
                onPress={() => alert('Button Pressed!')}
            >
                <Text style={{ color: colors.green, fontSize: 16 }}>Verify with SMS</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...Platform.select({
            ios: {
                flex: 1,
                padding: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
            },
            android: {
                flex: 1,
                padding: 20,
                backgroundColor: '#fff',
                height: '100%',
                // justifyContent: 'center',
                alignItems: 'center',
            },
            web: {
                flex: 1,
                padding: 20,
                // justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
            },
        }),

    },

    button: {
        margin: 10,
        width: '100%',
        alignItems: 'center',
        backgroundColor: colors.green,
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
    },
    pointView: {
        width: '100%',
        marginTop: 18,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    pointText: {
        fontSize: 14,
        textAlign: 'left'
    },
    verifyButton: {
        borderWidth: 1,
        color: colors.green,
        margin: 10,
        width: '100%',
        alignItems: 'center',
        borderColor: colors.green,
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
    }

})

export default Phone