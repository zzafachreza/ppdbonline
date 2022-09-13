import { Alert, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, storeData } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';
import Sound from 'react-native-sound';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { MyButton } from '../../components';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';

export default function Home({ navigation }) {
  const isFocused = useIsFocused();
  const [user, setUser] = useState({
    nama_lengkap: 'PUSAKA'
  });
  const [data, setData] = useState([]);
  // const [play, setPlay] = useState(false);


  useEffect(() => {

  }
    , []);



  const MyMenu = ({ img, judul, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress} style={{
        marginVertical: 5,
        flex: 1,
        marginHorizontal: 0,
        borderRadius: 10,
        elevation: 1,
        backgroundColor: colors.primary
      }}>
        <View style={{
          justifyContent: 'center',
          padding: 10,
          alignItems: 'center'
        }}>
          <Image source={img} style={{
            resizeMode: 'contain',
            width: windowHeight / 5,
            height: windowHeight / 6,
          }} />
          <Text style={{
            marginTop: 10,
            fontFamily: fonts.primary[600],
            fontSize: windowWidth / 25,
            color: colors.white,
          }}>{judul}</Text>
        </View>
      </TouchableOpacity>
    )
  }


  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: colors.white,
    }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* header */}
        <View style={{
          height: windowHeight / 6,
          backgroundColor: colors.primary,
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
          paddingVertical: 20,
        }}>


          <View style={{
            flexDirection: 'row'
          }}>

            <View style={{
              flex: 1,
            }}>
              <View style={{
                flexDirection: 'row'
              }}>

                <View style={{
                  padding: 10,
                }}>
                  <Text style={{

                    fontFamily: fonts.secondary[400],
                    fontSize: windowWidth / 28,
                    color: colors.white
                  }}>Selamat datang</Text>

                  <Text style={{
                    fontFamily: fonts.secondary[800],
                    fontSize: windowWidth / 15,
                    color: colors.white
                  }}>PUSAKA</Text>
                </View>

              </View>

            </View>
            <View style={{
              // flex: 1
              padding: 10,
            }}>

              <Image source={require('../../assets/logo2.png')} style={{ resizeMode: 'contain', width: 50, height: 50 }} />
            </View>



          </View>

        </View>

        {/* slider */}

        <View style={{
          marginTop: -50,
          height: windowHeight / 3,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Image source={require('../../assets/slide.png')} style={{ width: windowWidth - 30, height: 200, borderRadius: 10, }} />
        </View>


        {/* menu */}
        <View style={{
          marginVertical: 5,
          justifyContent: 'space-around',
          flexDirection: 'row'

        }}>
          <MyMenu img={require('../../assets/A1.png')} onPress={() => navigation.navigate('SPeserta')} judul='Data Peserta Didik' />
          <MyMenu img={require('../../assets/A2.png')} onPress={() => navigation.navigate('SInformasi')} judul='Informasi PPDB' />

        </View >

        {/* menu */}
        <View style={{
          marginVertical: 5,
          justifyContent: 'space-around',
          flexDirection: 'row'

        }}>
          <MyMenu img={require('../../assets/A3.png')} onPress={() => navigation.navigate('SWebsite')} judul='Website Sekolah' />
          <MyMenu img={require('../../assets/A4.png')} onPress={() => navigation.navigate('SFacebook')} judul='Facebook Sekolah' />

        </View >

        {/* menu */}
        <View style={{

          marginVertical: 5,
          justifyContent: 'space-around',
          flexDirection: 'row'

        }}>
          <MyMenu img={require('../../assets/A5.png')} onPress={() => navigation.navigate('SInstagram')} judul='Instagram Sekolah' />
          <MyMenu img={require('../../assets/A6.png')} onPress={() => navigation.navigate('SContact')} judul='Contact Person' />

        </View >





      </ScrollView>





    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  judul: {
    fontFamily: fonts.secondary[600],
    fontSize: windowWidth / 35
  },
  item: {
    fontFamily: fonts.secondary[400],
    fontSize: windowWidth / 35
  }
})