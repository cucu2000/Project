import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import {useNavigation} from "@react-navigation/native";

const ForgotPasswordScreen = () => {

    const [username, setUsername] = useState('');
    const navigation = useNavigation();

    const onSendPressed = () => {
        console.warn("Send");
        navigation.navigate('ResetPassword');
    }

    const onBackPressed = () => {
        console.warn("Back Pressed");
        navigation.navigate('SignIn');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}> Reset Your Password </Text>

                <CustomInput placeHolder="Username"
                             value={username}
                             setValue={setUsername}
                />

                <CustomButton text="Send"
                              onPress={onSendPressed}
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

export default ForgotPasswordScreen;