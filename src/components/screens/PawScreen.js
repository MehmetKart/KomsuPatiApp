import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Text, TouchableHighlight } from 'react-native';
import styles from '../styles';
import HeaderStyles from '../HeaderStyles';

export default class PawScreen extends Component {
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
                        <Text style={HeaderStyles.headerTextContainer}>Pati Bilgileriniz</Text>
                        <View style={HeaderStyles.headerBellContainer}>
                            <Image source={require('../images/bellicon.png')} style={HeaderStyles.bellImage} />
                        </View>
                    </View>
                </View>
                <View style={styles.pawContainer}>
                    <View style={styles.itemContainer}>
                        <View style={styles.itemImageContainer}>
                        <Image source={require('../images/dog1.png')} style={styles.itemImage}/>
                        </View>
                        <View style={styles.itemNameContainer}>
                            <Text style={styles.itemNameText}>Milo</Text>
                        </View>
                        <View style={styles.itemButtonContainer}>
                            <TouchableOpacity style={styles.itemButton}>
                                <Text style={styles.itemButtonText}>Seç</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={styles.borderBottom} />
                    <View style={styles.itemContainer}>
                        <View style={styles.itemImageContainer}>
                        <Image source={require('../images/dog2.png')} style={styles.itemImage} />
                        </View>
                        <View style={styles.itemNameContainer}>
                            <Text style={styles.itemNameText}>Bobby</Text>
                        </View>
                        <View style={styles.itemButtonContainer}>
                            <TouchableOpacity style={styles.itemButton}>
                                <Text style={styles.itemButtonText}>Seç</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={styles.borderBottom} />
                </View>

                <View style={styles.pawButtonContainer}>
                    <TouchableOpacity style={styles.pawButton}>
                        <Text style={styles.pawText}>Pati Ekleyin</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}