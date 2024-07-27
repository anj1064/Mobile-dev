import React, { useState, useContext } from 'react';
import { View, Text, Button, StyleSheet, SectionList, Image, ImageBackground, TextInput } from 'react-native';
import { FavoriteContext } from '../FavoriteContext';

const sectionsData = [
  {
    title: 'Chinese',
    data: [
      {
        id: '1',
        name: 'Noodles',
        description: 'Stir-fried noodles with vegetables and soy sauce - Rs 335',
        image: 'https://th.bing.com/th/id/R.5c428fae072c382ce9f0d3e313e420f8?rik=uVcejZq2uh7GRw&riu=http%3a%2f%2ftskfood.com%2fblog%2fwp-content%2fuploads%2f2017%2f08%2fshutterstock_390095566.jpg&ehk=iJy7oGZtEL2bNLdhIuRCFGvFps1nfTbqPmnH7JzvQek%3d&risl=&pid=ImgRaw&r=0',
      },
      {
        id: '2',
        name: 'Fried Rice',
        description: 'Fried rice with vegetables and a touch of garlic - Rs 380',
        image: 'https://th.bing.com/th/id/OIP.NWqDqY03A8J3qVFM8IHfTAHaFj?rs=1&pid=ImgDetMain',
      },
    ],
  },
  {
    title: 'Indian',
    data: [
      {
        id: '3',
        name: 'Butter Chicken',
        description: 'Creamy butter chicken with rich spices and gravy - Rs 400',
        image: 'https://th.bing.com/th/id/R.b28ff6049366841606c6365c4fcd2a80?rik=NQvYD9PP6eAZrw&riu=http%3a%2f%2frasamalaysia.com%2fwp-content%2fuploads%2f2015%2f07%2fbutter-chicken2.jpg&ehk=Syu2cJurPsYjPbSR%2bXsMv5c9m6Og1piX0CbxUWTSaHs%3d&risl=&pid=ImgRaw&r=0',
      },
      {
        id: '4',
        name: 'Paneer Tikka',
        description: 'Delicious grilled paneer tikka loaded with spices - Rs 220',
        image: 'https://www.bombayblues.uk/file/serve/82fb59f929d793110dfc52f2a220f358',
      },
    ],
  },
  {
    title: 'Beverages',
    data: [
      {
        id: '5',
        name: 'Mango Lassi',
        description: 'Refreshing and cool mango lassi with yogurt - Rs 150',
        image: 'https://www.cookclickndevour.com/wp-content/uploads/2016/05/mango-lassi-recipe-a-630x1024.jpg',
      },
      {
        id: '6',
        name: 'Masala Chai',
        description: 'Spiced tea with milk and herbs - Rs 90',
        image: 'https://th.bing.com/th/id/OIP.zKPuGr_5y6fWiNk2LjCtZgHaFj?rs=1&pid=ImgDetMain',
      },
    ],
  },
  {
    title: 'Continental',
    data: [
      {
        id: '7',
        name: 'Caesar Salad',
        description: 'Classic Caesar salad with crispy croutons and parmesan - Rs 350',
        image: 'https://th.bing.com/th/id/OIP.QmHw_37gNHByVUGMekg3awHaHa?rs=1&pid=ImgDetMain',
      },
      {
        id: '8',
        name: 'Beef Stroganoff',
        description: 'Tender beef strips in a creamy mushroom sauce - Rs 500',
        image: 'https://th.bing.com/th/id/OIP.Mi7Z6tu_p4rwDCOifEooHQHaLG?w=1000&h=1499&rs=1&pid=ImgDetMain',
      },
    ],
  },
  {
    title: 'Italian',
    data: [
      {
        id: '9',
        name: 'Margherita Pizza',
        description: 'Classic pizza with tomato, mozzarella, and basil - Rs 290',
        image: 'https://d2lswn7b0fl4u2.cloudfront.net/photos/pg-margherita-pizza-1611491820.jpg',
      },
      {
        id: '10',
        name: 'Tiramisu',
        description: 'Delicious coffee-flavored Italian dessert - Rs 200',
        image: 'https://th.bing.com/th/id/OIP.PUtVCGjYekdsCCjiYvoBPAHaE7?rs=1&pid=ImgDetMain',
      },
    ],
  },
];

const backgroundImage = 'https://th.bing.com/th/id/R.f1d34ca46068ac06ada69247cfe2bf2f?rik=ewFCzQVQ9ob%2bYQ&riu=http%3a%2f%2fmenu-covers.org%2fwp-content%2fuploads%2f2013%2f05%2fgreen-sky-background-backdrop.jpg&ehk=zpu9EK9Y2ifBeJF3GnLXBp%2flN9kBb4jfgjuGqZsOJDM%3d&risl=&pid=ImgRaw&r=0'; 

const ProductPage = ({ route, navigation }) => {
  const { userName } = route.params;
  const { addFavorite } = useContext(FavoriteContext);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSections = sectionsData.filter(section => 
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.data.some(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const formatDescription = (description) => {
    const priceMatch = description.match(/- Rs \d+/);
    if (priceMatch) {
      const [price] = priceMatch;
      const [text, pricePart] = description.split(price);
      return (
        <Text>
          {text}
          <Text style={styles.boldText}>{price}</Text>
        </Text>
      );
    }
    return <Text>{description}</Text>;
  };

  return (
    <ImageBackground source={{ uri: backgroundImage }} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to the Menu, {userName}!</Text>
        
        <TextInput
          style={styles.searchInput}
          placeholder="Search categories..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        
        <SectionList
          sections={filteredSections}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                {formatDescription(item.description)}
                <View style={styles.buttonContainer}>
                  <View style={styles.button}>
                    <Button
                      title="Buy"
                      onPress={() => console.log(`Buying ${item.name}`)}
                      color="#1E90FF"
                    />
                  </View>
                  <View style={styles.button}>
                    <Button
                      title="Add to Favorites"
                      onPress={() => addFavorite(item)}
                      color="#32CD32" 
                    />
                  </View>
                  <View style={styles.button}>
                    <Button
                      title="Go to Favorites"
                      onPress={() => navigation.navigate('Favorites')} 
                      color="#FF6347"
                    />
                  </View>
                </View>
              </View>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
        />
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
    padding: 16,
  },
  text: {
    fontSize: 35,
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: '#f4f4f4',
    padding: 8,
    marginBottom: 5,
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
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 8,
    backgroundColor: '#fff', 
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default ProductPage;