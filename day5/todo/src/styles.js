import {StyleSheet, Dimensions} from 'react-native';
const w=Dimensions.get("window").width;
const h=Dimensions.get("window").height;
 
const style=StyleSheet.create({
    
//   back:{
//     backgroundColor:'dodgerblue',
//     // height:h,
//   },

  upper:{
    // height:h/3,
    backgroundColor:"olive"
  },
  lower:{
    // marginTop:10,
    padding:10,
    minHeight:h-h/4,
    // elevation:5,
    // borderWidth:1,
    backgroundColor:'#ad4'

  },
  // Top heading
  title:{
    margin:10,
    fontFamily:'times new roman',
    fontWeight:'bold',
    textAlign:'center',
      color:'blue',
      textShadowColor:'yellow',
      textShadowRadius:150,
      fontSize:32,
      // shadowOpacity:0.3
  },
  hr:{
    height:1,
    width:w,
    marginTop:12,
    borderWidth:1,
    borderBottomColor:'#8f3',
    // textDecorationLine:'underline',
    // textDecorationColor:'#f00',
  },
  // Add new block text+btn
  newAdd:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-evenly',
      marginTop:15,

  },
  aloneListView:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginTop:15,
    // borderWidth:2,
    
  },
  input:{
    borderWidth:1,
    borderRadius:20,
    width:w-(w/4),
    padding:10,
    elevation:5,
    backgroundColor:'#aadfa9'

  },
  addBtn:{
    elevation:25,
    fontSize:24,
    backgroundColor:'green',
    width:(w/8),
    height:w/8,

    textAlign:'center',
    // paddingVertical:10,
    color:'white',

    borderWidth:2,
    borderColor:"white",
    borderRadius:w/16,

    textShadowColor:'#0f9',
    textShadowRadius:25,

  },  
  cardView:{
    alignSelf:'center',
    width:h-w,
    // marginTop:15,
    // height:h/5,
    backgroundColor:'orange',
    textAlign:'center',
    padding:15,
    // elevation:25,
  
  }, 
  cardViewList:{
  elevation:12,
    alignSelf:'center',
    width:h-w,
    // marginTop:15,
    // height:h/5,

    backgroundColor:'#ca6',
    textAlign:'center',
    padding:15,
    // elevation:25,
  },  
  totalTask:{
    textDecorationLine:'underline',
    margin:12,
  },

  delBtn:{
    // fontSize:16,
    backgroundColor:'tomato',
    width:25,
    height:25,
    textAlignVertical:'center',
    textAlign:'center',
    // paddingVertical:10,
    color:'white',
    borderRadius:12,
    elevation:5,
  }

}); 
export default style;