import React from 'react';
import styles from './styles';
import {ScrollView,Text,TouchableOpacity,TextInput, ImageBackground} from 'react-native';
class Terms extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <ScrollView>
<ImageBackground style={[styles.imgBackTerm]} source={{uri:'https://th.bing.com/th/id/Rabaf36598676ff429de9b6346be99472?rik=Gpn8veCA%2blGOGQ&riu=http%3a%2f%2ffc08.deviantart.net%2ffs70%2ff%2f2011%2f357%2f1%2f8%2fcia_lockscreen_by_madporra-d4jyx60.jpg&ehk=OIYW2Rxqg%2fDUdDm94%2fztsyImYYKuARGdyprKNgZJ6UI%3d&risl=&pid=ImgRaw'}}>
            
            <Text style={[styles.title,{fontSize:24, fontWeight:'bold'}]}>
                App Terms and Conditions
            </Text>
            <Text style={styles.textTerms}>
            
            Terms and Conditions are great for limiting and restricting unwanted and undesirable behavior or activity on your mobile app no matter how simple or complex your app is.

Is a Terms and Conditions Agreement Required by Laws or App Stores?
Unlike a Privacy Policy, a Terms and Conditions is not mandatory under any laws or required by any app stores. However, because of the benefits discussed above, you can see why you'd want one anyway.

Also, while app stores don't explicitly require you to have a Terms and Conditions agreement with your app, there are some direct ways that having one can help you meet other app store requirements.

Logo of Google Play Store

For example, the Google Play Developer Distribution Agreement requires that you grant your users a "nonexclusive, worldwide, and perpetual license to perform, display, and use the Product on the Device."

You could cover this in the End-User License Agreement (EULA) or cover it in your Terms and Conditions agreement along with other clauses that are useful for your Android app.

Available on iOS App Store

Apps in the Apple App Store can benefit from Apple's standard EULA that binds users when they download your app. Like the Google Play Store, you can choose to add your own agreement instead of Apple's default one.

Generally, the Terms and Conditions agreement is broader than the EULA agreement and it's particularly relevant for web-based mobile apps.

For native apps, you may use a Terms and Conditions and the EULA because you'll be licensing your users a copy of your software to download and use on their device.

As a reminder, your Terms and Conditions should generally cover the following. These will be the same whether your app is web-based or native.

Definition of key words
User rights and responsibilities
Proper or expected usage of the app
Intellectual property protection
Accountability for actions, behavior, and conduct
Payment details for purchases made through your store
Disclaimers and warranties
Procedure for account termination
Exclusion or Limitation of Liability
Notification of modification of terms
The primary difference with regard to your mobile versus web-based Terms and Conditions will not actually be in the content. Instead, it will be in how it is displayed.

The way that you display your Terms and Conditions agreement for a native mobile app when compared to a web-based app, is quite different. Both apps have the same goal, but the apps will use completely different methods of accomplishing that goal.

And what is the goal? The goal is to have your user legally bound by your Terms and Conditions agreement. The best way of ensuring that your Terms and Conditions is legally binding is to use the clickwrap method.

Clauses for Terms & Conditions for Apps
Here are a few useful clauses to have in your mobile app's Terms and Conditions agreement.

Intellectual Property Clause
You can include a clause that protects your intellectual property from customers who may try to take your content and use it as their own or for their own purposes. In this kind of clause, you can set out at the beginning that your content is protected under IP laws, and what a customer cannot do with your protected content.

Apple Logo Icon

Apple has a lot of IP to protect, so its IP clause is very broad. It covers content, graphics, audio, video, scripts, software, logos, trademarks and more that's owned by Apple and its licensors:

Apple Media Services Terms and Conditions: Intellectual Property clause

Apps that allow user generated content, such as photo apps like Flickr, can benefit from a Terms and Conditions agreement by retaining the right to terminate a user's account if that user abuses the app by:

Spamming other users
Generating obscene content
And other activities that tend to be violative
Let's have a look at some example of clauses used in the Terms and Conditions of mobile apps that host user-generated content.

Ownership and Use of Content Clauses
Users will want to know what's going to happen with the ownership and rights to their content if they upload it to your app. Will they lose any rights? Will your app maintain any joint rights?

Typically, apps with user-generated content tend to allow customers to retain ownership to their content, but take a very broad license to use the material if they so wish.
A Terms & Conditions document for a website is an agreement the website makes with its users about how to use the site properly, as well as the obligations and responsibilities of each party. Websites, especially commercial websites, have a portion of the site devoted to Terms & Conditions because it's the most important document for letting site users know what is expected of them. For owner/operators running any kind of business or personal website that allows user interaction, it's a good idea to have a clearly laid out document with all the Terms & Conditions required.

One of the primary functions of a Terms & Conditions document is to outline what will happen in a variety of different possible situations, including if the user breaks the rules and must have his/her account terminated. If the user goes in knowing what to expect, it is less likely that there will be problems between the user and the website down the road.

The Terms & Conditions document on any website creates a legally binding set of rules for the user, as well as, in most cases, the website owner. It's a place to set up expectations for each of the parties and ensure that the use of the website runs smoothly for both.

How to use this document

These Terms & Conditions outline the basic responsibilities for a user to a website, including what the user can and can't do, what happens in case of a dispute, and how the user's account may be terminated if need be. This document should be used for an owner/operator just setting up a new business or personal website, or when an owner/operator wishes to update the rules on their current website.

Within this document, the operator can choose several different models for what the website does, such as whether it sells products or services, gives professional advice or lets other users post content like pictures, video, or status updates. It also addresses what happens if the user does anything to harm the website, like violates the intellectual property rights of the owner/operator.

Importantly, in these Terms & Conditions, the owner/operator can choose what state the business is primarily located in, which will apply the law of that state to this document.

After filling out this document, it should be posted to its own separate page on a website. Ideally, that page will be linked to from the homepage under the phrase "Terms & Conditions."

 
            </Text>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Login');}} style={{alignItems:'center',marginTop:15,}} >
                                <Text style={[styles.Button]}>Back</Text>
                        </TouchableOpacity>
            </ImageBackground>                    
            </ScrollView>);
    }
}
export default Terms;