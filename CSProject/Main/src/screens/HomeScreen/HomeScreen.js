import React from 'react';
import {View, Text} from "react-native";
import {useAuth0} from "react-native-auth0";
import CustomButton from "../../components/CustomButton";
import {useNavigation} from "@react-navigation/native";

const HomeScreen = () => {
    const {user, clearSession} = useAuth0();

    const loggedIn = user !== undefined && user !== null;

    const navigation = useNavigation();

    const onLogOutPressed = async () => {
        try {
            await clearSession();
            navigation.navigate('SignIn');
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <View>
            {loggedIn && <Text>You are logged in as {user.name}</Text>}
            {!loggedIn && <Text>You are not logged in</Text>}

            <CustomButton
                text={"Log Out"}
                onPress={onLogOutPressed}
            />

        </View>


    );
}

export default HomeScreen;