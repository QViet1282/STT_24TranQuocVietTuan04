import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { useState } from "react";
export default function App() {
    var [danhGia, setdanhGia] = useState('Cực kỳ hài lòng');
    var linkSaoVang = 'https://media.istockphoto.com/id/1152614310/vi/vec-to/h%C3%ACnh-ng%C3%B4i-sao-v%C3%A0ng-%C4%91%C6%B0%E1%BB%A3c-c%C3%A1ch-ly-tr%C3%AAn-n%E1%BB%81n-tr%E1%BA%AFng-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-sao-v%C3%A0ng-logo-sao-v%C3%A0ng-h%C3%ACnh-%E1%BA%A3nh.jpg?s=612x612&w=0&k=20&c=MI9xv7_SK5MpRkBkrQGz47ieItAkNn_UzjyEpO_HGFU=';
    var linkSaoTrang = 'https://png.pngtree.com/thumb_back/fh260/background/20220909/pngtree-isolated-gray-star-iconranking-mark-element-isolated-badge-photo-image_25376136.jpg';
    var [sao1, setsao1] = useState(linkSaoVang);
    var [sao2, setsao2] = useState(linkSaoVang);
    var [sao3, setsao3] = useState(linkSaoVang);
    var [sao4, setsao4] = useState(linkSaoVang);
    var [sao5, setsao5] = useState(linkSaoVang);
    var [binhLuan, setbinhLuan] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.viewSanPham}>
                <Image style={{ margin: 15, width: 100, height: 100, backgroundColor: 'red' }} source={{ uri: "data:image/jpeg;base64,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" }}></Image>
                <Text style={{ marginTop: 20, color: 'black', fontSize: 17, fontWeight: 'bold' }}>USB Bluetooth Music Receiver HJX-001-Biến loa thường thành loa bluetooth</Text>
            </View>
            <View style={{ alignItems: 'center', height: 40 }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{danhGia}</Text>
            </View>
            <View style={styles.viewDanhGia}>

                <TouchableOpacity onPress={() => {
                    setdanhGia('Tệ');
                    setsao2(linkSaoTrang);
                    setsao3(linkSaoTrang);
                    setsao4(linkSaoTrang);
                    setsao5(linkSaoTrang);
                }}>
                    <Image source={{ uri: sao1 }} style={{ width: 55, height: 55 }}></Image>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => {
                    setdanhGia('Không hài lòng');
                    setsao2(linkSaoVang);
                    setsao3(linkSaoTrang);
                    setsao4(linkSaoTrang);
                    setsao5(linkSaoTrang);
                }}>
                    <Image source={{ uri: sao2 }} style={{ width: 55, height: 55 }}></Image>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => {
                    setdanhGia('Bình thường');
                    setsao2(linkSaoVang);
                    setsao3(linkSaoVang);
                    setsao4(linkSaoTrang);
                    setsao5(linkSaoTrang);
                }}>
                    <Image source={{ uri: sao3 }} style={{ width: 55, height: 55 }}></Image>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => {
                    setdanhGia('Hài lòng');
                    setsao2(linkSaoVang);
                    setsao3(linkSaoVang);
                    setsao4(linkSaoVang);
                    setsao5(linkSaoTrang);
                }}>
                    <Image source={{ uri: sao4 }} style={{ width: 55, height: 55 }}></Image>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => {
                    setdanhGia('Cực kỳ hài lòng');
                    setsao2(linkSaoVang);
                    setsao3(linkSaoVang);
                    setsao4(linkSaoVang);
                    setsao5(linkSaoVang);
                }}>
                    <Image source={{ uri: sao5 }} style={{ width: 55, height: 55 }}></Image>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 30, marginRight: 30, width: 'auto', height: 75, border: 'solid 2px blue', borderRadius: 6, alignItems: 'center', justifyContent: 'center' }}
                onPress={() => {
                }}>
                <Image style={{ margin: 10, width: 50, height: 50 }} source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUAAAD////t7e3u7u7r6+v09PSYmJh0dHTx8fF8fHyNjY329va2trajo6Orq6tRUVFXV1fX19e9vb3GxsZFRUXf39+xsbHT09Oenp4yMjJeXl6BgYHb29vNzc2mpqY8PDxwcHApKSkQEBBmZmYbGxtISEguLi5TU1M+Pj4jIyMZGRmJiYkT33YnAAAJ8ElEQVR4nO1da3fiOAwNOA4OBgrhTSmFdjrdbv///9uklCXEchLbUh4QfRmd04mj2zrWtSzJXi+RPmOsf6ea1xA7OoQdwkKEsfh3qnmJegbr36fmsdqnEa3GOoSt15h3/ST9u9T6Xu0mUGsP4w9rt6ND6IywduZBp3WcpvXaI3j8+0d4/STrd84dp7HSHsYf1m5Hh9AZYe3Mg07rOE3rtUfw+PeP8PpJ1u+cO05jpT2MP6zdjg6hM8LamQed1nGa1mv4Hl9wzoWz1lyEMgoSGSdiqc2xEV4/SXcHKwcehgwby2nmKPgSmSFahegP92gAPU+gWYWJEBGgt2giwgkmQu8FGyECe1igIgyRrMLjNGyJCjD+EpvGafgGGWEkGubx5T/ICI+yWQjRJ6nn8WZxGoE9SeNpypytQuU0uCtpImGjOA0T6AA9r1Eenx8IEM5FgxCir6SJDGRzOA3DJN1XEQ3iNBSTNJ6mjlZhcppXEoQD1wmK5/H7JAA9rzkIx0QI5ygIMTgNzSSNuamTVXichmglTUQ0g9PIIRnCFQL9dkfIfDKA3lcjEHIKPnORd4mF0J4zSKpl5iw7V/tKcBp2PkngMpaMJuWS7hu8yMZX3nvVBHPlNEzK/SQ4TqfTp0Sm01vtRI4vka3y3rO2GwSrpeQsd6oWefzl8E8lIOxlG/gOCJFOWqhlmI8wh9Os6ja9tMytOI3Y1W23gYRSi0PvD2m9ALbstDi0CPGDZ7RyNEXYjjUmLZt8hFkuENVtr4XsDThNn4ZMf328H8NwcHxf/Esx/ImX5zT8G/vt75tzkD7hW/zn5aMAfa2eQJkqsMfH/RNOV/sYVvbtIga7PnxgvugPtBGBESLGXRar+LU63hT/WcXhL97LIhAhxGnQfrODdWZkMEkFbbqGwDsgTsOwgoNDWSpUFP+D5Ju+ZDlOI3Ayf45cnTJazX9CeadfzuNzjLyR7YtZ/EFGbwhvTY6ryiAM3F8VSNNEAy5C99eu9AjTXIA7RyZOa2kRV5GliZR2+Z2IcpzG9W+4E7fjldfKhO3GvCf5/BP82QgYGfKHjgiHMj9ykhcVOhYNfpI/T4gemBoxUkcGPb4bwpV0OEkpjJ/LyxMSsrIShJF0OiuS+Wkrm9QTwOILIgQ4jQvCNXc4REk0mRsdShMFwMyROh7EaVzW0og7gDtr4PT7lVM6jjRSf35dS3M5jQPCA0YymnzWjv9PenMCOJcJL+fxrRE+uywyqeVmqn1DGiFAvagRfuQuMizZEZ7nYbxbzHUo4kv3iuV1YZTvRgjT3ELYIvRZHmtZrr53ZzKyfR+OctmNmOlecbzuHqD/Q8xp5rejpDQmZ8PsIc5rsJRM+4R2D35ZLYWA4rm0nGag30xEcPB1N9c+IbW7qSD+qRByBnJTWo+v/bTWW+0zn0sNwpyM3LdgHh00YQFShCPdkTuwIKTkW+cyrBYDSk6zkDBDWRc9+OXDLEjY7IgpOc1eGfpHK5McHalmJRpAWQqFkNNM4U+w3LZ9DH+MFqfPhB5/BiIsG0LbgAgtDmjpEL6Ci0z5s4EVuNwYm0HIaQ7qKH1u8jeYQfnA5qcndJymB4xiVmMib5790Swi02ScJoQmmVmuzQ6a5sbn0GQe/wVAaFpEEwEIjUPTZAiBpZCbjuEBCI3rVKg4zRFw2OYB7AMwip7RwkLFacYiyyP6NqVsop+1xfgsmorTzJQzCivit1IOqaFgU65QeXw1OiNtUhGe1A2m6VQgQrhQEb4YWnYWNclQGo5AxGlCrvAIu0jPRLFFv9XXjEDDaSa9LI8wNexXnrlii+FSQ8Rp1MoWc2f4I1u1HM+wZIzI4yuxFn0wsEDUkkrD7DMihExBaLM9T2SvHFIbLllEnObm2Z9Ypm054lxx2IYFR0ScJt7mZH5F1giztrDCQNatEHEadZrbFudHWVtMv2gij68itM2LaypCXxnVNuVIaYIlTGcpDafxWZZHWK+lWVtME9CIOI3fy/AI68S4pVLFZDgSEaeZZae5daMTldMYzgYij69GWEy3BL/ypCI0XJWJEKpBeegAuoQE3PJY4H8h4jSDXpZHCLuKqTVTbDEs3CHiNCf1YM3uQxSKLaabFKo4jeqDpE2meKhEMUzdIVmcZq5Eoqym6YtyTG5M4akQBuoBt8UeeKHmUxUnY2aE6uxpIZWcGIv2bZFQRzEdg+zsSQI5MaYnuJ89hY2Yd9MkO3saASczpgFFP/uxxJpxyI7sZOYJOl07Gg2xUW0Dc2TzhS6fRgCjGNm3UBc8462TR5lPE0A5MSa7VzAX52hsB2E+DWCg3yv/N/ChXBwLj0OYT7OCPqPSu7sl8KzV0QBhPs0biLDkggotozHzM7eCNEd4BVrZ84uXm62Efzs2lbqkOcLZUS5aUflkyFULEs2qCJI0R/hZZka5aLkf49+9pgIqJ5s9R2hzhGfanv/a8Okb4L9+Nyd2DQFoc4S3+ixoNoZylhcrrn3CspqcuO7pW2tvn8tZcLsp3m2WeUWYlsXP1HVPs5tRbrWk29QyOnwPjoPvSeSfOzxpS4NsQ8rkdU++cgp1m9gsfi/qEAX/z5yQ/gp53dMrSlWQsG/pQF735E2ty0dTy5IwzfWqEqF3dO+Rxx06OlDXPSUyUMcz1Fx6D1RSy32Mv0UNuymhMeHUXKGaWu4dt7/VQPhu/beqqeX2tr7tnU185tg6oiKElzo9c4TOLfCqqOU+S3AzXlnNvYdLBbXcF9muU5upMjD7co7Q3IS+ljslz2YTdGl3qJqRCjx+WuDoFKwhNIxJpGKE3ttK3wQrtRTY51ApUgWnyUgQ7wIv74SYDBNyhtgcrqr+NDfyOZLxdgnmL7zHJqidpCvqT6PIRzBn8hqxOG8/uOxHQ+wOopV5fEC2g8N8z5LGCoL1+rNofKToslwnwmqkLKehusyBXoCiaYjTQE1DWiJqGjXcc8+u4qUJUrLnHsn1VJXICbo/CUIo29TnOi1DNfUP7iNsXS9Rt+wZwJvAPsKsblPt5K/M4NByGrsCyfplVL6PcDvXmlew0ZjmbgTexn7earGultPEmkRoJlqxjDkYJNHfjdA2j/GtwZFzNwJOZ9+qZKDFoUfYqoka6E+Ecu57Kt/1tm75esnp15h335Poo/fXJ5GAC8D6XE6T0jaUN3JhyOekoGtx0X1PXPrRYRiG4SCRMGyS9jyczPuy4Gq2Mjc8Xu/s4o3Tii/URbt5vLEa1r3czdXQ7uVuroZzp3OTtQ5h+zWUe7kbreHcy91k7QH8YYew7VrHae5Aexh/WLsdHUJnhLUzDzqt4zSt1x7B498/wusnWb9z7jiNlfYw/rB2OzqEzghrZx50WsdpWq89gse/f4TXT7J+59xxGivtYfxh7XZ0CF0RXhfU+9P+A88jGlRz9W83AAAAAElFTkSuQmCC' }}></Image>
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Thêm hình ảnh</Text>
            </TouchableOpacity>

            <TextInput onChangeText={setbinhLuan} numberOfLines={5} multiline={true} style={{ padding: 15, color: 'rgba(196, 196, 196, 1)', fontWeight: '600', marginLeft: 30, marginRight: 30, marginTop: 10, width: 'auto', height: 225, border: 'solid 1px rgba(196, 196, 196, 1)', borderRadius: 6, fontSize: 20 }} placeholder='Hãy chia sẻ những điều bạn thích về sản phẩm' ></TextInput>

            <TouchableOpacity style={{ marginTop: 10, marginLeft: 30, marginRight: 30, width: 'auto', height: 55, backgroundColor: 'rgba(13, 93, 182, 1)', borderRadius: 6, alignItems: 'center', justifyContent: 'center' }}
                onPress={() => {
                    alert('Đã gửi đánh giá');
                }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white' }}>Gửi</Text>
            </TouchableOpacity>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundImage: 'white',
    },
    viewSanPham: {
        height: 160,
        flexDirection: 'row',
        // backgroundColor: 'green',
    },
    viewDanhGia: {
        height: 80,
        flexDirection: 'row',
        // backgroundColor: 'red',
        justifyContent: 'center',
    },
    styleNgoiSao: {
        width: 60,
        height: 60,
        backgroundColor: 'red',
    },
});