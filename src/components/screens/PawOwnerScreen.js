import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Text, TouchableHighlight } from 'react-native';
import styles from '../styles';
import HeaderStyles from '../HeaderStyles';

export default class PawOwnerScreen extends Component {
    render() {
        return (

            <View style={styles.container}>
                <View style={HeaderStyles.container}>
                    <View style={HeaderStyles.headerContainer}>
                        <View style={HeaderStyles.headerBackContainer}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('Profil')}>
                                <Image source={require('../images/backarrow.png')} style={HeaderStyles.bellImage} />
                            </TouchableHighlight>
                        </View>
                        <Text style={HeaderStyles.headerTextContainer}>Ödeme Bilgileriniz</Text>
                        <View style={HeaderStyles.headerBellContainer}>
                            <Image source={require('../images/bellicon.png')} style={HeaderStyles.bellImage} />
                        </View>
                    </View>
                </View>
                <View style={styles.tabsButtonContainer}>
                    <TouchableOpacity style={styles.tabsButtonOne}>
                        <Text style={styles.tabsButtonOneText}>Pati Sahibi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabsButtonTwo} onPress={() => this.props.navigation.navigate('PawFriendlyScreen')}>
                        <Text style={styles.tabsButtonTwoText}>Pati Dostu</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.borderBottom} />
                <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        <View style={styles.cardLogo}>
                            <Image source={require('../images/mastercard.png')} style={{ width: 90, height: 90, }} />
                        </View>
                        <View style={styles.cardInfo}>
                            <Text style={styles.cardInfoText}>Hande Ataman</Text>
                            <Text style={[styles.cardInfoText, styles.cardNameInfoText]}>T.İş Bankası Mastercard</Text>
                            <Text style={styles.cardInfoText}>145386551099****</Text>
                        </View>
                        <View style={styles.cardButtonContainer}>
                            <TouchableOpacity style={[styles.cardButton, styles.cardButtonActive]}>
                                <Text style={styles.cardButtonActiveText}>Seçili</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.borderBottom} />
                    <View style={styles.card}>
                        <View style={styles.cardLogo}>
                            <Image source={require('../images/mastercard.png')} style={{ width: 90, height: 90, }} />
                        </View>
                        <View style={styles.cardInfo}>
                            <Text style={styles.cardInfoText}>Hande Ataman</Text>
                            <Text style={[styles.cardInfoText, styles.cardNameInfoText]}>Garanti Bankası Mastercard</Text>
                            <Text style={styles.cardInfoText}>145386551099****</Text>
                        </View>
                        <View style={styles.cardButtonContainer}>
                            <TouchableOpacity style={[styles.cardButton, styles.cardButtonDeactive]}>
                                <Text style={styles.cardButtonDeactiveText}>Seç</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.borderBottom} />
                </View>
                <View style={styles.pawOwnerButtonContainer}>
                
                    <TouchableOpacity style={styles.pawButton}>
                        <Text style={styles.pawText}>Kart Ekle</Text>
                    </TouchableOpacity>
                
                
                
                </View>
            </View>
        );
    }
}