// import React from 'react';
// import Expo from 'expo';
import { AppNavigator } from './navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';

const App = createAppContainer(AppNavigator);

export default App;

// const prefix = Expo.Linking.makeUrl('/');

// export const MainApp = () => <App uriPrefix={prefix} />;