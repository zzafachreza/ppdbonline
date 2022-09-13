import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { colors, fonts, windowWidth } from '../../utils'
import { MyButton, MyGap } from '../../components'
import { color } from 'react-native-reanimated'

export default function SContact() {
    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.white,
            justifyContent: 'center',
            paddingTop: 10,
            paddingHorizontal: windowWidth / 10
        }}>

            <MyButton onPress={() => Linking.openURL(`https://wa.me/6285742056926`)} Icons="logo-whatsapp" warna={colors.primary} title="Ustadzah Titik Eska Dwi J." />
            <MyGap jarak={10} />
            <MyButton onPress={() => Linking.openURL(`https://wa.me/628562541667`)} Icons="logo-whatsapp" warna={colors.primary} title="Ustadzah Kenta Lenta H." />
            <MyGap jarak={10} />
            <MyButton onPress={() => Linking.openURL(`https://wa.me/6285742454188`)} Icons="logo-whatsapp" warna={colors.primary} title="Ustadz Imam Faiz S." />


        </View >
    )
}

const styles = StyleSheet.create({})