/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { theme } from '../../../App.style';

export const registerStyle = StyleSheet.create({
    content : {
        padding: 15,
        paddingTop: 10,
    },
    icon:{
        color: theme.colors.primary,
    },
    button: {
        margin: 15,
        marginLeft: 0,
        marginRight: 0,
    },
    image: {
        flex: 1,
        justifyContent: "center",
        height: 400,
      },
      text:{
        color: "black",
        marginTop: 280,
        fontSize: 20,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        // backgroundColor: 'transparent',
      },

})
