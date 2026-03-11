import HomePageTabs from "@/components/home-page-tabs";
import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import useGeneralStore from '@/store/generalStore';
import globalStyles from "@/styles/globalStyles";
import {initialFetch} from "@/initial-setup";
import AppHeader from "@/components/app-header";

export default function Home() {
    const student = useGeneralStore((state) => state.student);
    const gpa = useGeneralStore((state) => state.gpa);
    const week = useGeneralStore((state) => state.week);

    useEffect(() => {
        // WARN: this initial fetch is for testing purposes and should be removed in production
        initialFetch();
    }, [])

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{...globalStyles.safeAreaView}}>
                <AppHeader />
                <Text>Сәлем, {student.name}</Text>
                <View
                    style={{...styles.generalInfoRow}}>
                    <View style={{...globalStyles.container, flex: 1}}>
                        <Text>Мой GPA</Text>
                        <Text>{gpa}</Text>
                    </View>
                    <View style={{...globalStyles.container, flex: 1}}>
                        <Text>Неделя №{week.number}</Text>
                        <Text>{week.isNumerator ? 'Числитель' : 'Знаменатель'}</Text>
                    </View>
                </View>
                <HomePageTabs/>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    generalInfoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 15,
    }
})