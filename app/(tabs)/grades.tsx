import {Text} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import globalStyles from "@/styles/globalStyles";
import AppHeader from "@/components/app-header";

export default function Grades() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{...globalStyles.safeAreaView}}>
                <AppHeader />
                <Text>Оценки</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}