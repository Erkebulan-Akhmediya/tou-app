import {Text} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import globalStyles from "@/styles/globalStyles";
import AppHeader from "@/components/app-header";

export default function Schedule() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{...globalStyles.safeAreaView}}>
                <AppHeader />
                <Text>Расписание</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}