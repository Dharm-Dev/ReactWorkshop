import React from 'react';
import styles from './styles';
import {View,Text, TouchableOpacity, 
    TextInput,Alert,ImageBackground} from 'react-native';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            error:'',
           
        }
    }

    handleLogin=()=>{
        // console.log(this.state);
        this.setState({
            error:'',
        });
        // validation of email and password.
        const expression=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(this.state.password.length>0 || this.state.email.length>0){
            if(!expression.test(this.state.email)){
                this.setState({ error:'Invalid Email' })
                console.log("Email Error");
            }
            else if(this.state.password.length<8){
                this.setState({ error:'Password must be of 8 characters.' })
                console.log("Password is Too Short.");
            }
            else{
            // console.log(this.state);
            this.props.navigation.navigate('Main',{
                name:'Dharm Vashisth',
            });
            }
        }
        else if(this.state.password.length<=0 && this.state.email.length<=0){
            this.setState({ error:'All Fields are mandatory.' })
            console.log("All Fields are mandatory.");
        }
        else{
            this.setState({ error:'One of the Field is Empty' })
            console.log("One of the Field is Empty");
        }
    
    }
    handleEmail=(email)=>{  
        // console.log(email);
        this.setState({
            error:'',
            email:email,
        });
    }
    handlePassword=(pass)=>{
        this.setState({
            password:pass,
            error:'',
        });
        // console.log(pass);
    }
    handleTerms=()=>{
        this.props.navigation.navigate('Terms');
    }
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

    render(){
        return(

            <ImageBackground style={styles.imgBack} source={{uri:'https://th.bing.com/th/id/Rabaf36598676ff429de9b6346be99472?rik=Gpn8veCA%2blGOGQ&riu=http%3a%2f%2ffc08.deviantart.net%2ffs70%2ff%2f2011%2f357%2f1%2f8%2fcia_lockscreen_by_madporra-d4jyx60.jpg&ehk=OIYW2Rxqg%2fDUdDm94%2fztsyImYYKuARGdyprKNgZJ6UI%3d&risl=&pid=ImgRaw'}}>
            <View> 
                    <Text style={styles.title}>Central Intelligence Agency Portal</Text>
                   <View style={styles.logView}>
                       <TextInput 
                       onChangeText={this.handleEmail} 
                       placeholder='Email Id'  keyboardType={'email-address'} style={styles.textInput}
                       />

                       <TextInput 
                       onChangeText={this.handlePassword}
                       placeholder='Password' secureTextEntry={true}  style={styles.textInput}
                       />
                       {/* Error Message */}
                {
                    (this.state.error.length>0) && <Text style= {styles.error} >{this.state.error}</Text> 
                }
                
                        <TouchableOpacity onPress={this.handleLogin} >
                            <Text style={styles.Login} >Log In</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.handleForget} style={{alignItems:'center',marginTop:15,}} >
                            <Text style={styles.forget}>Forget Password </Text>
                        </TouchableOpacity>    
                        <TouchableOpacity onPress={this.handleSignup} style={{alignItems:'center',marginTop:15,}} >
                            <Text style={styles.newUser}>New User</Text>
                        </TouchableOpacity>   


                   </View>
                    {/* Terms and Condition */}
                    <View>
                        <TouchableOpacity onPress={this.handleTerms} style={{alignItems:'center',marginTop:15,}} >
                                <Text style={[styles.newUser,styles.termTitle]}>Terms and Policies</Text>
                        </TouchableOpacity> 
                    </View>

            </View>
            </ImageBackground>
            );
    }
}
export default Login;



/*  
    https://th.bing.com/th/id/OIP.lEySP-pD6x08L0p_QgUg5wHaEK?w=275&h=180&c=7&o=5&dpr=1.5&pid=1.7
    https://th.bing.com/th/id/OIP.h8WEjPCrLCfGRPAEqLDR7AHaEK?w=303&h=180&c=7&o=5&dpr=1.5&pid=1.7
    https://th.bing.com/th/id/OIP.AuocXzhGeCoXrtzVQBn66AHaFj?w=198&h=180&c=7&o=5&dpr=1.5&pid=1.7
    https://th.bing.com/th/id/OIP.JRkeWnqyZcCFjbkxadbdUAHaE0?w=253&h=180&c=7&o=5&dpr=1.5&pid=1.7
    https://th.bing.com/th/id/OIP.c9HTNRU8yXIeDrVbAtf3igHaEo?w=263&h=180&c=7&o=5&dpr=1.5&pid=1.7
    https://th.bing.com/th/id/OIP.8YCYYgs4s_6bRv2josWTCQHaEK?w=330&h=186&c=7&o=5&dpr=1.5&pid=1.7
    https://th.bing.com/th/id/OIP.2hYtP_9AxkMhcA6F7QBGJQHaEK?w=322&h=181&c=7&o=5&dpr=1.5&pid=1.7
    https://i.pinimg.com/originals/c5/76/6b/c5766b354070cdc957bd853a54030074.png 

*/