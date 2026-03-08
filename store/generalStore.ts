import {create} from 'zustand'

export type StudentState = {
    name: string,
    profilePictureUrl: string
}

export type WeekState = {
    number: number,
    isNumerator: boolean,
}

export type LessonState = {
    teacher: {
        profilePictureUrl: string,
        surname: string,
        name: string,
        middleName: string,
    },
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

export type GeneralState = {
    student: StudentState
    setStudent: (student: StudentState) => void,
    gpa: number,
    setGpa: (gpa: number) => void,
    week: WeekState,
    setWeek: (week: WeekState) => void,
    lessons: LessonState[],
    setLessons: (lessons: LessonState[]) => void,
    notifications: NotificationState[],
    setNotifications: (notifications: NotificationState[]) => void,
    announcementImageUrls: string[],
    setAnnouncementImageUrls: (announcementImageUrls: string[]) => void,
}

export default create<GeneralState>()((set) => ({
    student: {
        name: '',
        profilePictureUrl: '',
    },
    setStudent: (student) => set({student}),
    gpa: 0,
    setGpa: (gpa) => set({gpa}),
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
}))
