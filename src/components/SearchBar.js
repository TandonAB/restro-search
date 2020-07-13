import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ searchTerm, onSearchTermChange, onSearchTermSubmit }) => {
  return (
    <View style={styles.backgroundView}>
      <Feather name="search" style={styles.searchIcon} />
      {/* <Text>Search Bar</Text> */}
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        value={searchTerm}
        onChangeText={onSearchTermChange}
        onEndEditing={onSearchTermSubmit}
        style={styles.searchInput}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  backgroundView: {
    marginTop: 16,
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 6,
    marginHorizontal: 16,
    flexDirection: 'row',
    borderWidth: 0.2,
  },
  searchIcon: {
    fontSize: 34,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
  },
});
