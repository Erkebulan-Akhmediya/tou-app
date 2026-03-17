import {StyleSheet} from 'react-native';

export const colors = {
    bg: '#06182F',
    darkContainer: '#304661BD',
    lightContainer: '#FFFFFF33',
    text: '#fff',
    tabBar: '#304661'
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
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: colors.bg,
    },
    text: {
        color: colors.text,
    },
    darkContainer: {
        borderRadius: 20,
        padding: 10,
        backgroundColor: colors.darkContainer,
    },
    lightContainer: {
        borderRadius: 20,
        padding: 5,
        backgroundColor: colors.lightContainer
    },
    titleText: {
        fontSize: 25,
        marginVertical: 20
    }
})

export default globalStyles;