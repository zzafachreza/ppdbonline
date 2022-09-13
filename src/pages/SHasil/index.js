import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { colors, fonts, windowWidth } from '../../utils'
import { MyButton } from '../../components'

export default function SHasil({ navigation, route }) {
    return (
        <SafeAreaView style={{
            flex: 1,
            padding: 10,
            justifyContent: 'center',
        }}>
            <View style={{
                justifyContent: 'center',
                backgroundColor: colors.primary,
                borderRadius: 20,
                flex: 0.4,
                height: 100,
                padding: 10,
                alignItems: 'center'
            }}>

                {route.params.kode == 200 && <>

                    <Image source={require('../../assets/oke.png')} style={{
                        height: 150,
                        margin: 10,
                        resizeMode: 'contain'
                    }} />

                    <Text style={{
                        marginTop: 10,
                        fontFamily: fonts.primary[400],
                        fontSize: windowWidth / 20,
                        textAlign: 'center',
                        color: colors.white,
                    }}>Berhasil Mendaftarkan!</Text>
                </>}

                {route.params.kode == 404 && <>

                    <Image source={require('../../assets/gagal.png')} style={{
                        height: 150,
                        margin: 10,
                        resizeMode: 'contain'
                    }} />

                    <Text style={{
                        marginTop: 10,
                        fontFamily: fonts.primary[400],
                        fontSize: windowWidth / 20,
                        textAlign: 'center',
                        color: colors.white,
                    }}>Maaf, kuota terpenuhi.</Text>
                    <Text style={{
                        marginTop: 10,
                        fontFamily: fonts.primary[400],
                        fontSize: windowWidth / 20,
                        textAlign: 'center',
                        color: colors.white,
                    }}>Hubungi panitia untuk waiting list.</Text>
                </>}




            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})