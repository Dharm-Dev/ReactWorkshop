/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Linking,
  Button,
} from 'react-native';
class App extends React.Component{
  
  constructor(props) {
      super(props);
  }
  
  render(){
      return(
        <ScrollView>
        {/* upper */}
          <View >
            <LinearGradient style={this.style.upper} start={{x:0,y:0}} end={{x:1,y:2}} colors={['#e34','#00f']}>
              <Text style={{color:'white',fontStyle:'italic',textAlign:'center'}}>
                React Native Workshop Day 2
              </Text>
              <Image style={this.style.image}  source={{uri:'https://media-exp1.licdn.com/dms/image/C5603AQGrBwgJ_PXj9A/profile-displayphoto-shrink_400_400/0/1589129745784?e=1626307200&v=beta&t=e0iYoV2vuc87v5KMmDqEBA6pQuF0gVJFP-ne0HKLlds'}}/>
              {/* <Image style={this.style.image} source={{uri:'https://th.bing.com/th/id/OIP.pkdHA63_Cg1lgAUQF6h4LQHaEK?w=324&h=182&c=7&o=5&dpr=1.5&pid=1.7',}} /> */}
              
            </LinearGradient>
          
          </View>
           {/* lower  */}
          <View style={this.style.lower}>
              <View >
                <Text style={this.style.name}>Dharm Vashisth</Text>
                <Text style={this.style.title}> Software Developer</Text>

                <View style={this.style.body}>             
                  <Text style={{padding:5, textAlign:'right'}}>  Data Structure and Algorithm | HackerRank |{'\n'}  Software Development | React-Native|{'\n'} many more..</Text>
                  <Text style={{padding:2}}>As an tech enthusiast, I have always believed in staying relevant and updated by working upon new skills that emerge in the industry. With a positive outlook and a record of persistence, I shall be an asset to any technological corporation that requires reliable and professional workforce. </Text>
                </View>

            </View>

            <View>
              <TouchableOpacity onPress={this.touchHandler}>
                <Text style={this.style.touchButton}>GitHub Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.clickHacker}>
                <Text style={this.style.touchButton}>HackerRank Profile</Text>
              </TouchableOpacity>
              <Text style={this.style.author}>Created By Dharm Vashisth</Text>

            </View>
          </View>
        </ScrollView>

      );
  }
touchHandler=function(){
  if(Linking.canOpenURL("https://github.com/Dharm-Dev/")){
    Linking.openURL("https://github.com/Dharm-Dev/");
  }
  else{
    alert("Unable to open Link as support application not found!!");
  }

}
clickHacker=function(){
  if(Linking.canOpenURL("https://www.hackerrank.com/dvashisth55")){
    Linking.openURL("https://www.hackerrank.com/dvashisth55");
  }
  else{
    alert("Unable to open youtube!!");
  }

}
  style=StyleSheet.create({
    upper:{  
      height:Dimensions.get('window').height/4,
      borderWidth:5,
      
    },
    lower:{
     padding:12,
      // height:3*(Dimensions.get('window').height/4),
    },
    name:{
        fontSize:24,
        fontStyle:'normal',
        fontFamily:'Calibri',
        marginTop:Dimensions.get('window').height/8,
        textAlign:'center'
    },
    title:{
      color:'blue',
      textAlign:'center',
      fontWeight:'bold',
    },
    body:{
        marginTop:12,
        textAlign:'justify',
        padding:12,
        justifyContent:'space-evenly'
    },
    image:{
      alignSelf:'center',
      marginTop:Dimensions.get('window').height/9,
      height:150,
      width:150,
    
      borderRadius:7,
      borderWidth:2,

      borderColor:'black',
    },
    touchButton:{
      marginTop:12,
      alignSelf:'center',
      textAlign:'center',
      textAlignVertical:'center',

      padding:5,
      fontSize:16,
      borderRadius:5,
      borderWidth:5,

      borderColor:'navy',
      backgroundColor:'blue',
      color:'white',
  },
    author:{
      color:'white',
      marginTop:Dimensions.get('window').width/9,
      textAlign:'center',

      backgroundColor:'#f00',
      opacity:0.7,

      fontSize:Dimensions.get('window').width/20,
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').width/12,
    }
  });
}
export default App;
