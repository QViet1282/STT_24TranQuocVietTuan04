import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button, SafeAreaView } from 'react-native';
import {useState} from "react";
export default function App() {
    var [user, setUser] = useState('');
    var [password, setPassword] = useState('');
    var trangThai = 0;
    var data = [
        {
            user: 'abc1',
            password: '123456'
        },
        {
            user: 'abc2',
            password: '2468'
        },
        {
            user: 'abc3',
            password: '1357'
        }
    ];
    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 40, marginLeft: 20 }}>LOGIN</Text>


            </View>
            <SafeAreaView style={styles.view2}>
                <TextInput onChangeText={setUser} style={{ width: 350, height: 50, backgroundColor: 'rgba(196, 196, 196, 0.3)', fontSize: 18, marginTop: 30, border: '1px solid rgba(242, 242, 242, 1)' }} placeholder='   Name'></TextInput>
                <TextInput onChangeText={setPassword} style={{ width: 350, height: 50, backgroundColor: 'rgba(196, 196, 196, 0.3)', fontSize: 18, marginTop: 20, border: '1px solid rgba(242, 242, 242, 1)' }} placeholder='   Phone'></TextInput>
                <TouchableOpacity style={{ marginTop: 60, width: 350, height: 45, backgroundColor: 'black', borderRadius: 2, alignItems: 'center', justifyContent: 'center' }}
                    onPress={() => {
                        for (const iterator of data) {
                            if (iterator.user == user && iterator.password == password){
                                trangThai = 1;
                                alert('Login ' + user +' thanh cong!');
                            }    
                        }
                        if(trangThai != 1)
                            alert('User khong ton tai hoac sai password!');

                    }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>LOGIN</Text>
                </TouchableOpacity>
                

                <Text style={{ fontSize: 18, marginTop: 30, fontWeight: 'bold' }}>CREATE ACCOUNT</Text>
            </SafeAreaView>
            <View style={styles.view3}>



            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundImage: 'linear-gradient(to bottom, rgba(251, 203, 0, 1), rgba(191, 154, 0, 1))',
    },
    view1: {
        height: 180,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    view2: {
        alignItems: 'center',
        marginTop: 20,
    },
    view3: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        border: 2,
    },
});