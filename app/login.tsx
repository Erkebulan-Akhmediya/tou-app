import {Text, StyleSheet} from "react-native";
import React from "react";
import {Button} from "react-native-paper";
import {useRouter} from "expo-router";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import globalStyles from "@/styles/globalStyles";
import LoginTextInput from "@/components/login-text-input";

export default function Login() {
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    const router = useRouter();
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{...globalStyles.safeAreaView, justifyContent: 'center'}}>
                <Text style={[loginStyles.topText, globalStyles.text]}>
                    Вход в личный кабинет
                </Text>
                <LoginTextInput
                    value={login}
                    onChangeText={setLogin}
                    label='Логин'
                />
                <LoginTextInput
                    value={password}
                    onChangeText={setPassword}
                    label='Пароль'
                />
                <Button
                    mode="contained"
                    onPress={() => router.navigate('/home')}
                    style={{
                        backgroundColor: '#1D3D66',
                        height: 50,
                        justifyContent: 'center'
                    }}
                    labelStyle={{
                        fontSize: 30,
                    }}
                >
                    Войти
                </Button>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const loginStyles = StyleSheet.create({
    topText: {
        textAlign: 'center',
        fontSize: 30,
        width: 300,
        alignSelf: 'center',
        marginBottom: 40
    }
})
