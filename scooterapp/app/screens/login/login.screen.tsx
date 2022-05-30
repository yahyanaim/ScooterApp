/* eslint-disable prettier/prettier */

import React from 'react';
import { Button, Card, TextInput } from 'react-native-paper';
import { Text } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import { SafeAreaView, View } from 'react-native';
import { loginStyle } from './login.style';

export const LoginScreen = () => {
    return (
    <SafeAreaView style={loginStyle.content}>
        <View style={loginStyle.view}>
        <Card>
                <Card.Title title="Scooter App" titleStyle={loginStyle.cardTitle}></Card.Title>
                <Card.Content>
                    <TextInput label="Email" keyboardtype="email-adress"></TextInput>
                    <TextInput label="Password" secureTextEntry={true}></TextInput>
                    <Button style={loginStyle.cardButton}>Forget Email OR Password</Button>
                    <Button style={loginStyle.cardButton}mode="contained">Login</Button>
                    <Button style={loginStyle.cardButton}>Rgeister</Button>
                </Card.Content>
            </Card>
        </View>    
     </SafeAreaView>
    );
}

