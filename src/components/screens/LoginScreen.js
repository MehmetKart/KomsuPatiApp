import React, { Component } from 'react';
import { ImageBackground, TextInput, View, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';
import styles from '../styles';



const myImageUrl = require('../images/background.jpg')

export default class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            loginUrl: '',
        }
    }

    onLoginPress = () => {
        return fetch('http://jpara.prodrom.com/api/account/login?email=' + this.state.email + '&password=' + this.state.password)
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.result == 'ok') {
                    loginUrl = 'http://jpara.prodrom.com/api/account/login?email=' + this.state.email + '&password=' + this.state.password;
                    console.log(loginUrl)
                    this.props.navigation.navigate('Harita');
                }
                else {
                    alert('Login Failed.')
                }
            })
    }
    render() {
        return (
            <KeyboardAvoidingView styles={styles.loginContainer} behavior="padding" enabled>
                <ImageBackground source={myImageUrl} style={{ width: '100%', height: '100%' }}>
                    <View style={styles.buttonContainer}>
                        <TextInput style={styles.loginInput} placeholder="E-mail adresiniz" onChangeText={email => this.setState({ email })} value={this.state.email} />
                        <TextInput style={styles.loginInput} secureTextEntry={true} placeholder="Şifreniz" onChangeText={password => this.setState({ password })} value={this.state.password} />
                        <Text style={{ color: '#FFF', textDecorationLine: 'underline' }}>Şifremi unuttum</Text>
                        <TouchableOpacity style={[styles.Button, styles.registerButton]} onPress={this.onLoginPress}>
                            <Text style={styles.textButton}>Üye Girişi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.Button, styles.facebookButton]}>
                            <Text style={styles.facebookTextButton}>Facebook ile bağlanın</Text>
                        </TouchableOpacity>
                        <Text style={{ color: '#FFF', textDecorationLine: 'underline' }}>ben zaten üyeyim</Text>
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        );
    }
}