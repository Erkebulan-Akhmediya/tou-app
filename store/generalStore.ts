import {create} from 'zustand'

export type PersonState = {
    profilePictureUrl: string | null,
    surname: string,
    name: string,
    middleName: string | null,
}

export type StudentState = PersonState & {
    group: string,
    gpa: number,
}

export type WeekState = {
    number: number,
    isNumerator: boolean,
}

export type LessonState = {
    teacher: PersonState,
    name: string,
    type: string,
    time: string,
    classroom: string,
}

export type NotificationState = {
    title: string,
    description: string,
    imageUrl: string,
    time: string,
}

export type CourseState = {
    name: string,
    type: string,
    faculty: string,
}

export type GeneralState = {
    student: StudentState
    setStudent: (student: StudentState) => void,
    week: WeekState,
    setWeek: (week: WeekState) => void,
    lessons: LessonState[],
    setLessons: (lessons: LessonState[]) => void,
    notifications: NotificationState[],
    setNotifications: (notifications: NotificationState[]) => void,
    announcementImageUrls: string[],
    setAnnouncementImageUrls: (announcementImageUrls: string[]) => void,
    courses: CourseState[],
    setCourses: (courses: CourseState[]) => void,
}

export default create<GeneralState>()((set) => ({
    student: {
        surname: '',
        name: '',
        middleName: '',
        profilePictureUrl: '',
        group: '',
        gpa: 0,
    },
    setStudent: (student) => set({student}),
    week: {
        number: 1,
        isNumerator: true,
    },
    setWeek: (week) => set(({week})),
    lessons: [],
    setLessons: (lessons) => set({lessons}),
    notifications: [],
    setNotifications: (notifications) => set({notifications}),
    announcementImageUrls: [],
    setAnnouncementImageUrls: (announcementImageUrls) => set({announcementImageUrls}),
    courses: [],
    setCourses: (courses) => set({courses}),
}))
