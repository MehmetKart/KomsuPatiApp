import React, { Component } from 'react';
import { ImageBackground, Image, View, TouchableOpacity, Text } from 'react-native';
import styles from '../styles';

export default class FirstScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
            <ImageBackground source={require('../images/background.jpg')} style={{ width: '100%', height: '100%' }}>
                <View style={styles.logoContainer}>
                    <Image source={require('../images/logo.png')} style={{ width: 173, height: 163 }} />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.Button, styles.registerButton]} onPress={()=>this.props.navigation.navigate('Register')}>
                        <Text style={styles.textButton}>Üye Ol</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.Button, styles.loginButton]} onPress={()=>this.props.navigation.navigate('Login')}>
                        <Text style={styles.textButton}>Üye Girişi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.Button, styles.facebookButton]}>
                        <Text style={styles.facebookTextButton}>Facebook ile bağlanın</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
        );
    }
}

