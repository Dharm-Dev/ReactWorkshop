import React from 'react';
import styles from './styles';
import {View,Text, TouchableOpacity, 
    TextInput,Alert,
    
    Button,
    ImageBackground} from 'react-native';
class Login extends React.Component{
    constructor(props){
        super(props);
    }
    
    handleLogin=()=>{
        alert('Login Successfully.');
        this.props.navigation.navigate('Main');

    };
    handleForget=()=>{
        Alert.alert(
            "Request",
            "'Redirecting to Forget Password Portal.'",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "Yes", onPress: () =>  this.props.navigation.navigate('Forget') }
            ]
          );
        
       
    };
    handleSignup=()=>{
        Alert.alert(
            "Request",
            "Redirecting to New User Portal.",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "Yes", onPress: () =>  this.props.navigation.navigate('Signup') }
            ]
          );

    };
    render(props){
        return(
            // https://th.bing.com/th/id/OIP.lEySP-pD6x08L0p_QgUg5wHaEK?w=275&h=180&c=7&o=5&dpr=1.5&pid=1.7
            // https://th.bing.com/th/id/OIP.h8WEjPCrLCfGRPAEqLDR7AHaEK?w=303&h=180&c=7&o=5&dpr=1.5&pid=1.7
            // https://th.bing.com/th/id/OIP.AuocXzhGeCoXrtzVQBn66AHaFj?w=198&h=180&c=7&o=5&dpr=1.5&pid=1.7
            // https://th.bing.com/th/id/OIP.JRkeWnqyZcCFjbkxadbdUAHaE0?w=253&h=180&c=7&o=5&dpr=1.5&pid=1.7
            // https://th.bing.com/th/id/OIP.c9HTNRU8yXIeDrVbAtf3igHaEo?w=263&h=180&c=7&o=5&dpr=1.5&pid=1.7
            // https://th.bing.com/th/id/OIP.8YCYYgs4s_6bRv2josWTCQHaEK?w=330&h=186&c=7&o=5&dpr=1.5&pid=1.7
            // https://th.bing.com/th/id/OIP.2hYtP_9AxkMhcA6F7QBGJQHaEK?w=322&h=181&c=7&o=5&dpr=1.5&pid=1.7
            // https://i.pinimg.com/originals/c5/76/6b/c5766b354070cdc957bd853a54030074.png
            <ImageBackground style={styles.imgBack} source={{uri:'https://th.bing.com/th/id/Rabaf36598676ff429de9b6346be99472?rik=Gpn8veCA%2blGOGQ&riu=http%3a%2f%2ffc08.deviantart.net%2ffs70%2ff%2f2011%2f357%2f1%2f8%2fcia_lockscreen_by_madporra-d4jyx60.jpg&ehk=OIYW2Rxqg%2fDUdDm94%2fztsyImYYKuARGdyprKNgZJ6UI%3d&risl=&pid=ImgRaw'}}>
            <View> 
                    <Text style={styles.title}>Central Intelligence Agency Portal</Text>
                   <View style={styles.logView}>
                       <TextInput 
                       placeholder='Email Id'  keyboardType={'email-address'} style={styles.textInput}
                       />
                       <TextInput 
                       placeholder='Password' secureTextEntry={true}  style={styles.textInput}
                       />

                        <TouchableOpacity onPress={this.handleLogin} >
                            <Text style={styles.Login}>Log In</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.handleForget} style={{alignItems:'center',marginTop:15,}} >
                            <Text style={styles.forget}>Forget Password </Text>
                        </TouchableOpacity>    
                        <TouchableOpacity onPress={this.handleSignup} style={{alignItems:'center',marginTop:15,}} >
                            <Text style={styles.newUser}>New User</Text>
                        </TouchableOpacity>   
                   </View>
            </View>
            </ImageBackground>
            );
    }
}
export default Login;