import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { colors, fonts, windowWidth } from '../../utils';

export default function MyHeader() {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        // borderBottomLeftRadius: windowWidth / 10,
        // borderBottomRightRadius: windowWidth / 10,
      }}>
      <Text
        style={{
          fontFamily: fonts.secondary[600],
          fontSize: windowWidth / 20,
          color: colors.white,
        }}>
        Kesekolah Waspada
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
