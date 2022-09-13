import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, ListItem, Button } from 'react-native-elements';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';
import { TextInput } from 'react-native-gesture-handler';

export default function MyInput({
  onFocus,
  label,
  iconname,
  onChangeText,
  value,
  keyboardType,
  secureTextEntry,
  styleInput,
  placeholder,
  autoFocus,
  tinggi,
  multiline,
  onSubmitEditing,
  label2,
  styleLabel,
  colorIcon = colors.primary,
}) {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
          paddingVertical: 3,
        }}>

        <Text
          style={{
            fontFamily: fonts.secondary[600],
            color: colors.secondary,
            fontSize: 12,
            ...styleLabel,
          }}>
          {label}
        </Text>
      </View>

      <TextInput
        onSubmitEditing={onSubmitEditing}
        multiline={multiline}
        autoFocus={autoFocus}
        onFocus={onFocus}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        style={{
          borderRadius: 5,
          height: tinggi,
          backgroundColor: colors.tertiary,
          paddingLeft: 10,
          color: colors.black,
          fontSize: 12,
          fontFamily: fonts.primary[400],
          ...styleInput,
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({});
