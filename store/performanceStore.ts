import {create} from 'zustand'

export type PerformanceState = {
    gpa: number,
    setGpa: (gpa: number) => void,
    grades: GradeState[],
    setGrades: (grades: GradeState[]) => void,
}

export type GradeState = {
    ratings: RatingState[], // рейтинг 1 / рейтинг 2
    entranceRating: number, // рейтинг допуска
    exam: number, // экзамен
    courseWork: { // курсовая работа
        fromStatement: number, // из ведомости
        fromJournal: number, // из журнала
    },
    finalGrade: number // итоговая оценка
}

export type RatingState = {
    practices: number[], // практические (занятия)
    currents: { // текущие
        current: number, // ТУ1
        milestone: number, // РК1
    },
    fromStatement: { // из ведомости
        current: number, // ТУ1
        milestone: number, // РК1
    },
    total: number, // Р1 / Р2
}

export default create<PerformanceState>()((set) => ({
    gpa: 0,
    setGpa: (gpa) => set({gpa}),
    grades: [],
    setGrades: (grades) => set({grades}),
}))