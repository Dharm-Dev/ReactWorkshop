/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground,

} from 'react-native';

function App(){
  var colorMe="red";
  const btnClick=()=>{
    colorMe="blue";
    Alert.alert(
      "Angry on Touch",
      "Do you want to touch me?",
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes", 
          onPress: () => console.log("OK Pressed") }
      ]
    );
  }
  const tpress=()=>{
    
    alert('I am Touched.');
  }
  const style=StyleSheet.create({
    imgStyle:{ 
      height:200,width:400,borderRadius:20,
    },
    fieldStyle:{
      height:50,width:300,borderColor:'black',borderWidth:2,alignSelf:'center',margin:2,
    }
  });

  return(
    <ScrollView>

      <View>
        <ImageBackground style={{height: 600}} source={{uri:'https://b.zmtcdn.com/data/pictures/7/19149647/d113768a1d14c9efeb285bac82c233ae.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*'}}>
        <Text style={{ fontSize:24,backgroundColor:'#eaac00' , textAlign:'center'}}>
          Shri Maa Anjani Restaurant & Bhojanalaya
        </Text>
        <Button title='Menu'/>
         
          
          </ImageBackground>  
        {/* Menu */}

        <Image style={{height:600,}} source={{uri:'https://b.zmtcdn.com/data/pictures/7/19149647/d113768a1d14c9efeb285bac82c233ae.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*'}} />
        
        <Text style={{ height:50,fontSize:24,backgroundColor:'orange' , textAlign:'center'}}>
          Food Menu
        </Text>
        <Image style={{height:500,marginBottom:10,padding:10}}  source={{ uri:'https://b.zmtcdn.com/data/menus/647/19149647/7eaea94a0b4d93aec5098d9520b4d90f.jpg?output-format=webp'}} />           
        <Image style={{height:500,padding:10}}  source={{ uri:'https://b.zmtcdn.com/data/menus/647/19149647/a9fb5aaba3d2ee7a8105637cbd7e3752.jpg?output-format=webp'}} />           
        
        {/*  */}
        
      </View>
      <TextInput placeholder='Enter your Name' style={style.fieldStyle} />
      <Button title='Click' onPress={btnClick}/>
      <ActivityIndicator size="large" color={colorMe} />
    
      <Image style={style.imgStyle}  source={{ uri:'https://th.bing.com/th/id/OIP.ApeNqkVh6UAtJM8zPhf8iwHaDJ?w=343&h=148&c=7&o=5&dpr=1.5&pid=1.7'}} />
      
      <Image style={style.imgStyle}  source={{ uri:'https://th.bing.com/th/id/OIP.DF2vEkN9dXGDh8zZxME6CwHaE8?w=262&h=180&c=7&o=5&dpr=1.5&pid=1.7'}} />
      <TouchableOpacity  onPress={tpress}>
      <Text>Touch Me</Text>
      </TouchableOpacity>
      
    
    </ScrollView>

  );
}

export default App;