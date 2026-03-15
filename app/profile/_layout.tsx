import {Stack} from "expo-router";

export default function SettingsLayout() {
    return <Stack>
        <Stack.Screen name="app" options={{ headerShown: false }} />
        <Stack.Screen name="personal-data" options={{ headerShown: false }} />
        <Stack.Screen name="settings" options={{ headerShown: false }} />
    </Stack>
}