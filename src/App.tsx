// import React from 'react';
// import Expo from 'expo';
import { AppNavigator } from './navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';

export const App = createAppContainer(AppNavigator);

// const prefix = Expo.Linking.makeUrl('/');

// export const MainApp = () => <App uriPrefix={prefix} />;