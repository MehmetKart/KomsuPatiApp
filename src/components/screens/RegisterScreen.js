import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Text, TextInput } from 'react-native';
import styles from '../styles';

export default class RegisterScren extends Component {
    constructor() {
        super()
        this.state= {
            name: '',
            surname: '',
            email: '',
            password: '',
            phonenumber: '05001234567',
        }
    }

    onRegisterPress = () => {
        return fetch('http://jpara.prodrom.com/api/account/register?name='+this.state.name+'&surname='+this.state.surname+'&email='+this.state.email+'&password='+this.state.password+'&telephone='+this.state.phonenumber)
          .then((response) => response.json())
          .then((responseJson) => {
            if (responseJson.result == 'ok') {
              alert('Register is successfully')
              this.props.navigation.navigate('Login');
            }
            else {
              alert('Register failed.')
            }
          })
          .catch((error) => {
            alert(error)
          });
      }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.facebookContainer}>
                    <TouchableOpacity style={[styles.Button, styles.facebookButton]}>
                        <Text style={styles.facebookTextButton}>Facebook ile bağlanın</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.profileImageContainer}>
                    <Image source={require('../images/profileimage.png')} style={{ width: 80, height: 80 }} />
                    <TouchableOpacity style={[styles.addProfileImageButton]}>
                        <Text style={styles.addProfileImageText}>Profil Resmi Ekleyin</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.nameSurnameContainer}>
                        <TextInput style={styles.registerNameSurnameText} placeholder="Adınız" onChangeText={name => this.setState({ name })} />
                        <TextInput style={styles.registerNameSurnameText} placeholder="Soyadınız" onChangeText={surname => this.setState({ surname })}/>
                    </View>
                    <TextInput style={styles.registerPasswordEmailText} secureTextEntry={true} placeholder="Şifreniz" onChangeText={password => this.setState({ password })}/>
                    <TextInput style={styles.registerPasswordEmailText} placeholder="E-mail adresiniz" onChangeText={email => this.setState({ email })}/>

                    <View style={styles.userTypeContainer}>
                        <View style={styles.userTypeTitleContainer}>
                            <Text style={styles.userTypeTitleText}>KULLANICI TİPİ</Text>
                        </View>
                        <View style={styles.userTypeButtonsContainer}>
                            <TouchableOpacity style={[styles.userTypeButtons]}>
                                <Text style={styles.userTypeText}>Pati Sahibi</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.userTypeButtons]}>
                                <Text style={styles.userTypeText}>Pati Bakıcı</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.userTypeButtons]}>
                                <Text style={styles.userTypeText}>İkiside</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.confirmContainer}>
                    <Text style={styles.registerText}> Üye olarak <Text style={{ color: '#60CDB7', textDecorationLine: 'underline' }}>kullanım koşulları</Text>nı ve <Text style={{ color: '#60CDB7', textDecorationLine: 'underline' }}>gizlilik sözleşmemiz</Text>i okuyup</Text>
                    <Text style={styles.registerText}> kabul etmiş oluyorsunuz</Text>
                    <TouchableOpacity style={[styles.userConfirmButton]}>
                        <Text style={styles.userConfirmButtonText}>Üye Ol</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

