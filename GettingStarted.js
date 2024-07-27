import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const GettingStarted = ({ navigation }) => {
  return (
    <ImageBackground
      source={{ uri: 'https://live.staticflickr.com/65535/51520814969_b2dc2c75fd.jpg' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}></Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 30,
  },
  text: {
    fontSize: 40,
    marginBottom: 20,
    color: 'red',
  },
  button: {
    backgroundColor: '#f39c12',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default GettingStarted;