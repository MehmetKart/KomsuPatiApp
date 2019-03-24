import React from 'react';
import { Image, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const CustomHeader = ({ customTitle}) => {
    return (
        <View style={headerStyles.container}>
            <View style={headerStyles.headerContainer}>
                <View style={headerStyles.headerBackContainer}>
                    <TouchableHighlight>
                        <Image source={require('./images/backarrow.png')} style={headerStyles.bellImage} />
                    </TouchableHighlight>
                </View>
                <Text style={headerStyles.headerTextContainer}>{customTitle}</Text>
                <View style={headerStyles.headerBellContainer}>
                    <Image source={require('./images/bellicon.png')} style={headerStyles.bellImage} />
                </View>
            </View>
        </View>
    );

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

export default CustomHeader;