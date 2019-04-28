import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../screens/CameraScreen';
import GalleryScreen from '../screens/GalleryScreen';
import EventDetailsScreen from '../screens/EventDetailsScreen';
import EventScreen from '../screens/EventScreen'
import DoneScreen from '../screens/DoneScreen'

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Camera: {screen: CameraScreen},
  Gallery: {screen: GalleryScreen},
  EventDetails: {screen: EventDetailsScreen},
  Event: {screen: EventScreen},
  Done: {screen: DoneScreen}
},
{
    initialRouteName: 'Home',
    headerMode: 'none',
    cardStyle: {backgroundColor: 'transperent', shadowColor:'transperent'},
    transitionConfig: () => ({
      containerStyle: {
        backgroundColor: 'transperent',
      },
    }),
  },

);

const AppNav = createAppContainer(MainNavigator);

export default AppNav;