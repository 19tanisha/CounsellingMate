import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Home = (props) => {
    return (
        <View style={{flex:1, backgroundColor:'blue',alignItems:'center',justifyContent:'center'}}>
        <TouchableOpacity onPress={()=> props.navigation.navigate('AuthNavigator')}>
            
            <Text style={{color:'red'}}>Home</Text>
        </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
