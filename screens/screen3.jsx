import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from "react";
// import { CheckBox } from 'react-native-web';
// import CheckBox from 'react-native-check-box';
import CheckBox from 'expo-checkbox';
export default function App() {
    var [password, setPassword] = useState('');
    var [pwLength, setPwLength] = useState(0);
    var [checkbox1, setCheckbox1] = useState(false);
    var [checkbox2, setCheckbox2] = useState(false);
    var [checkbox3, setCheckbox3] = useState(false);
    var [checkbox4, setCheckbox4] = useState(false);
    function generateRandomPassword(length) {
        let result = '';
        const LOWER_CASE_LETTERS = "abcdefghijklmnopqrstuvwxyz";
        const UPPER_CASE_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const NUMBERS = "0123456789";
        const SYMBOLS = "!@#$%^&*()_+-=[]{};':,./<>?";
        let chars = '';
        if (checkbox1)
            chars += LOWER_CASE_LETTERS;
        if (checkbox2)
            chars += UPPER_CASE_LETTERS;
        if (checkbox3)
            chars += NUMBERS;
        if (checkbox4)
            chars += SYMBOLS;
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            result += chars.charAt(randomIndex);
        }

        return result;
    }
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30, marginTop: 30 }}>PASSWORD</Text>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30 }}>GENERATOR</Text>
                <TextInput value={password} style={{color:'white',fontSize:18,padding:20, backgroundColor: 'rgba(21, 21, 55, 1)', marginTop: 45, height: 50, width: 320 }}></TextInput>
                <View style={styles.viewrow}>
                    <Text style={{ marginTop: 10, fontSize: 22, color: 'white', fontWeight: '600' }}>Password length</Text>
                    <TextInput onChangeText={setPwLength} style={{ backgroundColor: 'white', height: 30, width: 120, marginTop: 18 }}></TextInput>
                </View>
                <View style={styles.viewrow}>
                    <Text style={{ fontSize: 22, color: 'white', fontWeight: '600' }}>Include lower case letters</Text>
                    <CheckBox style={{ width: 30, height: 30 }} value={checkbox1} onValueChange={setCheckbox1} />
                    {/* <input type='checkbox' style={{ width: 30, height: 30 }}></input> */}
                </View>
                <View style={styles.viewrow}>
                    <Text style={{ fontSize: 22, color: 'white', fontWeight: '600' }}>Include upcase letters</Text>
                    <CheckBox style={{ width: 30, height: 30 }} value={checkbox2} onValueChange={setCheckbox2} />
                </View>
                <View style={styles.viewrow}>
                    <Text style={{ fontSize: 22, color: 'white', fontWeight: '600' }}>Include number</Text>
                    <CheckBox style={{ width: 30, height: 30 }} value={checkbox3} onValueChange={setCheckbox3} />
                </View>
                <View style={styles.viewrow}>
                    <Text style={{ fontSize: 22, color: 'white', fontWeight: '600' }}>Include special symbol</Text>
                    <CheckBox style={{ width: 30, height: 30 }} value={checkbox4} onValueChange={setCheckbox4} />
                </View>
                <TouchableOpacity style={{ marginTop: 20, marginLeft: 30, marginRight: 30, width: 310, height: 55, backgroundColor: 'rgba(59, 59, 152, 1)', alignItems: 'center', justifyContent: 'center' }}
                    onPress={() => {
                        if (pwLength > 0) {
                            setPassword(generateRandomPassword(pwLength));
                        }
                        else {
                            Alert.alert('Please enter password length');
                        }
                    }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>GENERATE PASSWORD </Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        backgroundImage: 'radial-gradient(rgba(59, 59, 152, 1) 60%,rgba(196, 196, 196, 0))',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        height: 630,
        backgroundColor: 'rgba(35, 35, 91, 1)',
        width: 350,
        margin: 20,
        borderRadius: 20,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    viewrow: {
        width: 320,
        flexDirection: 'row',
        marginTop: 26,
        justifyContent: 'space-between  ',
        // alignContent: 'space-around',
        // alignItems: 'center',
    },
});