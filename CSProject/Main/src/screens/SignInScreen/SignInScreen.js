import React, {useState} from 'react';
import {View, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../assets/Logo_1.png';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/Social SIgn In Buttons";
import {useNavigation} from "@react-navigation/native";
import {useAuth0} from "react-native-auth0";

const SignInScreen = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {height} = useWindowDimensions();
    const navigation = useNavigation();
    const {authorize} = useAuth0();

    const onSignInPressed = async () => {
        try {
            await authorize();
            navigation.navigate('Home');
        } catch (e) {
            console.log(e);
        }
    }

    const onForgotPressed = () => {
        console.warn("Forgot Password");

        navigation.navigate('ForgotPassword');
    }

    const onCreatePressed = () => {
        console.warn("Create Pressed");

        navigation.navigate('SignUp');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image
                    source={Logo}
                    style={[styles.logo, {height: height * 0.3}]}
                    resizeMode="contain"
                />

                <CustomInput placeHolder="Username"
                             value={username}
                             setValue={setUsername}
                />

                <CustomInput
                    placeHolder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry
                />

                <CustomButton
                    text={"Sign In"}
                    onPress={onSignInPressed}
                />

                <SocialSignInButtons/>

                <CustomButton
                    text={"Forgot Password"}
                    onPress={onForgotPressed}
                    type="TERTIARY"
                />

                <CustomButton
                    text={"Create Account"}
                    onPress={onCreatePressed}
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

    logo: {
        width: '70%',
        mawWidth: 300,
        maxHeight: 200,
    },
});

export default SignInScreen;