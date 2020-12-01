import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	FlatList,
	Alert,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Image,
	Modal,
	TextInput,
	ToastAndroid,
	YellowBox
} from 'react-native';
import firebaseConfig from '../firebase/firebase.js';
import { windowHeight, windowWidth } from '../utils/Dimensions';
export const Infor = () => {
    const [ modalVisible, setModalVisible ] = useState(false);
    const [ name, setName] = useState("");
    const [ avatar, setAvatar] = useState("");
    

    _hideDialog = () => {
		setModalVisible(false);
	};
	_showDialog = () => {
		setModalVisible(true);
	};
    var user = firebaseConfig.auth().currentUser;
    var email, url, displayName, emailVerified, uid;
    if (user !=null){
         email =  user.email;
         url = user.photoURL;
         displayName = user.displayName;
         emailVerified = user.emailVerified;
         uid = user.uid;
    }
    const updateProfile = () =>{
		user.updateProfile({
			displayName: name,
			photoURL: avatar
		  }).then(function() {
			console.log("Update thành công")
			ToastAndroid.show('Update success!', ToastAndroid.SHORT);
		  }).catch(function(error) {
			console.log("Update thất bại")
			ToastAndroid.show('Update fail!', ToastAndroid.SHORT);
		  });
	}

    return(
        <View style = {styles.container}>
        <View style={styles.listContainer}>
        <Image
            source={{ uri: url, width: 120, height: 120 }}
            style={{ borderWidth: 1, borderColor: 'black' }}
        />
        <View>
    <Text style={{ marginLeft: 10, fontSize: 30 }}>Name: {displayName}</Text>
            <Text style={{ marginLeft: 10, fontSize: 15 }}>Email: {email}</Text>
        </View>
    </View>
    <TouchableOpacity
        style={styles.butonFB}
        onPress={()=> {setModalVisible(true)}}>
      <Text style ={styles.textFB}>Đổi thông tin</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
			<View style={styles.modalView}>
				<Text style={styles.modalText}>Thay đổi thông tin</Text>
				{/* <TouchableWithoutFeedback onPress={() => _chooseImage()}>
					<Image
						source={{ uri: image, width: 150, height: 150 }}
						style={{ borderWidth: 1, borderColor: 'black' }}
					/>
				</TouchableWithoutFeedback> */}
				<View style={styles.lineDialog}>
					<Text style={styles.textDialog}>Name: </Text>
					<TextInput style={styles.textInputDialog} value={name} onChangeText={(text) => setName(text)} />
				</View>

				<View style={styles.lineDialog}>
					<Text style={styles.textDialog}>Link ảnh: </Text>
					<TextInput style={styles.textInputDialog} value={avatar} onChangeText={(text) => setAvatar(text)} />
				</View>

				<View
					style={{
						flex: 1,
						flexDirection: 'row',
						margin: 2,
						alignItems: 'center',
						width: width * 80 / 187.5,
						padding: width * 8 / 187.5
					}}
				>
					<TouchableOpacity
						style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
						onPress={() => {
							setModalVisible(false);
						}}
					>
						<Text style={styles.textStyle}>Cancel</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
						onPress={() => {
							setModalVisible(false);
							updateProfile();
						}}
					>
						<Text style={styles.textStyle}>Xác nhận</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
			</Modal>
    </View>
    );
}
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create ({
    listContainer: {
		backgroundColor: '#f1f1f1',
		flexDirection: 'row',
		margin: width * 3.6 / 187.5,
		padding: width * 3.6 / 187.5,
		borderRadius: width * 3.6 / 187.5
    },
    textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center'
	},
    container: {
        flex: 1,
        
        alignItems: "center",
      },
    butonFB:{
        marginTop: 50,
        width: windowWidth / 2,
        height: windowHeight / 15,
        backgroundColor: '#8a2be2',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
      },
      textFB:{
        color: '#ffffff',
        fontSize: 20,
      },
      modalView: {
		width: width * 167.5 / 187.5,
		padding: width * 8 / 187.5,
		borderRadius: width * 3.6 / 187.5,

		margin: 20,
		backgroundColor: 'white',

		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
    },
    openButton: {
		backgroundColor: '#F194FF',
		borderRadius: 20,
		padding: 10,
		width: 120,
		margin: 2,
		elevation: 2
	},
    modalText: {
		fontSize: 20,
		marginBottom: 15,
		textAlign: 'center'
    },
    lineDialog: {
		width: '100%',
		height: 40,
		margin: 8,
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		borderRadius: 5,
		backgroundColor: '#f1f1f1'
	},
	textInputDialog: {
		height: 34,
		flex: 1,
		marginRight: 4,
		borderWidth: 0.1,
		borderRadius: 5,
		color: '#111111',

		fontSize: 15,
		paddingLeft: 5
    },
    centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22
	},
})