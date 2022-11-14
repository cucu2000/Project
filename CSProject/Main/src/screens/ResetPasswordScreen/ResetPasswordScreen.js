import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/Social SIgn In Buttons";
import {useNavigation} from "@react-navigation/native";

const ResetPasswordScreen = () => {

    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const navigation = useNavigation();

    const onSubmitPressed = () => {
        console.warn("Submit");
        navigation.navigate('Home');
    }

    const onBackPressed = () => {
        console.warn("Back Pressed");
        navigation.navigate('SignIn');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}> Reset Your Password </Text>

                <CustomInput placeHolder="Code"
                             value={code}
                             setValue={setCode}
                />

                <CustomInput placeHolder="Enter your new Password"
                             value={newPassword}
                             setValue={setNewPassword}
                />

                <CustomButton text="Submit"
                              onPress={onSubmitPressed}
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

export default ResetPasswordScreen;