import { View, Text, StatusBar, StyleSheet, Image, ActivityIndicator, SafeAreaView, BackHandler, TouchableOpacity, Alert } from 'react-native';
import React from 'react'
import WebView from 'react-native-webview';
import { colors } from 'react-native-elements';

export default function () {



    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: colors.white
            }}>
            <WebView
                mixedContentMode='always'

                injectedJavaScript={`const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `}
                scalesPageToFit={false}
                source={{
                    uri: 'https://instagram.com/sdihsaniyah1_pusaka'
                }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})