import React, { useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    Image,
    Animated,
} from 'react-native';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { getData } from '../../utils/localStorage';

export default function Splash({ navigation }) {


    useEffect(() => {

        const unsubscribe = getData('user').then(res => {
            // console.log(res);
            if (!res) {
                // console.log('beum login');

                setTimeout(() => {
                    navigation.replace('Home');
                }, 1500);
            } else {
                console.log('sudah login logon');

                setTimeout(() => {
                    navigation.replace('Home');
                }, 1500);
            }
        });


    }, []);


    return (
        <View
            style={{
                flex: 1,
                backgroundColor: colors.white,
            }}>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                <Image
                    source={require('../../assets/logo.png')}
                    style={
                        {
                            width: 200,
                            height: 200,
                            resizeMode: 'contain'
                        }
                    }
                />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({});
