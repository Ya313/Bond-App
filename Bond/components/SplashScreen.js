import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignUp');
    }, 3000); // 3 seconds delay
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../Bond pics/BondLogo.jpg")}
        style={styles.logo} // Apply the style to adjust the size
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Optional: change the background color
  },
  logo: {
    width: 700, // Adjust the width as needed
    height: 700, // Adjust the height as needed
    resizeMode: 'contain' // This ensures the aspect ratio is preserved
  },
});

export default SplashScreen;

