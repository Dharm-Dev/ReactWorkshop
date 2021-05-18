import React from 'react';
import {View,Text,TouchableOpacity ,Button,ScrollView, Dimensions, TextInput} from 'react-native';
import DatePicker from 'react-native-datepicker';
// import DatePicker from '@react-native-community/datetimepicker'


class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            res:[{}],
            total:0,
        };
        this.state={
            Id: 141,
            districtName:"Central Delhi",
            f:false,
            btnStatus:false,
            date:new Date().getDate(),
        };
        
        if(this.props.route.params){
            this.state={
                f:true,
                Id: this.props.route.params.id,
                districtName:this.props.route.params.name,
                btnStatus:false,
                date:new Date().getDate(),
                total:0,
            };
        }
        // this.handleApi();
    }

    
    handleApi=async ()=>{  
        api=`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${this.state.Id}&date=${this.state.date}`;
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
                  console.log(response['sessions']);
                  this.setState({res:response['sessions']});
                  this.setState({total:response['sessions'].length});
                  this.setState({f:true});
                  this.setState({btnStatus:true});
                  
                  
                }
              ).catch(
              error=>{console.log(error)}
            );
    }
    h=Dimensions.get('window').height;
    w=Dimensions.get('window').width;
    render(){
        return(  
            // Body container
            <View style={{padding:5,paddingBottom:10,height:this.h,backgroundColor:'black'}}>
                    {/* upper view */}

                    <View style={{ height:this.h/4,borderWidth:1,elevation:10,backgroundColor:'#a0ef60', }}>
                        <Text style={{color:'green',textAlign:'center',textDecorationLine:'underline',fontSize:20}}>
                            Appointment Details 
                        </Text>
                        <Text>
                            District: 
                            <Text style={{fontSize:18}}> 
                                {this.state.districtName}
                            </Text>
                        </Text>
                    
                        <View>
                            {/* Search button */}
                            <DatePicker
                                style={{width: 200,alignSelf:'center'}}
                                date={this.state.date}
                                mode="date"
                                // value="date"
                                placeholder="Select date"
                                format="DD-MM-YYYY"
                                minDate="01-05-2021"
                                maxDate="30-05-2022"
                                confirmBtnText="Ok"
                                cancelBtnText="Cancel"
                                onDateChange={(d)=>{this.setState({ date:d,})}}
                            />


                            {/* <TextInput  placeholder='Date'  style={{fontSize:11,padding:0,textAlign:'center',borderWidth:1,margin:2,}}/> */}
                            <TouchableOpacity style={{width:60,alignSelf:'center'}} onPress={this.handleApi}>
                                    <Text style={{fontSize:12,borderColor:'red', borderWidth:2,padding:3, marginTop:5, elevation:5,textAlign:'center'}}>Search</Text>
                                </TouchableOpacity>
                        </View>

                    </View>
{/* Upper View end */}
{/* Lower view starts */}
                    <View style={{ height:this.h-this.h/4,padding:10,backgroundColor:'#9f7',}}>

                        {
                            // checking wether parameters received or not
                           (this.props.route.params)?
                            (   <View>
                                <Text style={{backgroundColor:'crimson',margin:1,marginBottom:0,textAlign:'center',textShadowColor:'red',textShadowRadius:121,}}>Total : {this.state.total}</Text>
                                {/* check wether response is empty or not */}
                                   { (this.state.f && this.state.total>0)?
                                        (
                                            
                                          <ScrollView style={{backgroundColor:'red', margin:2,marginTop:0,marginBottom:0,padding:2,height:this.h-this.h/4-120}}>
                                            <Text>Date: {this.state.res[0].date}</Text>   
                                                <View>
                                                {

                                                    this.state.res.map((v,key)=>{
                                                        return(
                                                            
                                                            <View key={key} style={{backgroundColor:'white',elevation:4, margin:5,padding:10,alignSelf:'center',width:this.w-50}}>

                                                                {/* <TouchableOpacity key={key} style={{ margin:10}} onPress={()=>{alert('Done')}}>                             */}
                                                                                                                                       
                                                                    <Text>
                                                                        
                                                                        Fee Type:<Text style={{backgroundColor:'yellow'}}> {v.fee_type} </Text>{'\n'} {'\n'}
                                                                        
                                                                        {(v.fee==0)?(<Text></Text>):(<Text>Fee: <Text style={{color:'red'}}>{v.fee}</Text>{'\n'}{'\n'}</Text> ) }
                                                                        
                                                                        
                                                                                                                                                
                                                                        Vaccine Type:  <Text style={{backgroundColor:'yellow',}}> {v.vaccine} </Text> {'\n'} {'\n'}
                                                                        
                                                                        Minimum Age Limit: <Text style={{backgroundColor:'#8f4'}}>{v.min_age_limit} </Text>{'\n'} {'\n'}
                                                                        
                                                                        Available Capacity Dose1: {v.available_capacity_dose1}
                                                                        {'\n'} {'\n'}
                                                                        
                                                                        Available Capacity Dose2: {v.available_capacity_dose2}
                                                                        {'\n'} {'\n'}
                                                                        
                                                                        Address:
                                                                        <Text style={{backgroundColor:'yellow'}}> {v.name} </Text> {'\n'} {'\n'} 
                                                                        
                                                                        PinCode: 
                                                                        <Text style={{textDecorationLine:'underline'}}> {v.pincode} </Text> {'\n'} {'\n'}
                                                                        

                                                                        Slots :
                                                                        {'\n'}
                                                                        {(v.slots.length==0)?(<Text style={{backgroundColor:'red'}}> Not Available </Text>):
                                                                        
                                                                        (
                                                                            v.slots.map(
                                                                                (val,k)=>{
                                                                                    return(<Text key={k} style={{backgroundColor:'yellow'}}>{val} </Text>);
                                                                                })                                                                    
                                                                        
                                                                        )
                                                                        }
                                                                        
                                                             
                                                                    </Text>
                                                                    {/* <Text>Hello</Text> */}
                                                                {/* </TouchableOpacity> */}
                                                            </View>
                                                        )
                                                })}
                                                </View>

                                            </ScrollView>
                                        )
                                        :
                                        (
                                            (!this.state.btnStatus)?(<Text style={{backgroundColor:'white', margin:10,padding:10,}}>Search the data using Sepcific date and wait for a while after pressing submit button.
                                            {'\n'}{'\n'}Data can be available Maximum of 5 days from current date.
                                            </Text>):
                                        (<Text style={{backgroundColor:'white', margin:10,padding:10,}}>Data not Available on Server</Text>)
                                        
                                        )
                                    }
                                
                               </View>
                            )
                            :(
                                <Text style={{backgroundColor:'white', margin:10,padding:10,}}>Param Not Found </Text>
                            )
                        }
                        {/* <Button title='Go Back' /> */}
                        <Text style={{backgroundColor:'crimson',margin:0,textAlign:'center',}}>
                            <TouchableOpacity style={{backgroundColor:'white',alignSelf:'center',padding:1,borderWidth:1,}} onPress={()=>{this.props.navigation.navigate('inter') }}>
                                <Text style={{fontSize:12,color:'red'}}>Select District</Text>
                            </TouchableOpacity>{'\n'}
                            <Text style={{color:'white'}}>
                            Created by Dharm Vashisth</Text>
                        </Text>
                    
                    </View>
                </View>
                    )
    }
}
export default App;