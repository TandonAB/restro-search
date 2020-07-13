import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, errorMessage, searchApi] = useResults();

  /**
   * Filter results by price to show
   * different categories of restaurants
   */
  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.restaurant.price_range === price;
    });
  };

  const checkError =
    results.length === 0 ? '#000' : errorMessage ? '#f00' : '#0a0';

  const city = 'Bangalore';

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#DAF7A6" />
      <View style={{ paddingBottom: 10 }}>
        <SearchBar
          searchTerm={searchTerm}
          onSearchTermChange={setSearchTerm}
          onSearchTermSubmit={() => searchApi(searchTerm)}
        />
        <Text style={[styles.searchResultCount, { color: checkError }]}>
          {errorMessage
            ? errorMessage
            : `We have found ${results.length} result at ${city}`}
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ResultsList title="Cost Effective" results={filterResultsByPrice(2)} />
        <ResultsList title="Bit Pricer" results={filterResultsByPrice(3)} />
        <ResultsList title="Big Spender" results={filterResultsByPrice(4)} />
      </ScrollView>
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchResultCount: {
    marginHorizontal: 16,
    fontStyle: 'italic',
    fontSize: 12,
  },
});
