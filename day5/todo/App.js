/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { Button,ScrollView, Dimensions, NativeModules, StyleSheet ,Text, TextInput, View, TouchableOpacity } from 'react-native';
const w=Dimensions.get("window").width;
const h=Dimensions.get("window").height;
 
const style=StyleSheet.create({
  upper:{
    height:h/3,
  },
  lower:{
    margin:10,
    // elevation:5,
    // borderWidth:1,

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

  },
  addBtn:{
    elevation:25,
    fontSize:32,
    backgroundColor:'green',
    width:w/9,
    height:w/9,
    // textAlignVertical:'top',
    textAlign:'center',
    // paddingVertical:10,
    color:'white',

    borderWidth:1,
    borderColor:"white",
    borderRadius:w/10,

    textShadowColor:'#f6f',
    textShadowRadius:22,

  },  
  cardView:{
    alignSelf:'center',
    width:h-w,
    // marginTop:15,
    // height:h/5,
    backgroundColor:'#ca5',
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
  back:{
    backgroundColor:'dodgerblue',
    // height:h,
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

function App(){
  const [note,setNote]=useState("");
  const [notes,setNotes]=useState([]);
  const handleNew=()=>{
        if(note.length!=0){
          var notescopy=notes;
          notescopy.push(note);
          setNotes(notescopy);
          setNote("");
        }
  }
  const delMe=()=>{
    // var notescopy=notes;
    var notesLeft=[];
    notes.map((v,key)=>{
     if(key!=2)
        notesLeft.push(v);
    });
    setNotes(notesLeft);
  }
  return(
  <ScrollView style={style.back}>
    
    <View style={style.upper}>
      <Text style={style.title}>Take your notes</Text>
          <Text style={style.hr}></Text>
      <View style={style.newAdd}>
        <TextInput value={note} style={style.input} onChangeText={setNote}  placeholder='Enter the task' />
        <TouchableOpacity onPress={handleNew}>
        <Text style={style.addBtn}>+</Text>
        </TouchableOpacity>
      </View>

          <Text style={style.hr}></Text>
      { (notes.length>0) && <Text style={style.totalTask}>Total Task:  {notes.length} </Text> }
      { (notes.length>0) && <Button title='Clear All'  onPress={()=>{setNotes([])}}/> }
      
    </View>
    <View style={style.lower}>
      {
       (notes.length==0)?
        (<Text style={{fontSize:24,marginVertical:h/5 ,color:'#ccc',textAlign:'center'}}>No Task added...</Text>)
        :
        (    notes.map((val,k)=>(
                  <View style={style.aloneListView}>
                    <Text key={k} style={style.cardViewList}>
                    {val}
                  </Text> 
                    <TouchableOpacity onPress= {()=>{
                              var notesLeft=[];
                              notes.map((v,key)=>{
                              if(key!=k)
                                  notesLeft.push(v);
                              });
                              setNotes(notesLeft);
                        }}>
                    
                          <Text style={[style.delBtn,{backgroundColor:'red'}]}>X</Text>

                      </TouchableOpacity>
                    </View>
              )) 
          )

        }
    </View>
        
    </ScrollView>
  );

}
export default App;
