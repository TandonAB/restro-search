import React, { useState, useEffect } from 'react';
import zomato from '../api/zomato';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await zomato.get('/search', {
        params: {
          entity_id: 4,
          entity_type: 'city',
          q: searchTerm,
        },
      });
      setResults(response.data.restaurants);
      // console.log(results);
      setErrorMessage('');
    } catch (error) {
      console.log(error);
      setErrorMessage('Something went wrong! Please try later.');
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [results, errorMessage, searchApi];
};
