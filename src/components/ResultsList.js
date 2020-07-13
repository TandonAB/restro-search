import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {/* <Text>Results : {results.length}</Text> */}
      <FlatList
        horizontal
        contentContainerStyle={{ paddingRight: 16 }}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.restaurant.id}
        renderItem={({ item }) => {
          return <ResultsDetail result={item.restaurant} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    // marginTop: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 5,
  },
});

export default ResultsList;
