import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Switch, TouchableOpacity } from 'react-native';

const Welcome = ({ navigation, userName }) => {
  const [isBackgroundImage, setIsBackgroundImage] = useState(false);

  const handleToggleSwitch = () => {
    setIsBackgroundImage(previousState => !previousState);
  };

  const backgroundImageUri1 = 'https://th.bing.com/th/id/OIP.M_upduzmzqIyPx9m4ShGiwAAAA?rs=1&pid=ImgDetMain';
  const backgroundImageUri2 = 'https://th.bing.com/th/id/OIP.xxfCNCWaBFm0ozFivZTqzAAAAA?rs=1&pid=ImgDetMain';

  return (
    <ImageBackground
      source={isBackgroundImage ? { uri: backgroundImageUri2 } : { uri: backgroundImageUri1 }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.text}>Welcome, {userName} To FOODER!!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ProductPage', { userName })}
        >
          <Text style={styles.buttonText}>Go to Menu</Text>
        </TouchableOpacity>
        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Background Image</Text>
          <Switch
            value={isBackgroundImage}
            onValueChange={handleToggleSwitch}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
  },
  switchText: {
    marginRight: 10,
    fontSize: 30,
  },
});

export default Welcome;