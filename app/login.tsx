import {View, Text, StyleSheet} from "react-native";
import React from "react";
import {TextInput, Button} from "react-native-paper";
import {useRouter} from "expo-router";

export default function Login() {
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    const router = useRouter();
    return (
        <View style={loginStyles.container}>
            <Text>Вход в личный кабинет</Text>
            <TextInput value={login} onChangeText={setLogin} mode="outlined" label="Логин"/>
            <TextInput value={password} onChangeText={setPassword} mode="outlined" label="Пароль"/>
            <Button mode="contained" onPress={ () => {router.navigate('/home')} }>Войти</Button>
        </View>
    )
}

const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    }
})
