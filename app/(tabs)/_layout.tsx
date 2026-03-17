import {Tabs} from "expo-router";
import {GraduationCap, Menu, User} from "lucide-react-native";
import {colors} from '@/styles/globalStyles'

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            tabBarStyle: {
                backgroundColor: colors.tabBar,
            },
            tabBarInactiveTintColor: colors.text,
            tabBarActiveTintColor: colors.text,
            tabBarActiveBackgroundColor: colors.lightContainer,
        }}>
            <Tabs.Screen
                name="grades"
                options={{
                    title: 'Оценки',
                    headerShown: false,
                    tabBarIcon: ({color, size}) =>
                        <GraduationCap color={color} size={size} />
                }}
            />
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Главная',
                    headerShown: false,
                    tabBarIcon: ({color, size}) =>
                        <Menu color={color} size={size} />
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Профиль',
                    headerShown: false,
                    tabBarIcon: ({color, size}) =>
                        <User color={color} size={size} />
                }}
            />
        </Tabs>
    )
}