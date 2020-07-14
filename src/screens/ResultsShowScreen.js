import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import zomato from '../api/zomato';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const getId = navigation.getParam('id');

  const getSingleRestaurant = async (id) => {
    try {
      const response = await zomato.get(`/restaurant`, {
        params: {
          res_id: getId,
        },
      });
      setResult(response.data);
    } catch (error) {
      console.log(error);
      setErrorMessage(error);
    }
  };

  useEffect(() => {
    getSingleRestaurant(getId);
  }, []);

  if (!result) {
    return null;
  }

  const getHeader = () => {
    return (
      <>
        <Image source={{ uri: result.thumb }} style={styles.image} />
        <Text style={styles.title}>{result.name}</Text>
        <Text style={styles.name}>Average Cost For Two </Text>
        <Text>
          {result.currency} {result.average_cost_for_two}
        </Text>
        <Text style={styles.name}>Cuisines</Text>
        <Text>{result.cuisines}</Text>
        <Text style={styles.name}>Timings</Text>
        <Text>{result.timings}</Text>
        <Text style={styles.name}>Highlights</Text>
      </>
    );
  };

  return (
    <>
      <View style={styles.container}>
        {errorMessage ? (
          <Text>{errorMessage}</Text>
        ) : (
          <FlatList
            data={result.highlights}
            keyExtractor={(it) => it}
            renderItem={({ item }) => {
              return <Text>{item}</Text>;
            }}
            ListHeaderComponent={getHeader}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 4,
    marginVertical: 5,
    alignSelf: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'blue',
  },
  name: {
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default ResultsShowScreen;
