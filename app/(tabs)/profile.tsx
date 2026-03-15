import {Text, View} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import globalStyles from "@/styles/globalStyles";
import OptionalProfileImage from "@/components/optional-profile-image";
import useGeneralStore, {StudentState} from '@/store/generalStore'
import {Button} from "react-native-paper";
import {useRouter} from "expo-router";

export default function Profile() {
    const student: StudentState = useGeneralStore(state => state.student)
    const router = useRouter();
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{...globalStyles.safeAreaView}}>
                <Text>Ваш профиль</Text>
                <OptionalProfileImage
                    source={{ uri: student.profilePictureUrl }}
                    style={{width: 200, height: 200, borderRadius: 50}}
                />
                <Text>{`${student.surname} ${student.name}`}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text>Группа</Text>
                    <Text>{student.group}</Text>
                </View>
                <Button onPress={() => router.push('/profile/settings')}>Настройки профиля</Button>
                <Button onPress={() => router.push('/profile/personal-data') }>Личные данные</Button>
                <Button onPress={() => router.push('/profile/app')}>Приложение</Button>
                <Button onPress={() => router.navigate('/login')}>Выход</Button>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}