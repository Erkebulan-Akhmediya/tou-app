import {Text, StyleSheet} from "react-native";
import React from "react";
import {TextInput, Button} from "react-native-paper";
import {useRouter} from "expo-router";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import globalStyles from "@/styles/globalStyles";

export default function Login() {
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    const router = useRouter();
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{...globalStyles.safeAreaView, justifyContent: 'center', ...globalStyles.bg}}>
                <Text style={loginStyles.topText}>
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

type LoginTextInputProps = {
    value: string,
    onChangeText: (text: string) => void,
    label: string
}

function LoginTextInput({value, onChangeText, label}: LoginTextInputProps) {
    return (
        <TextInput
            value={value}
            onChangeText={onChangeText}
            mode="outlined"
            label={<Text style={{fontSize: 25}}>{label}</Text>}
            outlineStyle={{
                borderRadius: 50,
            }}
            style={{marginBottom: 20}}
            contentStyle={{fontSize: 20}}
            activeOutlineColor='transparent'
        />
    )
}

const loginStyles = StyleSheet.create({
    textInputOutline: {
        borderRadius: 50,
    },
    topText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 30,
        width: 300,
        alignSelf: 'center',
        marginBottom: 40
    }
})
