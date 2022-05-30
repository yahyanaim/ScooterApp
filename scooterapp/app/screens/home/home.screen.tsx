/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView } from 'react-native';
import MapView from 'react-native-maps';
import { homeStyle } from './home.style';
// import { Title } from 'react-native-paper';

const HomeScreen = () => {
    return (
        <SafeAreaView style={homeStyle.flex}>
           <MapView
       style={homeStyle.flex}
       initialRegion={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}/>  
        </SafeAreaView>
    );
};

export default HomeScreen;
