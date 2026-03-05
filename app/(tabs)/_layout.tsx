import {Tabs} from "expo-router";
import {CalendarCheck, GraduationCap, Menu, BookMarked, User} from "lucide-react-native";

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="schedule"
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) =>
                        <CalendarCheck color={color} size={size}/>
                }}
            />
            <Tabs.Screen
                name="grades"
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) =>
                        <GraduationCap color={color} size={size} />
                }}
            />
            <Tabs.Screen
                name="home"
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) =>
                        <Menu color={color} size={size} />
                }}
            />
            <Tabs.Screen
                name="materials"
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) =>
                        <BookMarked color={color} size={size} />
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) =>
                        <User color={color} size={size} />
                }}
            />
        </Tabs>
    )
}