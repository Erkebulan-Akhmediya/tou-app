import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import globalStyles from "@/styles/globalStyles";
import {Text} from "react-native";

export default function Settings() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{...globalStyles.safeAreaView}}>
                <Text>Settings</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}