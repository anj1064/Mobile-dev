import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, Image, ImageBackground } from 'react-native';
import { FavoriteContext } from '../FavoriteContext';

const FavoriteScreen = () => {
  const { favorites, removeFavorite } = useContext(FavoriteContext);

  return (
    <ImageBackground
      source={{ uri: 'https://mrburgy.com/cdn/shop/files/retail-cta_1600x.jpg?v=1686597797' }}
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.text}>Favorite Items!</Text>
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text>{item.description}</Text>
                <View style={styles.buttonContainer}>
                  <Button
                    title="Buy"
                    onPress={() => console.log(`Buying ${item.name}`)}
                  />
                  <Button
                    title="Remove from Favorites"
                    onPress={() => removeFavorite(item.id)}
                  />
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    padding: 16,
  },
  text: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center',
    color: 'yellow',
  },
  card: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  cardContent: {
    marginLeft: 16,
    justifyContent: 'center',
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    marginHorizontal: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});

export default FavoriteScreen;