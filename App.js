import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
  },
  {
    initialRouteName: 'Search',
    // headerMode: 'none',
    defaultNavigationOptions: {
      title: 'Restaurants Search',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 16,
      },
      headerStyle: {
        backgroundColor: '#DAF7A6',
      },
      cardStyle: {
        backgroundColor: '#fff',
      },
    },
  }
);

export default createAppContainer(navigator);
