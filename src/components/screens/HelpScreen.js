import React, { Component } from 'react';
import { View, TouchableOpacity, Text, TextInput,TouchableHighlight, Image } from 'react-native';
import styles from '../styles';
import HeaderStyles from '../HeaderStyles';

export default class HelpScreen extends Component {
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
                        <Text style={HeaderStyles.headerTextContainer}>Yardım</Text>
                        <View style={HeaderStyles.headerBellContainer}>
                            <Image source={require('../images/bellicon.png')} style={HeaderStyles.bellImage} />
                        </View>
                    </View>
                </View>
                <View style={styles.helpContainer}>
                    <View style={styles.contactContainer}>
                        <Text style={styles.contactTitleText}>BİZE ULAŞIN</Text>
                        <Text style={styles.infoText}>Sorularınızı veya yorumlarınızı aşağıda paylaşıp bize gönderin. Biz de en kısa zamanda size cevap yazalım.</Text>
                    </View>
                    <View style={styles.borderBottom}></View>
                    <View style={styles.commentContainer}>
                        <Text style={{ fontSize: 9, marginTop: 20, marginLeft:20, marginRight:20, color: '#9c9c9c', }}>Yorumlarınızı yazın</Text>
                        <TextInput multiline = {true} style={{ width: '94%', marginLeft:20, marginRight:20, marginBottom:20, borderWidth: 1, paddingLeft: 2, borderBottomColor: '#9C9C9C', borderColor: 'rgba(255, 255, 255, 0)' }} 
                        placeholder="Yorumunuz" />
                    </View>
                    <View style={styles.borderBottom}></View>
                </View>


                <View style={styles.helpButtonContainer}>
                    <TouchableOpacity style={styles.pawButton}>
                        <Text style={styles.pawText}>Gönder</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}