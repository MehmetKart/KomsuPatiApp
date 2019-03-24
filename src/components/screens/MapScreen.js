import React, { Component } from 'react';
import { Modal, Image, View, StyleSheet, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import { MapView } from 'expo';
import Calendar from 'react-native-calendar-select';
import moment from 'moment';

export default class MapScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            email: '',
            startDate: new Date(2019, 1, 1),  
            endDate: new Date(2019, 1, 2),
            dateRange: 'Tarihler',

        };
        this.confirmDate = this.confirmDate.bind(this);
        this.openCalendar = this.openCalendar.bind(this);
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

    confirmDate({ startDate, endDate }) {
        this.setState({
            startDate,
            endDate, 
            dateRange: moment(startDate).format("DDMMM") +'-'+moment(endDate).format("DDMMM"),  
        });
    }
    openCalendar() {
        this.calendar && this.calendar.open();
    }

    render() {
        let color = {
            subColor: '#f0f0f0'
        };
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <View style={styles.welcomeContainer}>
                        <View style={styles.imageContainer}>
                            <Image source={require('../images/profileimage.png')} style={styles.profileImage} />
                        </View>
                        <View style={styles.textContainer}>
                            <View style={styles.welcomeTextContainer}>
                                <Text style={styles.welcomeText} >Merhaba,</Text>
                            </View>
                            <View style={styles.nameTextContainer}>
                                <Text style={styles.nameText}>{this.state.name} {this.state.surname}</Text>
                            </View>
                        </View>
                        <View style={styles.iconContainer}>
                            <Image source={require('../images/bellicon.png')} style={styles.bellImage} />
                        </View>
                    </View>
                    <View style={styles.searchContainer}>
                        <View style={styles.searchInputContainer}>
                            <TextInput placeholder="Yakınımda" style={styles.searchInput} />
                        </View>
                        <View style={styles.searchButtonsContainer}>
                            <View style={styles.dateButtonContainer}>
                                <TouchableOpacity style={[styles.Button, styles.dateButton]}>
                                    <Text style={styles.ButtonText}>{this.state.dateRange}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.typeButtonContainer}>
                                <TouchableOpacity style={[styles.Button, styles.typeButton]}>
                                    <Text style={styles.ButtonText}>Bakım Türü</Text>
                                </TouchableOpacity>

                            </View>
                            <View style={styles.menuiconContainer}>
                                <View style={styles.menuIcon}>
                                    <Image source={require('../images/menuicon.png')} style={styles.bellImage} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.mapContainer}>
                    <MapView
                        style={{ flex: 1 }}
                        initialRegion={{
                            latitude: 37.875398,
                            longitude: 32.489166,
                            latitudeDelta: 0.001,
                            longitudeDelta: 0.009,
                        }}>
                        <MapView.Marker
                            coordinate={{ latitude: 37.875398, longitude: 32.489166, }}
                            onPress={this.openCalendar}
                        >
                            <Image source={require('../images/marker.png')} />
                        </MapView.Marker>
                    </MapView>
                    <Calendar
                        i18n="en"
                        ref={(calendar) => { this.calendar = calendar; }}
                        color={color}
                        format="YYYYMMDD"
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onConfirm={this.confirmDate}
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    image: {
        width: '100%',
        height: '100%',
    },


    container: {
        flex: 1,
    },
    topContainer: {
        backgroundColor: '#2DC2AE',
        flex: 3,
    },

    mapContainer: {
        backgroundColor: '#2DC2AE',
        flex: 7,
    },
    welcomeContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginLeft: 10,
    },
    textContainer: {
        flex: 4,
        marginLeft: 10,
    },
    iconContainer: {
        flex: 1,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeTextContainer: {
        flex: 3,
        justifyContent: 'flex-end',
    },
    nameTextContainer: {
        flex: 2,
    },
    welcomeText: {
        fontSize: 15,
        color: 'white',
    },
    nameText: {
        fontSize: 13,
        color: 'white',
    },
    profileImage: {
        height: 50,
        width: 50,
        marginTop: 20,
    },
    bellImage: {
        marginTop: 20,
    },

    searchContainer: {
        flex: 1,
    },
    searchInputContainer: {
        flex: 1,
        alignItems: 'center',
    },
    searchInput: {
        backgroundColor: 'white',
        width: '90%',
        height: 35,
        borderRadius: 4,
        paddingLeft: 10,
    },
    searchButtonsContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    dateButtonContainer: {
        flex: 2,
        color: 'red',
    },
    typeButtonContainer: {
        flex: 2,
        color: 'red',
    },
    menuiconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    Button: {
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        marginLeft: 20,
    },
    ButtonText: {
        fontSize: 13,
        color: '#ffffff',
        fontWeight: '300',
    },
    dateButton: {
        width: '90%',
    },
    typeButton: {
        width: '70%',
    },
    menuIcon: {
        marginBottom: 37,
    },
});
