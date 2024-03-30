import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Alert, Image } from 'react-native';

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    Alert.alert('Success', 'You have signed up successfully');
  };

  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        source={require('../Bond pics/BondLogo.jpg')}
        style={styles.logo}
      />
      <Text style={styles.title}>Log In</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

       {/* Forgot Password Link */}
       <Text style={styles.forgotPassword} onPress={() => Alert.alert('Redirect', 'Forgot Password Clicked')}>
        Forgot password?
      </Text>

       {/* Division with "OR" Text */}
       <View style={styles.dividerContainer}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.dividerLine} />
      </View>

      {/* Create New Account Button */}
      <TouchableOpacity style={styles.newAccountButton} onPress={() => Alert.alert('Redirect', 'Create New Account Clicked')}>
        <Text style={styles.newAccountButtonText}>Create new account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF',
  },
  logo: {
    width: 500, // Set the width of the image
    height: 200, // Set the height of the image
    marginBottom: 10, // Add some margin to space out the elements
  },
  title: {
    fontSize: 24,
    color: '#000000',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000000',
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#0FC1DF',
    padding: 10,
    borderRadius: 5,
    marginbottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  forgotPassword: {
    color: '#0FC1DF',
    marginTop: 15,
  },
  newAccountButton: {
    backgroundColor: '#FF8F49', 
    padding: 10,
    borderRadius: 5,
  },
  newAccountButtonText: {
    color: '#fff',
  },
});

export default LoginPage;

