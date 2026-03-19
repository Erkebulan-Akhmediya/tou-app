import {Text, StyleSheet, Alert} from "react-native";
import {Button} from "react-native-paper";
import {router} from "expo-router";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import globalStyles from "@/styles/globalStyles";
import LoginTextInput from "@/components/login-text-input";
import axios from "axios";
import useLoginStore from "@/store/loginStore";

async function login(): Promise<void> {
    const {setLoading, username, password, setToken} = useLoginStore.getState()
    try {
        setLoading(true);
        const url = `${process.env.EXPO_PUBLIC_BACKEND_URL}/auth/login`
        const payload = {username, password}
        const {data: token} = await axios.post(url, payload);
        setToken(token);
        router.navigate('/home');
    } catch (e) {
        Alert.alert('Неверный логин или пароль')
        console.error(e);
    } finally {
        setLoading(false);
    }
}

export default function Login() {
    const username = useLoginStore((state) => state.username)
    const setUsername = useLoginStore((state) => state.setUsername)
    const password = useLoginStore((state) => state.password)
    const setPassword = useLoginStore((state) => state.setPassword)
    const loading = useLoginStore((state) => state.loading)
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{...globalStyles.safeAreaView, justifyContent: 'center'}}>
                <Text style={[loginStyles.topText, globalStyles.text]}>
                    Вход в личный кабинет
                </Text>
                <LoginTextInput
                    value={username}
                    onChangeText={setUsername}
                    label='Логин'
                />
                <LoginTextInput
                    value={password}
                    onChangeText={setPassword}
                    label='Пароль'
                />
                <Button
                    mode="contained"
                    loading={loading}
                    onPress={login}
                    style={loginStyles.button}
                    labelStyle={{fontSize: 30}}
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
    },
    button: {
        backgroundColor: '#1D3D66',
        height: 50,
        justifyContent: 'center'
    }
})
