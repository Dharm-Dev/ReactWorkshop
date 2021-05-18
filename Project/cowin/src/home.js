import React from 'react';
import {View,Text,ScrollView, Button, TouchableOpacity, Dimensions} from 'react-native';
// import { TextButton } from 'react-native-material-buttons';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            result:[{}],
            total:0,
        }
        this.handleData();
    }
    // pin=110094;
    // date='19-05-2021';

    handleData=async =>{          
        api=`https://cdn-api.co-vin.in/api/v2/admin/location/states`;
        //  apiByPin=`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${this.pin}&date=${this.date}`;
          fetch(api,
            {
                headers:{
                // 'Accept-language':'',
                'user-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'
                },
                method:'GET',
            }
           ).then(res=>{ return res.json();}).then(
               response=>{
                  console.log(response['states']);
                  this.setState({result:response['states']});
                  this.setState({total:response['states'].length});
                //   setf('true');
                }
              ).catch(
              error=>{console.log(error)}
            );
    }

    render(){
        return(        
            <View>
                                    {/* upper */}
             <View style={{backgroundColor:'blue',height:Dimensions.get('window').height/7,padding:10,}}>
                <Text style={{textDecorationLine:'underline',textAlign:'center',color:'white',fontSize:20,}}>
                    Project Cowin Appointment
                </Text>
                <Text style={{color:'#afc',fontSize:12,textAlign:'center'}}>
                    Select State/UT from the given list to proceed</Text>  
            </View>

               {(this.state.result.length>1)?
                    ( <View style={{paddingBottom:10,backgroundColor:'yellow' ,height:Dimensions.get('window').height-2*Dimensions.get('window').height/8}}>
{/* lower */}       
                <Text>Total : {this.state.total}</Text>
                        <ScrollView style={{ padding:10,height:Dimensions.get('window').height/9,}} keyboardShouldPersistTaps='handled'>
                        {
                           this.state.result.map((val,key)=>{
                               return(
                                <View key={key} style={{margin:10,elevation:4,backgroundColor:'#f80009',padding:10,width:8*Dimensions.get('window').width/10,alignSelf:'center',}}>
                                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('inter',{
                                        statename: val.state_name,
                                        stateid: val.state_id,
                                        })}}>

                                        <Text style={{textAlign:'center',color:'yellow'}}> {val.state_name}</Text>
                                         {/* {val.state_id} */}
                                    </TouchableOpacity>
                                 </View>
                               )
                          })}
                        </ScrollView>

                    </View>)
                    :
                    (<Text>No Data Received from Server</Text>)}
        {/* Footer */}
            <View style={{paddingTop:10,backgroundColor:'dodgerblue', height:Dimensions.get('window').height/14}}>
                <Text style={{textAlign:'center'}}>
                    Created By 
                    <Text style={{color:'navy',}}> Dharm Vashisth</Text>
                </Text>
            </View>
        </View>
        )
        
    }
}
export default App;