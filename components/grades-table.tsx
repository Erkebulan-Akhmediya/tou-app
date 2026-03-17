import {Col, Grid, Row} from "react-native-easy-grid";
import {Text, ScrollView, StyleSheet} from "react-native";
import {GradeState} from "@/store/performanceStore";
import globalStyles, {colors} from '@/styles/globalStyles'

export default function GradesTable({grade}: { grade: GradeState }) {
    return (
        <ScrollView horizontal>
            <Grid style={{width:'300%'}}>
                {grade.ratings.map((rating, index) => (
                    <Col key={index}>
                        <Row style={[gradeTableStylesheet.cell, {backgroundColor: colors.darkContainer}]}>
                            <Text style={[globalStyles.text]}>{index+1} рейтинг</Text>
                        </Row>
                        <Row>
                            <Col>
                                <Row style={[gradeTableStylesheet.cell, {backgroundColor: colors.darkContainer}]}>
                                    <Text style={[globalStyles.text]}>Практические</Text>
                                </Row>
                                <Row>
                                    {rating.practices.map((practice, index) => (
                                        <Col key={index}>
                                            <Row style={[gradeTableStylesheet.cell, {backgroundColor: colors.darkContainer}]}>
                                                <Text style={[globalStyles.text]}>{index+1}</Text>
                                            </Row>
                                            <Row style={[gradeTableStylesheet.cell, {backgroundColor: colors.lightContainer}]}>
                                                <Text style={[globalStyles.text]}>{practice}</Text>
                                            </Row>
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                            <Col>
                                <Row style={[gradeTableStylesheet.cell, {backgroundColor: colors.darkContainer}]}>
                                    <Text style={[globalStyles.text]}>Текущие</Text>
                                </Row>
                                <Row>
                                    <Col>
                                        <Row style={[gradeTableStylesheet.cell, {backgroundColor: colors.darkContainer}]}>
                                            <Text style={[globalStyles.text]}>ТУ{index+1}</Text>
                                        </Row>
                                        <Row style={[gradeTableStylesheet.cell, {backgroundColor: colors.lightContainer}]}>
                                            <Text style={[globalStyles.text]}>{rating.currents.current}</Text>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row style={[gradeTableStylesheet.cell, {backgroundColor: colors.darkContainer}]}>
                                            <Text style={[globalStyles.text]}>РК{index+1}</Text>
                                        </Row>
                                        <Row style={[gradeTableStylesheet.cell, {backgroundColor: colors.lightContainer}]}>
                                            <Text style={[globalStyles.text]}>{rating.currents.milestone}</Text>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row style={[gradeTableStylesheet.cell, {backgroundColor: colors.darkContainer}]}>
                                    <Text style={[globalStyles.text]}>Из ведомости</Text>
                                </Row>
                                <Row>
                                    <Col>
                                        <Row style={[gradeTableStylesheet.cell, {backgroundColor: colors.darkContainer}]}>
                                            <Text style={[globalStyles.text]}>ТУ{index+1}</Text>
                                        </Row>
                                        <Row style={[gradeTableStylesheet.cell, {backgroundColor: colors.lightContainer}]}>
                                            <Text style={[globalStyles.text]}>{rating.fromStatement.current}</Text>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row style={[gradeTableStylesheet.cell, {backgroundColor: colors.darkContainer}]}>
                                            <Text style={[globalStyles.text]}>РК{index+1}</Text>
                                        </Row>
                                        <Row style={[gradeTableStylesheet.cell, {backgroundColor: colors.lightContainer}]}>
                                            <Text style={[globalStyles.text]}>{rating.fromStatement.milestone}</Text>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row style={[gradeTableStylesheet.cell, {backgroundColor: colors.darkContainer}]} size={1000}>
                                    <Text style={[globalStyles.text]}>Р{index+1}</Text>
                                </Row>
                                <Row style={[gradeTableStylesheet.cell, {backgroundColor: colors.lightContainer}]} size={1}>
                                    <Text style={[globalStyles.text]}>{rating.total}</Text>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                ))}
                <Col>
                    <Row style={[gradeTableStylesheet.cell, {backgroundColor: colors.darkContainer}]}>
                        <Text style={[globalStyles.text]}>Рейтинг допуска</Text>
                    </Row>
                    <Row style={[gradeTableStylesheet.cell, {backgroundColor: colors.lightContainer}]}>
                        <Text style={[globalStyles.text]}>{grade.entranceRating}</Text>
                    </Row>
                </Col>
                <Col>
                    <Row style={[gradeTableStylesheet.cell, {backgroundColor: colors.darkContainer}]}>
                        <Text style={[globalStyles.text]}>Экзамен</Text>
                    </Row>
                    <Row style={[gradeTableStylesheet.cell, {backgroundColor: colors.lightContainer}]}>
                        <Text style={[globalStyles.text]}>{grade.exam}</Text>
                    </Row>
                </Col>
                <Col>
                    <Row style={[gradeTableStylesheet.cell, {backgroundColor: colors.darkContainer}]}>
                        <Text style={[globalStyles.text]}>Курсовая работа</Text>
                    </Row>
                    <Row>
                        <Col>
                            <Row style={[gradeTableStylesheet.cell, {backgroundColor: colors.darkContainer}]}>
                                <Text style={[globalStyles.text]}>из ведомости</Text>
                            </Row>
                            <Row style={[gradeTableStylesheet.cell, {backgroundColor: colors.lightContainer}]}>
                                <Text style={[globalStyles.text]}>{grade.courseWork.fromStatement}</Text>
                            </Row>
                        </Col>
                        <Col>
                            <Row style={[gradeTableStylesheet.cell, {backgroundColor: colors.darkContainer}]}>
                                <Text style={[globalStyles.text]}>из журнала</Text>
                            </Row>
                            <Row style={[gradeTableStylesheet.cell, {backgroundColor: colors.lightContainer}]}>
                                <Text style={[globalStyles.text]}>{grade.courseWork.fromJournal}</Text>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row style={[gradeTableStylesheet.cell, {backgroundColor: colors.darkContainer}]}>
                        <Text style={[globalStyles.text]}>Итоговая оценка</Text>
                    </Row>
                    <Row style={[gradeTableStylesheet.cell, {backgroundColor: colors.lightContainer}]}>
                        <Text style={[globalStyles.text]}>{grade.finalGrade}</Text>
                    </Row>
                </Col>
            </Grid>
        </ScrollView>
    )
}

const gradeTableStylesheet = StyleSheet.create({
    cell: {
        borderWidth: 1,
        padding: 10
    }
})