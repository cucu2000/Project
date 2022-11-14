import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/Social SIgn In Buttons";
import {useNavigation} from "@react-navigation/native";

const SignUpScreen = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setRepeat] = useState('');
    const navigation = useNavigation();

    const onRegisterPressed = () => {
        console.warn("Register");

        navigation.navigate('ConfirmEmail');
    }

    const onSignInPressed = () => {
        console.warn("Sign In Pressed");

        navigation.navigate('SignIn')
    }

    const onTermsPressed = () => {
        console.warn("Terms Pressed")
    }

    const onPolicyPressed = () => {
        console.warn("Policy Pressed")
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}> Create an Account </Text>

                <CustomInput placeHolder="Username"
                             value={username}
                             setValue={setUsername}
                />

                <CustomInput placeHolder="Email"
                             value={email}
                             setValue={setEmail}
                />

                <CustomInput
                    placeHolder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry
                />

                <CustomInput
                    placeHolder="Repeat Password"
                    value={passwordRepeat}
                    setValue={setRepeat}
                    secureTextEntry
                />

                <CustomButton
                    text={"Register"}
                    onPress={onRegisterPressed}
                />

                <Text style={styles.text}>
                    By registering, you confirm that you accept our{' '}
                    <Text style={styles.link} onPress={onTermsPressed}>Terms of Use </Text> and {' '}
                    <Text style={styles.link} onPress={onPolicyPressed}> Privacy Policy </Text>
                </Text>

                <SocialSignInButtons/>

                <CustomButton
                    text={"Have an Account? Sign in"}
                    onPress={onSignInPressed}
                    type="TERTIARY"
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

export default SignUpScreen;