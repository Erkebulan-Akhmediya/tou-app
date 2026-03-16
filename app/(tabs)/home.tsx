import HomePageTabs from "@/components/home-page-tabs";
import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import useGeneralStore from '@/store/generalStore';
import usePerformanceStore from '@/store/performanceStore';
import globalStyles from "@/styles/globalStyles";
import {initialFetch} from "@/initial-setup";
import AppHeader from "@/components/app-header";

export default function Home() {
    const student = useGeneralStore((state) => state.student);
    const gpa = usePerformanceStore((state) => state.gpa);
    const week = useGeneralStore((state) => state.week);

    useEffect(() => {
        // WARN: this initial fetch is for testing purposes and should be removed in production
        initialFetch();
    }, [])

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{...globalStyles.safeAreaView}}>
                <AppHeader />
                <Text style={[globalStyles.text, { fontSize: 30 }]}>Сәлем, {student.name}</Text>
                <View
                    style={{...styles.generalInfoRow}}>
                    <View style={{...globalStyles.darkContainer, flex: 1}}>
                        <Text style={[globalStyles.text]}>Мой GPA</Text>
                        <Text style={[globalStyles.text]}>{gpa}</Text>
                    </View>
                    <View style={{...globalStyles.darkContainer, flex: 1}}>
                        <Text style={[globalStyles.text]}>Неделя №{week.number}</Text>
                        <Text style={[globalStyles.text]}>{week.isNumerator ? 'Числитель' : 'Знаменатель'}</Text>
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