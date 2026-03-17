import {Text, View, StyleSheet} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import globalStyles from "@/styles/globalStyles";
import OptionalProfileImage from "@/components/optional-profile-image";
import useGeneralStore, {StudentState} from '@/store/generalStore'
import {Button} from "react-native-paper";
import ProfileButton from '@/components/profile-button'
import {useRouter} from "expo-router";

export default function Profile() {
    const student: StudentState = useGeneralStore(state => state.student)
    const router = useRouter();
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{...globalStyles.safeAreaView, alignItems: 'center'}}>
                <Text style={[globalStyles.titleText, globalStyles.text]}>Ваш профиль</Text>
                <OptionalProfileImage
                    source={{ uri: student.profilePictureUrl }}
                    style={{width: 150, height: 150, borderRadius: 50}}
                />
                <Text style={[globalStyles.text, {fontSize: 40}]}>{`${student.surname} ${student.name}`}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 50 }}>
                    <Text style={[globalStyles.text]}>Группа</Text>
                    <Text
                        style={[
                            globalStyles.text,
                            {marginLeft: 10, backgroundColor: 'blue', padding: 5, borderRadius: 10}
                        ]}
                    >
                        {student.group}
                    </Text>
                </View>
                <ProfileButton href='/profile/settings' text='Настройки профиля' />
                <ProfileButton href='/profile/personal-data' text='Личные данные' />
                <ProfileButton href='/profile/app' text='Приложение' />
                <Button
                    onPress={() => router.push('/login')}
                    style={[profileStyles.blueBadge, {marginTop: 50, borderRadius: 20}]}
                    labelStyle={[{fontSize: 20}, globalStyles.text]}
                >
                    Выйти
                </Button>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const profileStyles = StyleSheet.create({
    blueBadge: {
        marginLeft: 10,
        backgroundColor: 'blue',
        padding: 5,
        borderRadius: 10
    }
})