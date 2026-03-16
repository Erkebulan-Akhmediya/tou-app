import {StyleSheet} from 'react-native';

export const colors = {
    bg: '#06182F'
}

const globalStyles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 20,
        padding: 10
    },
    safeAreaView: {
        flex: 1,
        flexDirection: 'column',
        padding: 20,
        backgroundColor: '#06182F',
    },
    text: {
        color: '#fff',
    },
    darkContainer: {
        borderRadius: 20,
        padding: 10,
        backgroundColor: '#304661BD'
    },
    lightContainer: {
        borderRadius: 20,
        padding: 5,
        backgroundColor: '#FFFFFF33'
    }
})

export default globalStyles;