import {FlatList, Text} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import globalStyles from "@/styles/globalStyles";
import AppHeader from "@/components/app-header";
import usePerformanceStore, {GradeState} from '@/store/performanceStore'
import GradesCourseGrade from "@/components/grades-course-grade";

export default function Grades() {
    const grades: GradeState[] = usePerformanceStore((state) => state.grades);
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{...globalStyles.safeAreaView}}>
                <AppHeader/>
                <Text style={[globalStyles.titleText, globalStyles.text]}>Оценки</Text>
                <FlatList
                    data={grades}
                    renderItem={({item: grade}) => <GradesCourseGrade grade={grade}/>}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    )
}
