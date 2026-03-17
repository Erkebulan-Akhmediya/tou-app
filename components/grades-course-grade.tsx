import {GradeState} from "@/store/performanceStore";
import {Text, View} from "react-native";
import globalStyles from "@/styles/globalStyles";
import GradesTeacherBadge from "@/components/grades-teacher-badge";
import GradesTable from "@/components/grades-table";

export default function GradesCourseGrade({grade}: { grade: GradeState }) {
    return (
        <View style={[{marginBottom: 30}]}>
            <View style={[globalStyles.darkContainer, {padding: 15, marginBottom: 10}]}>
                <Text style={[globalStyles.text, {fontSize: 17, marginBottom: 10}]}>{grade.course.name}</Text>
                <View style={{flexDirection: 'row'}}>
                    {grade.course.teachers.map(
                        (teacher, index) => <GradesTeacherBadge key={index} teacher={teacher} />
                    )}
                </View>
            </View>
            <GradesTable grade={grade} />
        </View>
    )
}