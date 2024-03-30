import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginPage');
    }, 3000); // 3 seconds delay
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../Bond pics/BondLogo.jpg")}
        style={styles.logo} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 700, 
    height: 700,
    resizeMode: 'contain'
  },
});

export default SplashScreen;

