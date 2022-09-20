import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  Home,
  Register,
  SHasil,
  SPeserta,
  SInformasi,
  SWebsite,
  SFacebook,
  SInstagram,
  SContact,
  SDetail,
} from '../pages';
import { colors } from '../utils';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: true,
          headerTitle: 'Formulir Pendaftaran',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="SDetail"
        component={SDetail}
        options={{
          headerShown: true,
          headerTitle: 'Informasi Peserta Didik',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />




      <Stack.Screen
        name="SHasil"
        component={SHasil}
        options={{
          headerShown: false,
          headerTitle: 'Hasil Analisa',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="SPeserta"
        component={SPeserta}
        options={{
          headerShown: true,
          headerTitle: 'Data Peserta Didik',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="SInformasi"
        component={SInformasi}
        options={{
          headerShown: true,
          headerTitle: 'Informasi PPDB',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="SWebsite"
        component={SWebsite}
        options={{
          headerShown: true,
          headerTitle: 'Website Sekolah',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="SFacebook"
        component={SFacebook}
        options={{
          headerShown: true,
          headerTitle: 'Facebook Sekolah',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />


      <Stack.Screen
        name="SInstagram"
        component={SInstagram}
        options={{
          headerShown: true,
          headerTitle: 'Instagram Sekolah',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />


      <Stack.Screen
        name="SContact"
        component={SContact}
        options={{
          headerShown: true,
          headerTitle: 'Contact Person',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />










    </Stack.Navigator>
  );
}
