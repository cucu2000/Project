import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import {useNavigation} from "@react-navigation/native";

const ConfirmEmailScreen = () => {

    const [code, setCode] = useState('');
    const navigation = useNavigation();

    const onConfirmPressed = () => {
        console.warn("Confirm");

        navigation.navigate('Home');
    }

    const onBackPressed = () => {
        console.warn("Back Pressed");

        navigation.navigate('SignIn');
    }

    const onResendPressed = () => {
        console.warn("Resend Pressed")
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}> Confirm Email </Text>

                <CustomInput placeHolder="Enter your Conformation Code"
                             value={code}
                             setValue={setCode}
                />

                <CustomButton text="Confirm"
                              onPress={onConfirmPressed}
                />

                <CustomButton
                    text={"ResendCode"}
                    onPress={onResendPressed}
                    type="SECONDARY"
                />

                <CustomButton
                    text={"Back to Sign In"}
                    onPress={onBackPressed}
                    type="SECONDARY"
                />

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051c60',
        margin: 10,
    },

    text: {
        color: 'gray',
        marginVertical: 10,
    },

    link: {
        color: '#FD8075',
    }
});

export default ConfirmEmailScreen;