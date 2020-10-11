//import the screens
import Main from './components/Main';
import Chat from './components/Chat';

// Import React Navigation
import {create Stack Navigate} from 'react-navigation'

// create the navigate
const navigator = createStackNavigator ({
	Main : {screen:Main},
	Chat : {screen:Chat},
	});
// Export it as the root component
export default navigation

