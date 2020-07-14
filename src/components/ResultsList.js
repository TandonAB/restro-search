import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }

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
          return (
            <TouchableOpacity
              delayPressIn={1000}
              onPress={() =>
                navigation.navigate('ResultsShow', { id: item.restaurant.id })
              }
            >
              <ResultsDetail result={item.restaurant} />
            </TouchableOpacity>
          );
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

export default withNavigation(ResultsList);
