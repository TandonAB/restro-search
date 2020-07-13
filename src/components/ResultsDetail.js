import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: result.thumb }} style={styles.image} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.rating}>
        {/* Star rating icon */}
        <Entypo
          name="star"
          size={14}
          color={`#${result.user_rating.rating_color}`}
        />{' '}
        <Text style={{ color: '#' + result.user_rating.rating_color }}>
          {result.user_rating.aggregate_rating}
        </Text>
        {'  |  '}
        {result.all_reviews_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 5,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 14,
  },
});

export default ResultsDetail;
