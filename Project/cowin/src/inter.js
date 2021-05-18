import React from 'react';
// import {Button} from 'react-native-material-buttons';
import {View,Text,TouchableOpacity ,Button,ScrollView, Dimensions, Alert} from 'react-native';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            res:[{}],
        };
        this.state={
            id: 9,
            stateName:"Delhi",
            f:false,
            total:0,
        };
        
        if(this.props.route.params){
            this.state={
                f:true,
                id: this.props.route.params.stateid,
                stateName:this.props.route.params.statename,
            };
        }
        this.handleApi();
    }
    
    handleApi=async ()=>{  
        // alert(this.state.stateName);
        api=`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${this.state.id}`;
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
                  console.log(response['districts']);
                  this.setState({res:response['districts']});
                  this.setState({f:true});
                  this.setState({total:response['districts'].length});
                //   alert(this.state.stateName);
                }
              ).catch(
              error=>{console.log(error)}
            );
    }
    h=Dimensions.get('window').height;
    render(props){
        return(  
    <View style={{height:this.h-10,margin:1,}}>
        <View style={{backgroundColor:'green',height:this.h/7}}>
            <Text style={{textAlign:'center'}}>
                State: 
                <Text style={{fontSize:24,color:'white'}}>
                    {this.state.stateName}
                </Text>

            </Text>             
            <Text style={{textAlign:'center',Color:'white'}}>
                Select District from the list
            </Text>
        </View>
                {
                    (this.state.total>0)?
                    (   <View >                                   
                            { 
                            // this.state.total>0 || 
                            ( this.state.f)?
                                (
                                 <View style={{backgroundColor:'#9f4'}}>
                                        <ScrollView style={{backgroundColor:'blue', height:this.h-this.h/4-20,margin:15,marginBottom:0}} keyboardShouldPersistTaps='handled'>
                                           {this.state.res.map( (val,key) =>{
                                                return(
                                                    <View key={key} style={{backgroundColor:'#89ff45', margin:5,height:50}}>
                                                        <TouchableOpacity  style={{ margin:10}} onPress={
                                                            ()=>{
                                                                    this.props.navigation.navigate('final',
                                                                     {
                                                                        id: val.district_id,
                                                                        name:val.district_name,
                                                                      }
                                                                    );
                                                                }
                                                             }
                                                            >       
                                                            <Text style={{textAlign:'center'}}> {val.district_name} </Text>
                                                            
                                                        </TouchableOpacity>
                                                    </View>
                                                )
                                        })}
                                        </ScrollView>
                                        <Text style={{backgroundColor:'blue',margin:15,marginTop:0,marginBottom:5,height:10}}></Text>
                                </View>)
                                :
                                (
                                <View style={{height:Dimensions.get('window').height,alignItems:'center',paddingTop:Dimensions.get('window').height/3,backgroundColor:'red'}}>
                                    <Text style={{color:'white',fontSize:24,}}>
                                    No Data From Response
                                    </Text>
                                </View>
                                )
                            }
                        </View>
                    )
                    :(
                        <View style={{height:Dimensions.get('window').height,alignItems:'center',paddingTop:Dimensions.get('window').height/3,backgroundColor:'red'}}>
                            <Text style={{color:'white',fontSize:24,}}>Error: Param Not Found </Text>
                        </View>
                    )
                }
                <View style={{backgroundColor:'green', height:25}}>
                <TouchableOpacity style={{backgroundColor:'white',alignSelf:'center',borderWidth:1,}} onPress={()=>{this.props.navigation.navigate('home') }}>
                    <Text style={{fontSize:14,backgroundColor:'dodgerblue',textAlign:'center'}}>Select State</Text>
                </TouchableOpacity>
                </View>

        </View>
    
            )
    }
}
export default App;