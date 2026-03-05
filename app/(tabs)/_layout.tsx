import {Tabs} from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="schedule" />
            <Tabs.Screen name="grades" />
            <Tabs.Screen name="home" />
            <Tabs.Screen name="materials" />
            <Tabs.Screen name="profile" />
        </Tabs>
    )
}