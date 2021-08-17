import {StyleSheet,Dimensions} from 'react-native';

export default StyleSheet.create({
    mainTrue: {

        margin:10,
        padding:10,
        backgroundColor:'#508940',
        borderRadius:5
    },
    mainFalse: {

        margin:10,
        padding:10,
        backgroundColor:'#334247',
        borderRadius:5
    },

    textTrue: {
        fontSize:16,
        fontWeight:'600',
        paddingTop:5,
        color:'white'},
    textFalse: {
        fontSize:16,
        fontWeight:'600',
        paddingTop:5,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        color:'gray'},
});
