import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts, windowHeight, windowWidth } from '../../utils'
import { MyButton, MyGap } from '../../components'

export default function ({ navigation }) {
    return (
        <View style={{
            flex: 1,
            padding: 10,
        }}>
            <ScrollView>
                <View style={{
                    height: windowHeight / 4,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image source={require('../../assets/slide.png')} style={{ width: windowWidth - 20, height: 190, borderRadius: 10, }} />
                </View>

                <View style={{

                }}>
                    <Text style={{
                        marginVertical: 10,
                        color: colors.secondary,
                        fontFamily: fonts.secondary[600],
                        fontSize: windowWidth / 25
                    }}>Selamat Datang di halaman Penerimaan Peserta Didik (PPDB) 2023/2024 TELAH DIBUKA ! KUOTA TERBATAS !
                    </Text>

                    <Text style={{
                        marginVertical: 10,
                        color: colors.secondary,
                        fontFamily: fonts.secondary[600],
                        fontSize: windowWidth / 25
                    }}>SEGERA DAFTARKAN ANANDA KE SD IHSANIYAH 1 KOTA TEGAL
                    </Text>

                    <Text style={{
                        marginTop: 10,
                        color: colors.secondary,
                        fontFamily: fonts.secondary[600],
                        fontSize: windowWidth / 25
                    }}>Persyaratan Administrasi :
                    </Text>
                    <Text style={{
                        marginTop: 2,
                        color: colors.secondary,
                        fontFamily: fonts.secondary[400],
                        fontSize: windowWidth / 25
                    }}>1. Membayar uang pendaftaran </Text>
                    <Text style={{
                        marginTop: 2,
                        color: colors.secondary,
                        fontFamily: fonts.secondary[400],
                        fontSize: windowWidth / 25
                    }}>2. Lulusan TK B/ masih Bersekolah di TK B</Text>
                    <Text style={{
                        marginTop: 2,
                        color: colors.secondary,
                        fontFamily: fonts.secondary[400],
                        fontSize: windowWidth / 25
                    }}>3. Menyerahkan Foto Copy Akte Kelahiran</Text>
                    <Text style={{
                        marginTop: 2,
                        color: colors.secondary,
                        fontFamily: fonts.secondary[400],
                        fontSize: windowWidth / 25
                    }}>4. Menyerahkan Foto Copy Kartu Keluarga</Text>
                    <Text style={{
                        marginTop: 2,
                        color: colors.secondary,
                        fontFamily: fonts.secondary[400],
                        fontSize: windowWidth / 25
                    }}>5. Mengikuti Seleksi penyesuaian lingkungan dan Psikotes</Text>

                    <Text style={{
                        marginTop: 10,
                        color: colors.secondary,
                        fontFamily: fonts.secondary[600],
                        fontSize: windowWidth / 25
                    }}>Persyaratan Usia</Text>
                    <Text style={{
                        marginTop: 2,
                        color: colors.secondary,
                        fontFamily: fonts.secondary[400],
                        fontSize: windowWidth / 25
                    }}>Usia minimal 6 tahun per Juli 2023</Text>

                    <Text style={{
                        marginTop: 10,
                        color: colors.secondary,
                        fontFamily: fonts.secondary[600],
                        fontSize: windowWidth / 25
                    }}>Kriteria Kelulusan:</Text>
                    <Text style={{
                        marginTop: 2,
                        color: colors.secondary,
                        fontFamily: fonts.secondary[400],
                        fontSize: windowWidth / 25
                    }}>1. Lulus Psikotes</Text>
                    <Text style={{
                        marginTop: 2,
                        color: colors.secondary,
                        fontFamily: fonts.secondary[400],
                        fontSize: windowWidth / 25
                    }}>2. Lulus Administrasi Yayasan</Text>
                    <MyGap jarak={20} />
                    <MyButton title="Formulir Pendaftaran" warna={colors.primary} onPress={() => navigation.navigate('Register')} />
                </View>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({})