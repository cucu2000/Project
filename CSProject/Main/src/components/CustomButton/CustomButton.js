import React from 'react';
import {Text, View, StyleSheet, Pressable} from "react-native";

function CustomButton({onPress, text, type = "PRIMARY", bgColor, fgColor}) {
    return (
        <Pressable onPress={onPress}
                   style={[
                       styles.container,
                       styles[`container_${type}`],
                       bgColor ? {backgroundColor: bgColor} : {}
                   ]}>
            <Text style={[
                styles.text,
                styles[`text_${type}`],
                fgColor ? {color: fgColor} : {}
            ]}> {text} </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },

    container_PRIMARY: {
        backgroundColor: '#3B71F3',
    },

    container_TERTIARY: {},

    container_SECONDARY: {
        borderColor: '#3871F3',
        borderWidth: 2,
    },

    text: {
        fontWeight: 'bold',
        color: 'white',
    },

    text_TERTIARY: {
        color: 'gray',
    },

    text_SECONDARY: {
        color: '#3871F3',
    }
});

export default CustomButton;