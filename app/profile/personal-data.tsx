import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import globalStyles from "@/styles/globalStyles";
import {Text} from "react-native";

export default function PersonalData() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{...globalStyles.safeAreaView}}>
                <Text>Personal Data</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}