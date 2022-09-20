import { ActivityIndicator, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MyInput } from '../../components'
import axios from 'axios';
import { apiURL } from '../../utils/localStorage';
import { colors, fonts, windowWidth } from '../../utils';

export default function ({ navigation }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTransaction();
    }, [])
    const getTransaction = () => {
        setLoading(true)
        axios.post(apiURL + 'data.php').then(res => {
            console.log(res.data);
            setData(res.data);
            setLoading(false);
        })
    }

    const getTransactionKey = (x) => {
        setLoading(true)
        axios.post(apiURL + 'data.php', {
            key: x
        }).then(res => {
            console.log(res.data);
            setData(res.data);
            setLoading(false);
        })
    }
    return (
        <View style={{
            flex: 1,
        }}>
            <View style={{
                padding: 10,
            }}>
                <MyInput onSubmitEditing={
                    (x) => {
                        console.warn(x.nativeEvent.text);
                        getTransactionKey(x.nativeEvent.text);
                    }
                } label="Cari Peserta didik" placeholder="Silahkan masukan kata kunci nama / nik / nisn" />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    !loading &&
                    data.map((i, index) => {
                        return (
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('SDetail', i)
                            }} style={{
                                marginHorizontal: 10,
                                marginVertical: 10,
                                borderBottomWidth: 1,
                                borderBottomColor: colors.border,
                                padding: 10,
                                flexDirection: 'row'
                            }}>
                                <View style={{
                                    flex: 1,
                                }}>
                                    <Text style={{
                                        fontFamily: fonts.secondary[600],
                                        fontSize: windowWidth / 28,
                                        color: colors.secondary,
                                    }}>{i.nama_lengkap}</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[400],
                                        fontSize: windowWidth / 30,
                                        color: colors.secondary,
                                    }}>( PPDB-{i.id_peserta} )</Text>
                                </View>

                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style={{
                                        fontFamily: fonts.secondary[600],
                                        fontSize: windowWidth / 35,
                                        backgroundColor: i.status == 'DITERIMA' ? colors.primary : i.status == 'SELEKSI' ? colors.black : colors.danger,
                                        padding: 5,
                                        color: colors.white,
                                        borderRadius: 10,

                                    }}>{i.status}</Text>

                                </View>
                            </TouchableOpacity>
                        )
                    })

                }

                {loading && <ActivityIndicator color={colors.primary} size="large" />}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})