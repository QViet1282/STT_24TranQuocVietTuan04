import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from "react";
export default function App() {
    var [giaSP, setgiaSP] = useState(141800);
    var [soluong, setSoLuong] = useState(1);
    var [coupon, setCoupon] = useState('');
    var data = [
        { ma: 'AAA1', giam: 10000 },
        { ma: 'AAA2', giam: 20000 },
    ];
    var [giaGiam, setGiaGiam] = useState(0);

    function tinhTien() {
        return giaSP * soluong - giaGiam;
    };
    return (
        <View style={styles.container}>
            <View style={styles.viewrow}>
                <View>
                    <Image style={{ width: 115, height: 150, margin: 10 }} source={{ uri: 'data:image/jpeg;base64,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' }}></Image>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 12, marginTop: 5, marginLeft: 10 }}>Mã giảm giá đã lưu</Text>
                </View>
                <View style={{ alignItems: 'flex-start', marginRight: 20 }}>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 14, marginTop: 10 }}>Nguyên hàm tích phân và ứng dụng</Text>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 14, marginTop: 10 }}>Cung cấp bởi Tiki Trading</Text>
                    <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 23, marginTop: 15 }}>{giaSP}</Text>
                    <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 14, marginTop: 10, textDecorationLine: 'line-through' }}>141.800</Text>
                    <View style={styles.soluongItem}>
                        <TouchableOpacity style={{ width: 15, height: 15, backgroundColor: 'rgba(196, 196, 196, 1)', alignItems: 'center', justifyContent: 'center', margin: 10 }}
                            onPress={() => {
                                if (soluong > 1 && soluong == 2) {
                                    setSoLuong(soluong - 1);
                                    styles.colorGiamSoluong = { color: 'rgba(128, 128, 128, 1)', fontWeight: 'bold', fontSize: 20, marginBottom: 20, };
                                }
                                else if (soluong > 1) {
                                    setSoLuong(soluong - 1);
                                }
                            }}>
                            <Text style={styles.colorGiamSoluong}>_</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black', marginTop: 6 }}>{soluong}</Text>
                        <TouchableOpacity style={{ width: 15, height: 15, backgroundColor: 'rgba(196, 196, 196, 1)', alignItems: 'center', justifyContent: 'center', margin: 10 }}
                            onPress={() => {
                                setSoLuong(soluong + 1);
                                styles.colorGiamSoluong = { color: 'black', fontWeight: 'bold', fontSize: 20, marginBottom: 20, };
                            }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginBottom: 5 }}>+</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'blue', marginTop: 10, marginLeft: 100 }}>Mua sau</Text>
                    </View>
                    <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 12, marginTop: 8 }}>Xem tại đây</Text>
                </View>
            </View>
            <View style={styles.viewCoupon}>
                <TextInput onChangeText={setCoupon} style={{ border: 'solid 1px black', width: 230, height: 40, marginLeft: 10, paddingLeft: 70, fontWeight: 'bold', fontSize: 15 }} placeholder='Mã giảm giá'></TextInput>
                <TouchableOpacity style={{ width: 100, height: 40, backgroundColor: 'rgba(10, 94, 183, 1)', alignItems: 'center', justifyContent: 'center', margin: 10, borderRadius: 4 }}
                    onPress={() => {
                        for (let coppon of data) {
                            if (coppon.ma == coupon) {
                                setGiaGiam(coppon.giam);
                            }
                        }
                    }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', marginBottom: 5, borderRadius: 2 }}>Áp dụng</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewgift}>
                <Text>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
                <Text style={{ color: 'blue' }}>Nhập tại đây?</Text>
            </View>
            <View style={styles.viewprice}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Tạm tính</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'red' }}>{tinhTien()+' đ'}</Text>
            </View>
            <View style={styles.viewprice2}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, color:'rgba(128, 128, 128, 1)' }}>Thành tiền</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'red' }}>{tinhTien()+' đ'}</Text>
                <TouchableOpacity style={{ width: 350, height: 60, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', margin: 10, borderRadius: 4 }}
                    onPress={() => {
                        alert('Đặt hàng thành công!');
                    }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white', marginBottom: 5, borderRadius: 2 }}>TIẾN HÀNH ĐẶT HÀNG</Text>
                </TouchableOpacity>
            </View>

        </View >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(196, 196, 196, 1)',
    },
    viewrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',

        // alignContent: 'space-around',
        // alignItems: 'center',
    },
    soluongItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    viewCoupon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        height: 80,
        alignItems: 'center',
    },
    viewgift: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginTop: 10,
        height: 50,
        // alignContent: 'space-around',
        alignItems: 'center',
        padding: 10,
    },
    viewprice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginTop: 10,
        height: 50,
        // alignContent: 'space-around',
        alignItems: 'center',
        padding: 10,
    },
    colorGiamSoluong: {
        fontSize: 20, fontWeight: 'bold', color: 'black', marginBottom: 20,
        color: 'rgba(128, 128, 128, 1)',
    },
    viewprice2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginTop: 140,
        height: 120,
        // alignContent: 'space-around',
        // alignItems: 'center',
        padding: 10,
        flexWrap: 'wrap',
    },
});