/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
//import { LoginScreen } from './app/screens/login/login.screen';
import {theme} from './App.style';
import HomeScreen from './app/screens/home/home.screen';
// import { RegisterScreen } from './app/screens/register/register.screen';


const App = () => {
  return (
    <PaperProvider theme={theme}>
    {/* <LoginScreen/> */}
    {/* <RegisterScreen/> */}
    {<HomeScreen/>}
    </PaperProvider>
  );
};

export default App;
