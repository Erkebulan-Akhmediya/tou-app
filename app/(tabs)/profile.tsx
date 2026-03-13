import {Text, View} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import globalStyles from "@/styles/globalStyles";
import OptionalProfileImage from "@/components/optional-profile-image";
import useGeneralStore, {StudentState} from '@/store/generalStore'
import {Button} from "react-native-paper";

export default function Profile() {
    const student: StudentState = useGeneralStore(state => state.student)
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
                <Button onPress={() => {}}>Настройки профиля</Button>
                <Button onPress={() => {}}>Личные данные</Button>
                <Button onPress={() => {}}>Приложение</Button>
                <Button onPress={() => {}}>Выход</Button>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}