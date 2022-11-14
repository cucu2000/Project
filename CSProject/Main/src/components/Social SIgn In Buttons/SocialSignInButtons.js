import React from 'react';
import {View} from "react-native";
import CustomButton from "../CustomButton";

const SocialSignInButtons = () => {

    const onFBPressed = () => {
        console.warn("FB Pressed")
    }

    const onGooglePressed = () => {
        console.warn("Google Pressed")
    }

    return (
        <>
            <CustomButton
                text={"Sign In With Facebook"}
                onPress={onFBPressed}
                bgColor="#E7EAF4"
                fgColor="#4765A9"
            />

            <CustomButton
                text={"Sign In With Google"}
                onPress={onGooglePressed}
                bgColor="#FAE9EA"
                fgColor="#363636"
            />
        </>
    );
};

export default SocialSignInButtons;
