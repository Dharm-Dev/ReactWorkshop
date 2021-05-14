import {Dimensions, StyleSheet} from 'react-native';
const w=Dimensions.get('window').width;
const h=Dimensions.get('window').height;
const style=StyleSheet.create({
    imgBack:{
        height:h,
        width:w,
    },
    active:{
        color:'blue',
    },
    nonActive:{
        color:'gray',
    },
    logView:{
        height:h/2,
        paddingTop:h/8,
        // backgroundColor:'gold',
        // opacity:0.3,
    },
    title:{
        fontSize:16,
        color:'#992020',
        fontWeight:'bold',
        fontFamily:'serif',
        opacity:0.9,
        textAlign:'center',
    },
    textInput:{
        height:w/8,
        marginTop:12,
        alignSelf:'center',
        width:2*w/3,
        borderWidth:2,
        // borderTopColor:'white',
        borderRadius:12,
        borderBottomColor:'red',
        textAlign:'center',
        textAlignVertical:'bottom',
        backgroundColor:'white',
        opacity:0.8,
    },
    forget:{
        color:'dodgerblue',
        textAlign:'center',
        // paddingRight:w/8,
        textDecorationLine:'underline',
        width:130,
        backgroundColor:'#eee',
        opacity:0.9,
    },
    Login:{
        textAlign:'center',
        textAlignVertical:'center',
        borderRadius:25,
        color:'white',
        backgroundColor:'tomato',
        marginTop:12,
        alignSelf:'center',
        height:h/18,
        width:w/2,
        borderWidth:2,
        borderColor:'red',
    },
    secretCode:{
        height:h/2,
        width:w,
    },
    secretCodeText:{
        color:'crimson',
        backgroundColor:'black',
        // fontStyle:'italic',
        fontFamily:'serif',
        opacity:0.7,
    },
    newUser:{
        color:'gold',
        textAlign:'center',
        // paddingRight:w/8,
        width:100,
        backgroundColor:'#222',
        opacity:1,
        borderRadius:12,
    },
    
});
export default style;