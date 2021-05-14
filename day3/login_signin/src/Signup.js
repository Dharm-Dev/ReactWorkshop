import React from 'react';
import styles from './styles';
import {View,Text,TouchableOpacity,TextInput, ImageBackground} from 'react-native';
class Signup extends React.Component{
    constructor(props){
        super(props);
    }
    handleSignup=()=>{
        this.props.navigation.navigate('Login');
    };
    render(props){
        return(
            <View>
<ImageBackground style={styles.imgBack} source={{uri:'https://th.bing.com/th/id/Rabaf36598676ff429de9b6346be99472?rik=Gpn8veCA%2blGOGQ&riu=http%3a%2f%2ffc08.deviantart.net%2ffs70%2ff%2f2011%2f357%2f1%2f8%2fcia_lockscreen_by_madporra-d4jyx60.jpg&ehk=OIYW2Rxqg%2fDUdDm94%2fztsyImYYKuARGdyprKNgZJ6UI%3d&risl=&pid=ImgRaw'}}>
            <View> 
                    <Text style={styles.title}>Central Intelligence Agency Portal</Text>
                 
                   <View>
                       <TextInput 
                       placeholder='Name' keyboardType={'name-phone-pad'} style={styles.textInput}
                       />
                       <TextInput 
                       placeholder='Email Id'  keyboardType={'email-address'} style={styles.textInput}
                       />
                       <TextInput 
                       placeholder='Password' secureTextEntry={true}  style={styles.textInput}
                       />
                       <TextInput 
                       placeholder='Confirm Password' keyboardType={'visible-password'} style={styles.textInput}
                       />
                   </View>
                    
      

                    <TouchableOpacity onPress={this.handleSignup} >
                        <Text style={styles.Login}>Sign Up</Text>
                    </TouchableOpacity>
            </View>
            </ImageBackground>                    
            </View>);
    }
}
export default Signup;