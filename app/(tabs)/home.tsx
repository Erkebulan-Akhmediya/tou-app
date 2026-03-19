import HomePageTabs from "@/components/home-page-tabs";
import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import useGeneralStore from '@/store/generalStore';
import globalStyles from "@/styles/globalStyles";
import {initialFetch} from "@/initial-setup";
import AppHeader from "@/components/app-header";
import axios from "axios";

async function getStudent() {
    const {setStudent} = useGeneralStore.getState();
    try {
        const {data: student} = await axios.get('/student')
        setStudent(student)
    } catch (e) {
        console.error(e);
    }
}

async function getWeek() {
    const {setWeek} = useGeneralStore.getState();
    try {
        const {data} = await axios.get('/schedule/week');
        setWeek(data);
    } catch (e) {
        console.error(e);
    }
}

export default function Home() {
    const student = useGeneralStore((state) => state.student);
    const week = useGeneralStore((state) => state.week);

    useEffect(() => {
        // WARN: this initial fetch is for testing purposes and should be removed in production
        initialFetch();
        getStudent();
        getWeek();
    }, [])

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{...globalStyles.safeAreaView}}>
                <AppHeader/>
                <Text style={[globalStyles.text, {fontSize: 30}]}>Сәлем, {student.name}</Text>
                <View style={{...styles.generalInfoRow, marginTop: 15, marginBottom: 20}}>
                    <View style={[globalStyles.darkContainer, {flex: 1, padding: 15}]}>
                        <Text style={[globalStyles.text, {fontSize: 15}]}>Мой GPA</Text>
                        <Text style={[globalStyles.text, {fontSize: 30}]}>{student.gpa}</Text>
                    </View>
                    <View style={{...globalStyles.darkContainer, flex: 1, padding: 15, justifyContent: 'space-between' }}>
                        <Text style={[globalStyles.text, {fontSize: 15}]}>Неделя №{week.number}</Text>
                        <Text style={[globalStyles.text, {fontSize: 15}]}>{week.isNumerator ? 'Числитель' : 'Знаменатель'}</Text>
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