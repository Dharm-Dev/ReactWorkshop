/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { Button,ScrollView, Dimensions, NativeModules, StyleSheet ,Text, TextInput, View, TouchableOpacity } from 'react-native';
import style from './src/styles';
const w=Dimensions.get("window").width;
const h=Dimensions.get("window").height;
 
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
  <ScrollView style={style.back} keyboardShouldPersistTaps='handled'>
    
    <View style={style.upper}>
      <Text style={style.title}>Take your notes</Text>
          <Text style={style.hr}></Text>
      <View style={style.newAdd}>
        <TextInput value={note}  style={style.input} onChangeText={setNote}  placeholder='Enter the task' />
        <TouchableOpacity onPress={handleNew}>
        <Text style={style.addBtn}>+</Text>
        </TouchableOpacity>

      </View>

          <Text style={style.hr}></Text>
    { (notes.length>0) && <Text style={style.totalTask}>Total Task:  {notes.length} </Text> }
    </View>
    <View style={style.lower}>


      { (notes.length>0) && <Button title='Clear All'  onPress={()=>{setNotes([])}}/> }
      
      {
       (notes.length==0)?
        (<Text style={{fontSize:24,marginVertical:h/5 ,color:'#fff',textAlign:'center'}}>No Task added...</Text>)
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
