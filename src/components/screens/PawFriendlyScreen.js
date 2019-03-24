import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Text, TextInput, TouchableHighlight } from 'react-native';
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
                    <TouchableOpacity style={styles.tabsOne} onPress={() => this.props.navigation.navigate('PawOwnerScreen')}>
                        <Text style={styles.tabsOneText}>Pati Sahibi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabsTwo}>
                        <Text style={styles.tabsTwoText}>Pati Dostu</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.borderBottom} />
                <View style={styles.ibanContainer}>
                    <View style={styles.ibanInputContainer}>
                        <TextInput style={styles.ibanInput} placeholder="Iban numarası giriniz." />
                    </View>
                    <View style={styles.ibanTextContainer}>
                        <Text style={styles.ibanText}>Kazançlarınızın size gönderilmesi için banka IBAN bilgisi giriniz.</Text>
                    </View>
                    <View style={styles.ibanButtonContainer}>
                        <TouchableOpacity style={styles.ibanButton}>
                            <Text style={styles.ibanButtonText}>Güncelle</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.borderBottom} />
                <View style={styles.historyContainer}>
                    <View style={styles.historyPaymentContainer}>
                        <View style={styles.columnContainer}>
                            <View style={styles.oneRowContainer}>
                                <Text style={styles.historyPaymentTitle}>TOPLAM KAZANILAN</Text>
                                <Text style={styles.historyPaymentText}>1500 TL</Text>
                            </View>
                            <View style={styles.twoRowContainer}>
                                <Text style={styles.historyPaymentTitle}>YATIRILACAK MİKTAR</Text>
                                <Text style={styles.historyPaymentText}>350 TL</Text>
                            </View>
                        </View>
                        <View style={styles.columnContainer}>
                            <View style={styles.oneRowContainer}>
                                <Text style={styles.historyPaymentTitle}>HESABINIZA GEÇECEĞİ GÜN</Text>
                                <Text style={styles.historyPaymentText}>23.08.2018</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.historyListContainer}>
                        <View style={styles.listContainer}>

                            <View style={styles.historyList}>
                                <Text style={styles.historyPaymentTitle}>GEÇMİŞ ÖDEMELERİNİZ</Text>
                                <Text style={styles.listText}>Yapılan Ödemeler İşaretlenmiştir.</Text>
                                <View style={styles.borderBottom} />
                            </View>

                            <View style={styles.historyList}>
                                <View style={styles.rowText}>
                                    <Text style={[styles.listText, styles.leftRowText]}>Büyük Irk Köpek, Hande Ataman</Text>
                                    <Text style={[styles.listText, styles.rightRowText]}>18 TL</Text>
                                </View>
                                <Text style={styles.listText}>18.07.2018</Text>
                                <Text style={styles.listText}>Gezdirme</Text>
                                <View style={styles.borderBottom} />
                            </View>

                            <View style={styles.historyList}>
                                <View style={styles.rowText}>
                                    <Text style={[styles.listText, styles.leftRowText]}>Küçük Irk Köpek, Recep Altındağ</Text>
                                    <Text style={[styles.listText, styles.rightRowText]}>80 TL</Text>
                                </View>
                                <Text style={styles.listText}>20.07.2018 - 22.07.2018</Text>
                                <Text style={styles.listText}>Gezdirme</Text>
                                <View style={styles.borderBottom} />
                            </View>


                            <View style={styles.historyList}>
                                <View style={styles.rowText}>
                                    <Text style={[styles.listText, styles.leftRowText]}>Kedi, Hande Ataman</Text>
                                    <Text style={[styles.listText, styles.rightRowText]}>40 TL</Text>
                                </View>
                                <Text style={styles.listText}>15.07.2018</Text>
                                <Text style={styles.listText}>Gezdirme</Text>
                                <View style={styles.borderBottom} />
                            </View>
                        </View>


                    </View>
                </View>
            </View>
        );
    }
}