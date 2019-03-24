import React from 'react';
import { ImageBackground, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import CustomHeader from '../CustomHeader';


export default class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            email: '',

        };
    }
    componentWillMount() {
        fetch(loginUrl)
            .then((res) => res.json())
            .then((resJson) => this.setState({
                name: resJson.user.name,
                surname: resJson.user.surname,
                email: resJson.user.email,
            })
            )
    }
    render() {
        return (
            <View style={styles.container}>
                <CustomHeader/>
                <View style={styles.profileContainer}>
                    <ImageBackground source={require('../images/background.jpg')} style={{ width: '100%', height: '100%', alignItems: 'center', }}>
                        <Image source={require('../images/profileimage.png')} style={{ width: 80, height: 80, marginTop: 10, }} />
                        <Text style={styles.nameSurnameText}>{this.state.name} {this.state.surname}</Text>
                        <Text style={styles.mailText}>{this.state.email}</Text>
                    </ImageBackground>
                </View>
                <View style={styles.buttonsContainer}>
                    <View style={styles.leftButtons}>
                        <TouchableOpacity style={styles.detailButton} onPress={() => this.props.navigation.navigate("DetailScreen")}>
                            <Text style={styles.detailButtonText}>Genel Bilgilerim</Text>
                            <MaterialIcons name="account-circle" size={24} style={styles.detailButtonIcon} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.detailButton} onPress={() => this.props.navigation.navigate("PawScreen")}>
                            <Text style={styles.detailButtonText}>Pati Bilgilerim</Text>
                            <Ionicons name="md-paw" size={24} style={styles.detailButtonIcon} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.detailButton} onPress={() => this.props.navigation.navigate("PawOwnerScreen")}>
                            <Text style={styles.detailButtonText}>Ödeme Bilgilerim</Text>
                            <Ionicons name="md-card" size={24} style={styles.detailButtonIcon} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rightButtons}>
                        <TouchableOpacity style={styles.detailButton}>
                            <Text style={styles.detailButtonText}>Bakıcı Bilgilerim</Text>
                            <Ionicons name="md-heart" size={24} style={styles.detailButtonIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.detailButton} onPress={() => this.props.navigation.navigate("HelpScreen")}>
                            <Text style={styles.detailButtonText}>Yardım</Text>
                            <Ionicons name="md-information-circle-outline" size={24} style={styles.detailButtonIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileContainer: {
        flex: 2,
    },
    nameSurnameText: {
        color: '#FFF',
        marginTop: 10,
        fontSize: 14,
    },
    mailText: {
        color: '#FFF',
        fontSize: 11,
    },
    buttonsContainer: {
        flex: 5,
        flexDirection: 'row',
    },
    leftButtons: {
        flex: 1,
        alignItems: 'center',
    },
    rightButtons: {
        flex: 1,
        alignItems: 'center',
    },
    detailButton: {
        flexDirection: 'row',
        width: 170,
        height: 50,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#9C9C9C',
        margin: 10,
    },
    detailButtonText: {
        flex: 2,
        color: '#9C9C9C',
        fontSize: 12,
        fontWeight: 'normal',
        margin: 7,
        marginLeft: 8,
    },
    detailButtonIcon: {
        flex: 2,
        color: '#9C9C9C',
        margin: 8,
        marginTop: 12,
        textAlign: 'right'
    },
});