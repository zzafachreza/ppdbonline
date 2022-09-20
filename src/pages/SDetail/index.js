import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { colors, fonts, windowWidth } from '../../utils';

export default function SDetail({ route }) {
    const item = route.params;

    const MyList = ({ label, value }) => {
        return (
            <View style={{
                borderBottomWidth: 1,
                paddingBottom: 5,
                borderBottomColor: colors.border,
            }}>
                <Text style={{
                    fontFamily: fonts.secondary[600],
                    fontSize: windowWidth / 25,
                    color: colors.black
                }}>{label}</Text>
                <Text style={{
                    fontFamily: fonts.secondary[400],
                    fontSize: windowWidth / 25,
                    color: colors.black
                }}>{value}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white,
            padding: 10,
        }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <MyList label="Nama Lengkap" value={item.nama_lengkap} />
                <MyList label="NIK" value="* * * * * * *" />
                <MyList label="NISN" value="* * * * * * *" />
                <MyList label="Jenis Kelamin" value={item.jenis_kelamin} />
                <MyList label="Tempat dan Tanggal Lahir" value={item.ttl} />
                <MyList label="Agama" value={item.agama} />
                <MyList label="Anak ke" value={item.anak_ke} />
                <MyList label="Jumlah Saudara" value={item.jumlah_saudara} />
                <MyList label="Bahasa" value={item.bahasa} />
                <MyList label="Berat / Tinggi Badan" value={item.berat_tinggi} />
                <MyList label="Penyakit" value={item.penyakit} />
                <MyList label="Hobi" value={item.hobi} />
                <MyList label="Tempat tinggal" value={item.tempat_tinggal} />
                <MyList label="Status" value={item.status} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})