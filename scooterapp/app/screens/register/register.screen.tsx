/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, ScrollView, View, ImageBackground, Text} from 'react-native';
import { Appbar, Button, TextInput } from 'react-native-paper';
import { HeaderComponent } from '../../components/header/header.component';
import { registerStyle} from './register.style';
const image = { uri: 'https://img.freepik.com/free-vector/account-concept-illustration_114360-399.jpg?t=st=1653554707~exp=1653555307~hmac=01e9d54d6abcf37a63e262ff255630ccab2c0a15a26905f9693d7f4b9bdf7acb&w=826' };
export const RegisterScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <HeaderComponent title="Register Test"/>
          <View style={registerStyle.content}>
          <TextInput label="Name"/>
          <TextInput label="Email" keyboardType="email-address"/>
          <TextInput label="Password" secureTextEntry={true} right={<TextInput.Icon name="eye-off-outline" color={registerStyle.icon.color}/>}/>
          <TextInput label="Confirm Password" secureTextEntry={true} right={<TextInput.Icon name="eye-off-outline" color={registerStyle.icon.color}/>}/>
          <TextInput label="Phone Number" keyboardType="phone-pad"/>
          <Button mode="contained" style={registerStyle.button}>Register</Button>
          <ImageBackground source={image} style={registerStyle.image} resizeMode="cover"><Text style={registerStyle.text}>WELCOME</Text></ImageBackground>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};
