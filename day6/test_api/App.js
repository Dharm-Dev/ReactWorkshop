/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  Dimensions,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DatePicker from 'react-native-datepicker';

function App(){
  var [date, setDate] = useState(new Date());
  var [result,setResult]=useState([]);
  var [pin,setPin]=useState(0); 
  var [f,setf]=useState('true');
  var [invalidp,setp]=useState('false');
  
  const reset=()=>{
    setResult([]);
    setPin(0);
    setf('true');// mandatory field
    setp('false');

  }
  const inputPin=(val)=>{
    setPin(val);
    setf('true');
    if(invalidp=='true')
      setp('false');
  }

  const handleData=async ()=>{
    // console.log(date);
    if(pin==0){
      setf('false');
      // console.log("Pin not set");
    }
    else if(pin<99999 || pin>999999){
        setp('true');
    }
    else{
      
      fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`,
      {
        headers:{
          // 'Accept-language':'',
        'user-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'
        },
        method:'GET',
       }).then(res=>{ return res.json();}).then(
         response=>{
              // console.log(response['sessions']);
              setResult(response['sessions']);
              setf('true');
        }).catch(
          error=>{console.log(error)}
          );
    }
    
    
  }
  // let data=[{v: "Hello"},{v: "World"}];//,{v:'I'},{v: 'am'},{v: 'program'}];

  return(

    <ScrollView keyboardShouldPersistTaps='handled' style={{padding:1,backgroundColor:'#fee',paddingTop:15,}}>

<Text style={{ alignSelf:'center', textShadowColor:'blue',color:'#6f9',backgroundColor:'lightgray',textShadowRadius:17,fontSize:24,margin:10,textDecorationLine:'underline'}}>
  Vaccine Center Finder
  </Text>
      <View style={{backgroundColor:'white', padding:10}}>


      <DatePicker
        style={{width: 200,alignSelf:'center'}}
        date={date}
        mode="date"
        placeholder="Select date"
        format="DD-MM-YYYY"
        minDate="01-05-2021"
        maxDate="30-05-2022"
        confirmBtnText="Ok"
        cancelBtnText="Cancel"
        onDateChange={setDate}
      />

      <TextInput 
      style={{width:200,borderWidth:1,borderRadius:15,textAlign:'center',alignSelf:'center',marginTop:10,}}
        placeholder='Area Pin Code'
        keyboardType='numeric'
        onChangeText={inputPin} 
      />


        {(f=='false')&&<Text style={{color:'red',textAlign:'center'}} >*All fields are mandatory.</Text>}
        {(invalidp=='true' && f=='true')&&<Text style={{color:'red',textAlign:'center'}} >Pin code must be of 6 length.</Text>}


      <TouchableOpacity style={{ borderColor:'red', borderWidth:2,padding:10,alignSelf:'center', marginTop:10, elevation:5,}} onPress={handleData}>
        <Text>Search</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={{ borderColor:'red', borderWidth:1,padding:5,alignSelf:'center', marginTop:10, elevation:5,}} onPress={reset}>
        <Text>Reset</Text>
      </TouchableOpacity> */}

      </View>
      {/* Down View */}
      <View style={{backgroundColor:'#fee',padding:10,paddingBottom:50}}>
      <Text style={{textAlign:'center',fontSize:24, margin:12,textDecorationLine:'underline'}}>Vaccine Centers in your Area</Text>
      {(f=='false')?
          (<Text style={{alignSelf:'center',width:4*Dimensions.get('window').width/5, margin:5,borderWidth:1,padding:10,elevation:5,backgroundColor:'#eef',textAlign:'center'}} >
              No Center Yet</Text>)
        :
        (<ScrollView keyboardShouldPersistTaps='handled'>
            <View>
              <Text>Total Centers : {result.length}</Text>
            {
            (result.length!=0)?(
              result.map((v,k)=>{
                return (<View key={k} style={{alignSelf:'center',width:4*Dimensions.get('window').width/5, margin:5,borderWidth:1,padding:10,elevation:5,backgroundColor:'#eef'}}>
                  <Text>

                   Address:{'\n'}  {v.address} {'\n'} {'\n'} 
                  
                  Vaccine Type:  {v.vaccine} {'\n'} {'\n'}
                  Minimum Age Limit: {v.min_age_limit} {'\n'} {'\n'}
                  Available Capacity Dose1: {v.available_capacity_dose1}
                  {'\n'} {'\n'}
                  Available Capacity Dose2: {v.available_capacity_dose2}
                  {'\n'} {'\n'}
                  Slots:
                  { v.slots } 
                  </Text>
                </View>)
              }))
              :
              (<View style={{alignSelf:'center',width:2*Dimensions.get('window').width/3, margin:5,borderWidth:1,padding:10,elevation:5,backgroundColor:'#eef'}}>
                  <Text>Center not Found</Text>
              </View>)
            }
              <Text style={{backgroundColor:'lightgray',textShadowColor:'red',textShadowRadius:120,textAlign:'center'}}>Created By Dharm Vashisth</Text>
            </View>
            {/* down view ends */}
         </ScrollView>)
      }
    
   </View>
   </ScrollView>
  );
}
export default App;
