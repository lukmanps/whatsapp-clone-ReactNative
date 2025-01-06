import { View, Text, StyleSheet, Image, Platform, TouchableOpacity, Linking } from 'react-native'
import welcomeImage from '@/assets/images/welcome.png';
import colors from '@/constants/colors';
import { Link } from 'expo-router';


let welcome_image = welcomeImage;

if (Platform.OS !== 'web') {
  welcome_image = Image.resolveAssetSource(welcomeImage).uri;
}

const Page = () => {
  const openLink = () => {
    Linking.openURL('https://www.whatsapp.com/legal/privacy-policy');
  }

  const sendOTP = async () => {

  }

  const trySignin = async () => {
    
  }

  return (
    <View style={styles.container}>
      <Image source={welcomeImage} style={{ width: 300, height: 300 }} />
      <Text style={styles.headline}>Welcome to Whatsapp Clone</Text>
      <Text style={styles.description}>
        Read our {' '}
        <Text style={styles.link} onPress={openLink}>Privacy Policy</Text>
        <Text style={styles.link} onPress={openLink}>Terms of Service</Text>
      </Text>
      <Link href='/otp' replace asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Agree & Continue</Text>
        </TouchableOpacity>
      </Link>
    </View>
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
  welcome: {
    width: '100%',
    height: 300,
    marginBottom: 80
  },
  headline: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 80,
    color: colors.gray
  },
  link: {
    color: colors.primary
  },
  button: {
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 22,
    color: colors.primary,
    fontWeight: 'bold',
  }
})

export default Page
