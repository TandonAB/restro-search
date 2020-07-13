import axios from 'axios';

export default axios.create({
  baseURL: 'https://developers.zomato.com/api/v2.1',
  headers: {
    'user-key': '41a906d839d4a77ae87c9c4dea914401',
  },
});
