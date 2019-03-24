    const styles = {
        container: {
            flex: 1,
        },
        logoContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        buttonContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        Button: {
            width: '80%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
            marginBottom: 20,
        },
        registerButton: {
            backgroundColor: '#FFFFFF',
        },
        loginButton: {
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
        },
        facebookButton: {
            backgroundColor: '#4167B2',
        },
        textButton: {
            color: '#47CACF',
            fontSize: 20,
        },
        facebookTextButton: {
            color: '#FFFFFF',
            fontSize: 20,
        },

        //LoginScreen//

        loginContainer: {
            flex:1,
            justifyContent: 'center',
            alignItems: 'center'
        },

        loginInput: {
            margin: 15, 
            width: '93%',
            borderWidth: 1, 
            paddingLeft: 2, 
            borderBottomColor: '#FFF', 
            borderColor: 'rgba(255, 255, 255, 0)'
        },

      
        //Register Screen//

        facebookContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
        },
        profileImageContainer: {
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
        },

        addProfileImageButton: {
            width: 150,
            height: 35,
            borderRadius: 4,
            borderWidth: 1,
            borderColor: '#9C9C9C',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10
        },
        addProfileImageText: {
            color: '#9C9C9C',
            fontSize: 13,
        },

        formContainer: {
            flex: 5,
        },
        nameSurnameContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 15,
        },

        registerNameSurnameText: {
            width: '45%', 
            borderWidth: 1, 
            paddingLeft: 2, 
            borderBottomColor: '#9C9C9C', 
            borderColor: 'rgba(255, 255, 255, 0)'

        },
        registerPasswordEmailText: {
            margin: 15, 
            width: '93%', 
            borderWidth: 1, 
            paddingLeft: 2, 
            borderBottomColor: '#9C9C9C',
             borderColor: 'rgba(255, 255, 255, 0)'

        },

        userTypeContainer: {
            flex: 1,
            borderWidth: 1,
            borderColor: 'rgba(255, 255, 255, 0)',
            borderTopColor: '#EDEDED',
            borderBottomColor: '#EDEDED',
        },
        userTypeTitleContainer: {
            flex: 1,
            justifyContent: 'center',

        },
        userTypeTitleText: {
            fontSize: 14,
            fontWeight: '500',
            color: '#58C0C1',
            marginLeft: 19,
            marginTop: 5,
        },
        userTypeButtonsContainer: {
            flex: 3,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
        },
        userTypeButtons: {
            width: 100,
            height: 35,
            borderRadius: 4,
            borderWidth: 1,
            borderColor: '#9C9C9C',
            justifyContent: 'center',
            alignItems: 'center',
        },
        userTypeText: {
            color: '#9C9C9C',
            fontSize: 13,
        },

        confirmContainer: {
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
        },

        registerText: {
            color: '#9C9C9C',
            fontSize: 13,
        },
        userConfirmButton: {
            width: '80%',
            height: 50,
            backgroundColor: '#D6D6D6',
            borderRadius: 4,
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
        },
        userConfirmButtonText: {
            color: '#F8F8F8',
            fontSize: 15,
        },


        //DetailScreen//
        detailImageContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 10,
        },
        detailImageButton: {
            width: 60,
            height: 25,
            borderRadius: 4,
            borderWidth: 1,
            borderColor: '#9C9C9C',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10
        },


        detailTypeContainer: {
            flex: 1,
            borderWidth: 1,
            borderColor: 'rgba(255, 255, 255, 0)',
            borderTopColor: '#EDEDED',
            borderBottomColor: '#EDEDED',
        },
        detailTypeTitleContainer: {
            flex: 1,

        },
        detailTypeTitleText: {
            fontSize: 14,
            color: '#58C0C1',
            marginLeft: 19,
            marginTop: 10,
            marginBottom: 10
        },
        detailTypeButtonsContainer: {
            flex: 3,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginBottom: 20,
        },
        detailTypeButtons: {
            width: 110,
            height: 35,
            borderRadius: 4,
            borderWidth: 1,
            borderColor: '#9C9C9C',
            justifyContent: 'center',
            alignItems: 'center',
        },
        detailText: {
            color: '#9C9C9C',
            fontSize: 13,
        },

        detailTypeActiveButton: {
            width: 120,
            height: 30,
            borderRadius: 4,
            backgroundColor: '#2DC2AE',
            justifyContent: 'center',
            alignItems: 'center',
        },
        detailActiveText: {
            color: '#FFFFFF',
            fontSize: 13,
        },


        detailImageButtonText: {
            fontSize: 12,
            color: '#9C9C9C',
        },
        detailInfoContainer: {
            flex: 3,
        },
        borderTop: {
            borderWidth: 1,
            borderColor: 'rgba(255, 255, 255, 0)',
            borderTopColor: '#EDEDED',
        },
        borderBottom: {
            borderWidth: 1,
            borderColor: 'rgba(255, 255, 255, 0)',
            borderBottomColor: '#EDEDED',
        },

        detailNameSurname: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 15,
        },
        passwordText: {
            fontSize: 12,
            textDecorationLine: 'underline',
            marginTop: 20,
            marginBottom: 20,
            color: '#9c9c9c',
            alignSelf: 'center',
        },
        detailSaveButtonContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            marginBottom: 20,
        },
        detailSaveButton: {
            width: 200,
            height: 35,
            borderRadius: 4,
            backgroundColor: '#2DC2AE',
            justifyContent: 'center',
            alignItems: 'center',
        },
        detailSaveButtonText: {
            color: '#FFFFFF',
            fontSize: 13,
        },

        //PawScreen//
        pawContainer: {
            flex: 2,

        },
        itemContainer: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        itemImageContainer: {
            flex: 2,
        },
        itemImage: {
            width: 80,
            height: 80,
            margin: 20,
        },
        itemNameContainer: {
            flex: 5,
            marginLeft: 35,
        },
        itemNameText: {
            color: '#9C9C9C',
        },
        itemButtonContainer: {
            flex: 2,
            alignItems: 'center',
        },
        itemButton: {
            width: 70,
            height: 35,
            borderRadius: 4,
            borderWidth: 1,
            borderColor: '#9C9C9C',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 25,
        },
        itemButtonText: {
            color: '#9C9C9C',
            fontSize: 12,
            fontWeight: '200',
        },

        pawButtonContainer: {
            flex: 3,
            justifyContent: 'flex-end',
            alignItems: 'center',
        },
        pawButton: {
            width: '70%',
            height: 40,
            borderRadius: 4,
            backgroundColor: '#2DC2AE',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
        },
        pawText: {
            color: '#FFFFFF'
        },
        //HelpScreen//
        helpContainer: {
            flex: 3,
        },
        contactContainer: {
            flex: 1,
            marginLeft: 40,
            marginRight: 40,
        },
        commentContainer: {
            flex: 1,
        },

        contactTitleText: {
            fontSize: 14,
            color: '#58C0C1',
            marginTop: 15,
        },

        infoText: {
            fontSize: 14,
            color: '#9C9C9C',
        },

        helpButtonContainer: {
            flex: 5,
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: 20,
        },
        //PawOwnerScreen//
        tabsButtonContainer: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        cardContainer: {
            flex: 3,
        },
        tabsButtonOne: {
            width: '40%',
            height: 40,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            backgroundColor: '#2DC2AE',
            justifyContent: 'center',
            alignItems: 'center',
        },
        tabsButtonOneText: {
            color: '#FFFFFF'
        },
        tabsButtonTwo: {
            width: '40%',
            height: 40,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            borderWidth: 1,
            borderColor: '#2DC2AE',
            justifyContent: 'center',
            alignItems: 'center',
        },
        tabsButtonTwoText: {
            color: '#2DC2AE'
        },
    
        pawTabsButtonOne: {
            width: '40%',
            height: 40,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            borderWidth: 1,
            borderColor: '#2DC2AE',
            justifyContent: 'center',
            alignItems: 'center',
        },
        pawTabsButtonOneText: {
            
            color: '#2DC2AE'
        },
        pawTabsButtonTwo: {
            width: '40%',
            height: 40,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            backgroundColor: '#2DC2AE',
            justifyContent: 'center',
            alignItems: 'center',
        },
        pawTabsButtonTwoText: {
            color: '#FFFFFF'
        },

        card: {
            flex: 1,
            flexDirection: 'row',
        },

        cardLogo: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        cardInfo: {
            flex: 3,
            justifyContent: 'center',
            marginLeft: 10,
        },
        cardInfoText: {
            color: '#9C9C9C'
        },
        cardNameInfoText: {
            fontSize: 12,
        },
        cardButtonContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        cardButton: {
            width: '70%',
            height: 35,
            borderRadius: 4,
            justifyContent: 'center',
            alignItems: 'center',
        },
        cardButtonActive: {
            backgroundColor: '#2DC2AE',
        },
        cardButtonActiveText: {
            color: '#FFFFFF'
        },
        cardButtonDeactive: {
            borderWidth: 1,
            borderColor: '#9C9C9C',
        },
        cardButtonDeactiveText: {
            color: '#9C9C9C'
        },
        pawOwnerButtonContainer: {
            flex: 4,
            justifyContent: 'flex-end',
            alignItems: 'center',
        },

        //PawFriendlyScreen//
        ibanContainer:{
            flex:2,
        },
        ibanInputContainer:{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        ibanInput:{
            borderWidth: 1,
            margin: 10,
            width: '93%',
            paddingLeft: 2, 
            borderBottomColor: '#9C9C9C', 
            borderColor: 'rgba(255, 255, 255, 0)',
        },
        ibanTextContainer:{
            flex:1,
        },
        ibanText:{
            fontSize: 13,
            color: '#9C9C9C',
            marginLeft:20,
        },
        ibanButtonContainer:{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        ibanButton: {
            width: '60%',
            height: 40,
            backgroundColor: '#BFBFBF',
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom:20,
        },
        ibanButtonText: {
            color: '#FFFFFF',
            fontSize:13,
        },
        historyContainer: {
            flex:5,
        },
        historyPaymentContainer: {
            flex:1,
            flexDirection: 'row',
            marginLeft: 20,
        },   
        historyPaymentTitle:{
            fontSize: 13,
            color: '#58C0C1',
            fontWeight: 'bold',
            marginTop:10,
        },
        historyPaymentText: {
            fontSize:18,
            color: '#9c9c9c',
            fontWeight: '500',
        },
        
        columnContainer:{
            flex: 1,
        },
        oneRowContainer:{
            flex:1,

        },
        twoRowContainer:{
            flex:1,
        },

        historyListContainer: {
            flex:2,
        },
        listContainer: {
          flex:1,
          backgroundColor: '#FCFCFC' 
       
        },
        historyList:{
            flex:1,
            marginLeft: 20,
        },
        listText: {
            color: '#A0A0A0',
            fontSize:12,
        },
        rowText: {
            flexDirection: 'row',
        },
        leftRowText: {
            flex:8,
        },
        rightRowText: {
            flex:1,
            marginRight:15,
        },

        tabsOne: {
            width: '40%',
            height: 40,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            borderWidth: 1,
            borderColor: '#2DC2AE',
            justifyContent: 'center',
            alignItems: 'center',
        },
        tabsOneText: {
            color: '#2DC2AE'
        },
        tabsTwo: {
            width: '40%',
            height: 40,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            backgroundColor: '#2DC2AE',
            
            justifyContent: 'center',
            alignItems: 'center',
        },
        tabsTwoText: {
            color: '#FFFFFF'
        },

    };
    export default styles;