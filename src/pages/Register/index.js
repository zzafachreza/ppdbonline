import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    Button,
    View,
    Image,
    ScrollView,
    ImageBackground,
    Dimensions,
    Switch,
    SafeAreaView,
    ActivityIndicator,
} from 'react-native';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';
import { MyInput, MyGap, MyButton, MyPicker } from '../../components';
import axios from 'axios';
import { showMessage } from 'react-native-flash-message';
import { apiURL } from '../../utils/localStorage';

export default function Register({ navigation }) {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [loading, setLoading] = useState(false);
    const [valid, setValid] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const validate = text => {
        // console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            // console.log('nama_lengkap is Not Correct');
            setData({ ...data, nama_lengkap: text });
            setValid(false);
            return false;
        } else {
            setData({ ...data, nama_lengkap: text });
            setValid(true);
            // console.log('nama_lengkap is Correct');
        }
    };

    const [kirim, setKirim] = useState({
        password: '',
        username: '',
        nama_lengkap: '',
        alamat: ''
    });

    const simpan = () => {

        setLoading(true);
        console.log(kirim);
        axios.post(apiURL + 'register.php', kirim)
            .then(res => {

                console.warn(res.data);
                setTimeout(() => {
                    setLoading(false)
                    navigation.replace('SHasil', {
                        kode: res.data
                    });


                }, 1200);


            });

    };
    return (
        <ImageBackground
            style={{
                flex: 1,
                backgroundColor: colors.white,
                padding: 10,
            }}>

            {/* <Switch onValueChange={toggleSwitch} value={isEnabled} /> */}
            <ScrollView showsVerticalScrollIndicator={false} style={styles.page}>

                <MyInput label='Nama Lengkap' value={kirim.nama_lengkap} onChangeText={val => setKirim({ ...kirim, nama_lengkap: val })} />
                <MyInput label='Nama Panggilan' value={kirim.nama_panggilan} onChangeText={val => setKirim({ ...kirim, nama_panggilan: val })} />
                <MyInput label='NIK' value={kirim.nik} onChangeText={val => setKirim({ ...kirim, nik: val })} />
                <MyInput label='NISN' value={kirim.nisn} onChangeText={val => setKirim({ ...kirim, nisn: val })} />
                <MyInput label='Jenis kelamin' value={kirim.jenis_kelamin} onChangeText={val => setKirim({ ...kirim, jenis_kelamin: val })} />
                <MyInput label='Tempat, Tanggal Lahir' value={kirim.ttl} onChangeText={val => setKirim({ ...kirim, ttl: val })} />
                <MyInput label='Agama' value={kirim.agama} onChangeText={val => setKirim({ ...kirim, agama: val })} />
                <MyInput label='Anak Nomer ke' value={kirim.anak_ke} onChangeText={val => setKirim({ ...kirim, anak_ke: val })} />
                <MyInput label='Jumlah Saudara' value={kirim.jumlah_saudatra} onChangeText={val => setKirim({ ...kirim, jumlah_saudatra: val })} />
                <MyInput label='Bahasa Sehari-hari' value={kirim.bahasa} onChangeText={val => setKirim({ ...kirim, bahasa: val })} />
                <MyInput label='Berat / Tinggi Badan' value={kirim.berat_tinggi} onChangeText={val => setKirim({ ...kirim, berat_tinggi: val })} />
                <MyInput label='Penyakit yang Diderita' value={kirim.penyakit} onChangeText={val => setKirim({ ...kirim, penyakit: val })} />
                <MyInput label='Hobi / Bakat Menonjol' value={kirim.hobi} onChangeText={val => setKirim({ ...kirim, hobi: val })} />
                <MyInput label='Bertempat Tinggal' value={kirim.tempat_tinggal} onChangeText={val => setKirim({ ...kirim, tempat_tinggal: val })} />



                <MyGap jarak={20} />
                {!loading &&
                    <MyButton
                        warna={colors.primary}
                        title="SIMPAN"
                        Icons="log-in"
                        onPress={simpan}
                    />
                }
                <MyGap jarak={20} />

                {loading && <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <ActivityIndicator color={colors.primary} size="large" />
                </View>}
            </ScrollView>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 10,
    },
    image: {
        width: 620 / 4,
        height: 160 / 4,
    },
});
