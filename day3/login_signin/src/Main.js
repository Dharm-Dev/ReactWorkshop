import React from 'react';
import styles from './styles';
import {View,Text,TouchableOpacity,TextInput, ImageBackground,Image} from 'react-native';
class Main extends React.Component{
    constructor(props){
        super(props);
    }
    handleMe=()=>{
        alert('Logged out Successfully.');
        this.props.navigation.navigate('Login');
    };
    render(props){
        return(
            <View>
<ImageBackground style={styles.imgBack} source={{uri:'https://th.bing.com/th/id/Rabaf36598676ff429de9b6346be99472?rik=Gpn8veCA%2blGOGQ&riu=http%3a%2f%2ffc08.deviantart.net%2ffs70%2ff%2f2011%2f357%2f1%2f8%2fcia_lockscreen_by_madporra-d4jyx60.jpg&ehk=OIYW2Rxqg%2fDUdDm94%2fztsyImYYKuARGdyprKNgZJ6UI%3d&risl=&pid=ImgRaw'}}>
            <View> 
                    <Text style={styles.title}>Central Intelligence Agency Portal</Text>
                 
                   <View>
                       <ImageBackground  style={styles.secretCode} source={{uri:'https://th.bing.com/th/id/OIP.m0azCdQ2q7WpyDKWjYJJiQHaEK?w=297&h=182&c=7&o=5&dpr=1.5&pid=1.7'}}>
                            <Text style={styles.secretCodeText}>You are Our Secret Agent. Your Code is </Text>
                        </ImageBackground>
                   </View>
                    
      

                    <TouchableOpacity onPress={this.handleMe} >
                        <Text style={styles.Login}>Log out</Text>
                    </TouchableOpacity>
                    
            </View>
            </ImageBackground>                    
            </View>);
    }
}
export default Main;