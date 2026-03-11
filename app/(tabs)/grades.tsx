import {FlatList, Text, View, ScrollView, StyleSheet} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import globalStyles from "@/styles/globalStyles";
import AppHeader from "@/components/app-header";
import usePerformanceStore, {GradeState} from '@/store/performanceStore'
import {PersonState} from "@/store/generalStore";
import OptionalProfileImage from "@/components/optional-profile-image";
import {Col, Grid, Row} from "react-native-easy-grid";

export default function Grades() {
    const grades: GradeState[] = usePerformanceStore((state) => state.grades);
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{...globalStyles.safeAreaView}}>
                <AppHeader/>
                <Text>Оценки</Text>
                <FlatList
                    data={grades}
                    renderItem={({item: grade}) => <CourseGrade grade={grade}/>}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

function CourseGrade({grade}: { grade: GradeState }) {
    return (
        <View>
            <View style={{...globalStyles.container}}>
                <Text>{grade.course.name}</Text>
                <View style={{flexDirection: 'row'}}>
                    {grade.course.teachers.map(
                        (teacher, index) => <TeacherBadge key={index} teacher={teacher} />
                    )}
                </View>
            </View>
            <GradeTable grade={grade} />
        </View>
    )
}

function TeacherBadge({teacher}: { teacher: PersonState }) {
    const teacherFullName = `${teacher.surname} ${teacher.name[0]}.` +
        (teacher.middleName ? ` ${teacher.middleName[0]}.` : '')
    return (
        <View style={{...globalStyles.container, flexDirection: 'row'}}>
            <OptionalProfileImage
                source={{uri: teacher.profilePictureUrl}}
                style={{width: 20, height: 20}}
            />
            <Text>{teacherFullName}</Text>
        </View>
    )
}

function GradeTable({grade}: { grade: GradeState }) {
    return (
        <ScrollView horizontal>
            <Grid style={{width:'300%'}}>
                {grade.ratings.map((rating, index) => (
                    <Col key={index}>
                        <Row style={gradeTableStylesheet.cell}>
                            <Text>{index+1} рейтинг</Text>
                        </Row>
                        <Row>
                            <Col>
                                <Row style={gradeTableStylesheet.cell}>
                                    <Text>Практические</Text>
                                </Row>
                                <Row>
                                    {rating.practices.map((practice, index) => (
                                        <Col key={index}>
                                            <Row style={gradeTableStylesheet.cell}>
                                                <Text>{index+1}</Text>
                                            </Row>
                                            <Row style={gradeTableStylesheet.cell}>
                                                <Text>{practice}</Text>
                                            </Row>
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                            <Col>
                                <Row style={gradeTableStylesheet.cell}>
                                    <Text>Текущие</Text>
                                </Row>
                                <Row>
                                    <Col>
                                        <Row style={gradeTableStylesheet.cell}>
                                            <Text>ТУ{index+1}</Text>
                                        </Row>
                                        <Row style={gradeTableStylesheet.cell}>
                                            <Text>{rating.currents.current}</Text>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row style={gradeTableStylesheet.cell}>
                                            <Text>РК{index+1}</Text>
                                        </Row>
                                        <Row style={gradeTableStylesheet.cell}>
                                            <Text>{rating.currents.milestone}</Text>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row style={gradeTableStylesheet.cell}>
                                    <Text>Из ведомости</Text>
                                </Row>
                                <Row>
                                    <Col>
                                        <Row style={gradeTableStylesheet.cell}>
                                            <Text>ТУ{index+1}</Text>
                                        </Row>
                                        <Row style={gradeTableStylesheet.cell}>
                                            <Text>{rating.fromStatement.current}</Text>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row style={gradeTableStylesheet.cell}>
                                            <Text>РК{index+1}</Text>
                                        </Row>
                                        <Row style={gradeTableStylesheet.cell}>
                                            <Text>{rating.fromStatement.milestone}</Text>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row style={gradeTableStylesheet.cell} size={1000}>
                                    <Text>Р{index+1}</Text>
                                </Row>
                                <Row style={gradeTableStylesheet.cell} size={1}>
                                    <Text>{rating.total}</Text>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                ))}
                <Col>
                    <Row style={gradeTableStylesheet.cell}>
                        <Text>Рейтинг допуска</Text>
                    </Row>
                    <Row style={gradeTableStylesheet.cell}>
                        <Text>{grade.entranceRating}</Text>
                    </Row>
                </Col>
                <Col>
                    <Row style={gradeTableStylesheet.cell}>
                        <Text>Экзамен</Text>
                    </Row>
                    <Row style={gradeTableStylesheet.cell}>
                        <Text>{grade.exam}</Text>
                    </Row>
                </Col>
                <Col>
                    <Row style={gradeTableStylesheet.cell}>
                        <Text>Курсовая работа</Text>
                    </Row>
                    <Row>
                        <Col>
                            <Row style={gradeTableStylesheet.cell}>
                                <Text>из ведомости</Text>
                            </Row>
                            <Row style={gradeTableStylesheet.cell}>
                                <Text>{grade.courseWork.fromStatement}</Text>
                            </Row>
                        </Col>
                        <Col>
                            <Row style={gradeTableStylesheet.cell}>
                                <Text>из журнала</Text>
                            </Row>
                            <Row style={gradeTableStylesheet.cell}>
                                <Text>{grade.courseWork.fromJournal}</Text>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row style={gradeTableStylesheet.cell}>
                        <Text>Итоговая оценка</Text>
                    </Row>
                    <Row style={gradeTableStylesheet.cell}>
                        <Text>{grade.finalGrade}</Text>
                    </Row>
                </Col>
            </Grid>
        </ScrollView>
    )
}

const gradeTableStylesheet = StyleSheet.create({
    cell: {
        borderWidth: 1,
    }
})