import DropDown from '@/components/inputs/DropDown';
import colors from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Linking,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    ActivityIndicator,
    Alert,
} from 'react-native';
import MaskInput from 'react-native-mask-input';
// import { isClerkAPIResponseError, useSignIn, useSignUp } from '@clerk/clerk-expo';

const GER_PHONE = [
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
];
const Otp = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('India');
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 0;
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    // const { signUp, setActive } = useSignUp();
    // const { signIn } = useSignIn();

    const openLink = () => {
        Linking.openURL('https://www.whatsapp.com/legal/privacy-policy');
    };

    const sendOTP = async () => {
        console.log('sendOTP', phoneNumber);
        // setLoading(true);
        router.push(`/verify/${phoneNumber}`);

        try {
            // await signUp!.create({
            //     phoneNumber,
            // });
            // console.log('TESafter createT: ', signUp!.createdSessionId);

            // signUp!.preparePhoneNumberVerification();

            // console.log('after prepare: ');
            // router.push(`/verify/${phoneNumber}`);
        } catch (err: any) {
            console.log('error', JSON.stringify(err, null, 2));

            // if (isClerkAPIResponseError(err)) {
            //     if (err.errors[0].code === 'form_identifier_exists') {
            //         // User signed up before
            //         console.log('User signed up before');
            //         await trySignIn();
            //     } else {
            //         setLoading(false);
            //         Alert.alert('Error', err.errors[0].message);
            //     }
            // }
        }
    };

    const trySignIn = async () => {
        console.log('trySignIn', phoneNumber);

        const { supportedFirstFactors } = await signIn!.create({
            identifier: phoneNumber,
        });

        const firstPhoneFactor: any = supportedFirstFactors.find((factor: any) => {
            return factor.strategy === 'phone_code';
        });

        const { phoneNumberId } = firstPhoneFactor;

        await signIn!.prepareFirstFactor({
            strategy: 'phone_code',
            phoneNumberId,
        });

        // router.push(`/verify/${phoneNumber}?signin=true`);
        setLoading(false);
    };

    const countries = [
        'India',
        'Germany',
        'United States',
        'United Kingdom',
        'France',
        'Spain',
        'Italy',
        'Netherlands',
        'Belgium',
        'Switzerland',
        'Austria',
        'Denmark',
        'Sweden',
        'Norway',
        'Finland',
        'Iceland',
        'Ireland',
        'Portugal',
        'Greece',
        'Cyprus',
        'Czech Republic',
        'Slovakia',
        'Poland',
    ]

    return (
        <KeyboardAvoidingView
            keyboardVerticalOffset={keyboardVerticalOffset}
            style={{ flex: 1 }}
            behavior="padding">
            {loading && (
                <View style={[StyleSheet.absoluteFill, styles.loading]}>
                    <ActivityIndicator size="large" color={colors.primary} />
                    <Text style={{ fontSize: 18, padding: 10 }}>Sending code...</Text>
                </View>
            )}

            <View style={styles.container}>
                <Text style={styles.description}>
                    WhatsApp will need to verify your phone number. Carrier charges may apply.
                </Text>

                <View style={styles.list}>
                    {/* <View style={styles.listItem}>
                        <Text style={styles.listItemText}>Germany</Text>
                        <Ionicons name="chevron-down" size={20} color={colors.green} />
                    </View> */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <DropDown
                            options={countries}
                            selectedValue={selectedCountry}
                            onSelect={setSelectedCountry}
                            placeHolder="Select a country"
                            dropdownStyle={styles.listItem}
                        />
                        <Ionicons name="chevron-down" size={20} color={colors.green} />
                    </View>
                    <View style={styles.separator} />

                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 10 }}>+91</Text>
                        <MaskInput
                            value={phoneNumber}
                            keyboardType="numeric"
                            autoFocus
                            placeholder="Enter your phone number"
                            onChangeText={(masked, unmasked) => {
                                setPhoneNumber(masked);
                            }}
                            mask={GER_PHONE}
                            style={styles.input}
                        />
                    </View>
                </View>

                <Text style={styles.legal}>
                    You must be{' '}
                    <Text style={styles.link} onPress={openLink}>
                        at least 16 years old
                    </Text>{' '}
                    to register. Learn how WhatsApp works with the{' '}
                    <Text style={styles.link} onPress={openLink}>
                        Meta Companies
                    </Text>
                    .
                </Text>

                <View style={{ flex: 1 }} />

                <TouchableOpacity
                    style={[styles.button, phoneNumber !== '' ? styles.enabled : null, { marginBottom: 20 }]}
                    onPress={sendOTP}
                >
                    <Text style={[styles.buttonText, phoneNumber !== '' ? styles.enabled : null]}>Next</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
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
                backgroundColor: '#fff',
                padding: 20,
                // margin: 15,
                // borderRadius: 10,
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            },
            web: {
                flex: 1,
                padding: 20,
                margin: 15,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
            },
        }),

    },
    description: {
        ...Platform.select({
            ios: {
                fontSize: 20,
                textAlign: 'center',
                marginBottom: 5,
                color: colors.gray
            },
            android: {
                fontSize: 14,
                textAlign: 'center',
                marginBottom: 5,
                color: colors.gray
            },
            web: {
                fontSize: 16,
                textAlign: 'center',
                marginBottom: 5,
                color: colors.gray
            }
        })
    },
    list: {
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 10,
        padding: 10
    },
    listItem: {
        ...Platform.select({
            ios: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 6,
                marginBottom: 10
            },
            android: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 6,
                marginBottom: 10
            },
            web: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 6,
                marginBottom: 10
            },

        })

    },
    listItemText: {
        fontSize: 18,
        color: colors.gray
    },
    seperator: {
        width: '100%',
        // height: StyleSheet.hairlineWidth,
        backgroundColor: colors.green,
        opacity: 0.5
    },
    link: {
        color: colors.primary
    },
    legal: {
        fontSize: 12,
        marginHorizontal: 10,
        textAlign: 'center',
        color: '#000'
    },
    button: {
        margin: 10,
        width: '100%',
        alignItems: 'center',
        backgroundColor: colors.lightGray,
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
    },
    enabled: {
        backgroundColor: colors.green,
        color: '#fff',
    },
    buttonText: {
        color: colors.gray,
        fontSize: 22,
        fontWeight: '500',
    },
    separator: {
        width: '100%',
        height: 0.5,
        backgroundColor: colors.green,
        opacity: 0.5,
    },
    input: {
        backgroundColor: '#fff',
        width: '80%',
        fontSize: 18,
        padding: 6,
        marginTop: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.green,
    },

    loading: {
        zIndex: 10,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Otp