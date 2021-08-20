import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import ArticleCarousel from '../Constants/Components/ArticleCarousel'
import CounsellorFlatlist from '../Constants/Components/CounsellorFlatlist'
import {Size, Colors, Font} from '../Constants/Styles' 

const Home = (props) => {
    return (
        <View style={styles.container}>
        <TouchableOpacity>
            <Image source={require("../assets/logo.png")} style={styles.Avatar} />
        </TouchableOpacity>

        <ArticleCarousel/>

        <Text style = {styles.counsellor}>
            Counsellors
        </Text>
         <CounsellorFlatlist/>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    Avatar: {
    padding:Size.padding,
    height: 40,
    width: 40,
    borderRadius: 120,
  },
  container:{
    flex:1,
    paddingTop:40,
    padding:Size.padding
  },
  counsellor:{
    fontWeight:'bold',
    fontSize:20,

  }
})
