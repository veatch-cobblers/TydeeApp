import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../screens/CameraScreen';
import GalleryScreen from '../screens/GalleryScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Camera: {screen: CameraScreen},
  Gallery: {screen: GalleryScreen},
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