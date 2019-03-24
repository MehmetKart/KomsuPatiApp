import React, { Component } from 'react';
import { Image, View, TouchableOpacity, TouchableHighlight,Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import styles from '../styles';
import HeaderStyles from '../HeaderStyles';


export default class DetailScreen extends Component {
    render() {
        return (

            <View style={styles.container}>
                <View style={HeaderStyles.container}>
                    <View style={HeaderStyles.headerContainer}>
                        <View style={HeaderStyles.headerBackContainer}>
                            <TouchableHighlight onPress={()=>this.props.navigation.navigate('Profil')}>
                                <Image source={require('../images/backarrow.png')} style={HeaderStyles.bellImage} />
                            </TouchableHighlight>
                        </View>
                        <Text style={HeaderStyles.headerTextContainer}>Bilgileriniz</Text>
                        <View style={HeaderStyles.headerBellContainer}>
                            <Image source={require('../images/bellicon.png')} style={HeaderStyles.bellImage} />
                        </View>
                    </View>
                </View>

                <ScrollView>
                    <View style={styles.detailImageContainer}>
                        <Image source={require('../images/profileimage.png')} style={{ width: 65, height: 65 }} />
                        <TouchableOpacity style={[styles.detailImageButton]}>
                            <Text style={styles.detailImageButtonText}>Değiştir</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.detailTypeContainer}>
                        <View style={styles.detailTypeTitleContainer}>
                            <Text style={styles.detailTypeTitleText}>KULLANICI TİPİ</Text>
                        </View>
                        <View style={styles.detailTypeButtonsContainer}>
                            <TouchableOpacity style={styles.detailTypeButtons}>
                                <Text style={styles.detailText}>Pati Sahibi</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.detailTypeButtons}>
                                <Text style={styles.detailText}>Pati Bakıcı</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.detailTypeActiveButton}>
                                <Text style={styles.detailActiveText}>İkiside</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.detailInfoContainer}>
                        <View style={styles.borderBottom}>
                            <View style={styles.detailNameSurname}>
                                <TextInput style={{ width: '45%', borderWidth: 1, paddingLeft: 2, borderBottomColor: '#9C9C9C', borderColor: 'rgba(255, 255, 255, 0)' }} placeholder="Adınız" />
                                <TextInput style={{ width: '45%', borderWidth: 1, paddingLeft: 2, borderBottomColor: '#9C9C9C', borderColor: 'rgba(255, 255, 255, 0)' }} placeholder="Soyadınız" />
                            </View>
                            <TextInput style={{ margin: 5, marginBottom: 20, marginLeft: 15, width: '93%', borderWidth: 1, paddingLeft: 2, borderBottomColor: '#9C9C9C', borderColor: 'rgba(255, 255, 255, 0)' }} placeholder="E-mail adresiniz" />
                        </View>
                        <View style={styles.borderBottom}>
                            <Text style={styles.detailTypeTitleText}>ŞİFREYİ DEĞİŞTİR</Text>
                            <TextInput style={{ alignItems: 'center', margin: 5, marginLeft: 15, width: '93%', borderWidth: 1, paddingLeft: 2, borderBottomColor: '#9C9C9C', borderColor: 'rgba(255, 255, 255, 0)' }} placeholder="Eski Şifreniz" />

                            <TextInput style={{ margin: 5, marginLeft: 15, width: '93%', borderWidth: 1, paddingLeft: 2, borderBottomColor: '#9C9C9C', borderColor: 'rgba(255, 255, 255, 0)' }} placeholder="Yeni Şifreniz" />
                            <TextInput style={{ margin: 5, marginLeft: 15, marginBottom: 10, width: '93%', borderWidth: 1, paddingLeft: 2, borderBottomColor: '#9C9C9C', borderColor: 'rgba(255, 255, 255, 0)' }} placeholder="Yeni Şifreniz Tekrar" />
                            <Text style={styles.passwordText}>Şifremi Unuttum</Text>
                        </View>
                    </View>
                    <View style={styles.detailSaveButtonContainer}>
                        <TouchableOpacity style={styles.detailSaveButton}>
                            <Text style={styles.detailSaveButtonText}>Kaydet</Text>

                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}


const headerStyles = StyleSheet.create({
    container: {
        height: 70,
        width: '100%',
    },

    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#2DC2AE',
        alignItems: 'center',
    },
    headerBackContainer: {
        flex: 1,
        marginLeft: 20,
        marginTop: 15,
    },
    headerTextContainer: {
        flex: 6,
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '400',
        marginTop: 15,
    },
    headerBellContainer: {
        flex: 1,
        marginLeft: 20,
        marginTop: 15,
    },
}
);