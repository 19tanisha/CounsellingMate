import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import {Colors, Size} from '../Constants/Styles'



const Login = (props) => {
    return (
        <View style = {styles.container}>
            <View style={{paddingBottom:50}}>
            <Text style={{fontWeight:'bold',fontSize:20,color: Colors.black}}>
                Login as a guest!
            </Text>
            </View>
         <View style={styles.email}>
         <TextInput
          placeholder="Email Address: "
          placeholderTextColor= {Colors.grey}
          
        />
         </View>
         <View style={styles.password}>
         <TextInput
          placeholder="Password: "
          placeholderTextColor= {Colors.grey}
          
        />
         </View>
         <View style={{flexDirection:'row', paddingTop:20}}>
             <Text style={{fontSize:14,color: Colors.black}}>
                 Don't have an account?
             </Text>
             <TouchableOpacity onPress={()=>props.navigation.navigate('SignUp') }>
                 <Text style={{fontSize:15, fontWeight:'bold',color: Colors.black}}>
                    {''} SignUp
                 </Text>
             </TouchableOpacity>
         </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({

    container:{
        flex:1,
       justifyContent:'center',
       paddingBottom:100,
        alignItems:'center'
    },
    email: {
        flexDirection: "row",
        width: Size.width - 100,
        height: 50,
        backgroundColor: Colors.darkblue,
        borderRadius: 10,
        paddingLeft: 15,
        alignItems: "center",
        elevation: 5,
      },
      password: {
        flexDirection: "row",
        width: Size.width - 100,
        height: 50,
        backgroundColor: Colors.darkblue,
        borderRadius: 10,
        paddingLeft: 15,
        alignItems: "center",
        marginTop: Size.padding+10,
        elevation: 5,
      },
})
