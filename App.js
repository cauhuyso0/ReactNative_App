
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

import firebaseConfig from './firebase/firebase';
import Swipeout from 'react-native-swipeout';
export default function App() {
   // const [ item ] = useState(props.item);
    const itemsRef = firebaseConfig.database().ref().child('phims');
    const [maPhim, setMaPhim] = useState('');
    const [tenPhim, setTenPhim] = useState('');
    const [theLoai, setTheLoai] = useState('');
    const [quocGia, setQuocGia] = useState('');
    const [thoiLuong, setThoiLuong] = useState('');
    const [daoDien, setDaoDien] = useState('');
    const [ lists, setLists ] = useState([]);
   
useEffect(() => {
  
    itemsRef.on('value', (snap) => {
        var items = [];
        snap.forEach((child) => {
            let item = {
                key: child.key,
                maPhim: child.val().maPhim,
                tenPhim: child.val().tenPhim,
                theLoai: child.val().theLoai,
                quocGia: child.val().quocGia,
                thoiLuong: child.val().thoiLuong,
                daoDien: child.val().daoDien
            };
            items.push(item);
        });

        setLists(items);
    });
}, []);
    const insertProduct = async () => {

		firebaseConfig
			.database()
			.ref()
			.child('phims')
			.push({
				maPhim: maPhim,
				tenPhim: tenPhim,
				theLoai: theLoai,
                quocGia: quocGia,
                thoiLuong: thoiLuong,
                daoDien: daoDien
			})
			.then(() => {
				console.log('Insert success!');
				ToastAndroid.show('Insert success!', ToastAndroid.SHORT);
			})
			.catch((error) => {
				console.log(error);
				ToastAndroid.show('Insert fail!', ToastAndroid.SHORT);
			});
    };
    const ProductItem = (props) => {
       
        return (
        
                <View>
                
                    <View>
                        <Text style={{ marginLeft: 10, fontSize: 20 }}>Name: {props.item.maPhim}</Text>
                        <Text style={{ marginLeft: 10 }}>Price: {props.item.tenPhim}</Text>
                        <Text style={{ marginLeft: 10 }}>Info: {props.item.theLoai}</Text>
                    </View>
                </View>
        );
    };
    
    return (
     <View>
         
	<FlatList
				data={lists}
                renderItem={({ item }) => 
                <ProductItem item={item} />
				}
			/>
           
            
            <View  styles = {styles.container}>
            <TextInput placeholder ={"Nhập mã phim"} onChangeText={(text) => setMaPhim(text)} />
            <TextInput placeholder ={"Nhập tên phim"} onChangeText={(text) => setTenPhim(text)} />
            <TextInput placeholder ={"Nhập thể loại"} onChangeText={(text) => setTheLoai(text)} />
            <TextInput placeholder ={"Nhập quốc gia"} onChangeText={(text) => setQuocGia(text)} />
            <TextInput placeholder ={"Nhập thời lượng"} onChangeText={(text) => setThoiLuong(text)} />
            <TextInput placeholder ={"Nhập đạo diễn"} onChangeText={(text) => setDaoDien(text)} />
            </View>
        <TouchableOpacity
				style={styles.fab}
				onPress={() => {
                    insertProduct();
            
				}}
			>
				<Text style={styles.text}>+</Text>
			</TouchableOpacity>
     </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
		flex: 1,
        backgroundColor: '#fff',
        marginTop: 100,
    },
    
    fab: {
		height: 50,
		width: 50,
		borderRadius: 200,
		position: 'absolute',
		bottom: 20,
		right: 20,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#686cc3'
	},
  })