import React,{useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View,FlatList,Image, ImageBackground } from 'react-native'
import { Surface } from 'react-native-paper'
import { Colors } from '../Styles'


const CounsellorFlatlist = () => {

    const [data, setData] = useState([
        {
      name: "Dr.ABC",
      img: {
        uri: "https://upload.wikimedia.org/wikipedia/en/0/00/One_Direction_-_History_%28Official_Single_Cover%29.png",
      },
      id: "1",
      doctor: "One Direction",
      years:'20 Years'
    },
     {
      name: "Dr.ABCgf",
      img: {
        uri: "https://upload.wikimedia.org/wikipedia/en/0/00/One_Direction_-_History_%28Official_Single_Cover%29.png",
      },
      id: "2",
      doctor: "One Direction",
      years:'20 Years'
    },
     {
      name: "Dr.ABC",
      img: {
        uri: "https://upload.wikimedia.org/wikipedia/en/0/00/One_Direction_-_History_%28Official_Single_Cover%29.png",
      },
      id: "3",
      doctor: "One Direction",
      years:'20'
    },
     {
      name: "Dr.ABC",
      img: {
        uri: "https://upload.wikimedia.org/wikipedia/en/0/00/One_Direction_-_History_%28Official_Single_Cover%29.png",
      },
      id: "4",
      doctor: "One Direction",
      years:'20'
    },
    {
      name: "Dr.ABC",
      img: {
        uri: "https://upload.wikimedia.org/wikipedia/en/0/00/One_Direction_-_History_%28Official_Single_Cover%29.png",
      },
      id: "5",
      doctor: "One Direction",
      years:'20 Years'
    },
    {
      name: "Dr.ABC",
      img: {
        uri: "https://upload.wikimedia.org/wikipedia/en/0/00/One_Direction_-_History_%28Official_Single_Cover%29.png",
      },
      id: "6",
      doctor: "One Direction",
      years:'20 Years'
    },
    {
      name: "Dr.ABC",
      img: {
        uri: "https://upload.wikimedia.org/wikipedia/en/0/00/One_Direction_-_History_%28Official_Single_Cover%29.png",
      },
      id: "7",
      doctor: "One Direction",
      years:'20 Years'
    },
    {
      name: "Dr.ABC",
      img: {
        uri: "https://upload.wikimedia.org/wikipedia/en/0/00/One_Direction_-_History_%28Official_Single_Cover%29.png",
      },
      id: "8",
      doctor: "One Direction",
      years:'20 Years'
    },
    {
      name: "Dr.ABC",
      img: {
        uri: "https://upload.wikimedia.org/wikipedia/en/0/00/One_Direction_-_History_%28Official_Single_Cover%29.png",
      },
      id: "9",
      doctor: "One Direction",
      years:'20 Years'
    },
    {
      name: "Dr.ABC",
      img: {
        uri: "https://upload.wikimedia.org/wikipedia/en/0/00/One_Direction_-_History_%28Official_Single_Cover%29.png",
      },
      id: "10",
      doctor: "One Direction",
      years:'20 Years'
    },
    {
      name: "Dr.ABC",
      img: {
        uri: "https://upload.wikimedia.org/wikipedia/en/0/00/One_Direction_-_History_%28Official_Single_Cover%29.png",
      },
      id: "11",
      doctor: "One Direction",
      years:'20 Years'
    },
    ])

    return (
        <View>
            <FlatList

                data = {data}
                horizontal = {false}
                showsHorizontalScrollIndicator = {false}
                numColumns = {2}
                keyExtractor = {(item) => item.id}
                renderItem = {({item,index}) => {

                return(
                  
                    <Surface style={styles.surface}>

                        {/* <TouchableOpacity style = {{alignItems:'center', justifyContent:'center',}} > */}
                          
                      
                        <Image
                          style={styles.image}
                          source={item.img}
                        />
                      
                        <Text 
                            style={styles.docname}
                            numberOfLines = {1}
                            ellipsizeMode = "tail"
                        >
                            {item.name}
                        </Text>

                        <Text 
                            style={styles.profession}
                            numberOfLines = {1}
                            ellipsizeMode = "tail"
                        >
                          {item.doctor}
                        </Text>

                        <View style = {{flexDirection:'row',}}>
                      
                            <Text 
                                style={styles.years}
                                numberOfLines = {1}
                                ellipsizeMode = "tail"
                            >
                              {item.years}
                            </Text>

                            <TouchableOpacity style = {styles.more}>
                              <Text style = {{color:Colors.lightblue}}>
                                More
                              </Text>
                            </TouchableOpacity>

                        </View>

                        {/* </TouchableOpacity> */}
                  </Surface>

 
                )
                }}

               

             />
              

        </View>
    )
}

export default CounsellorFlatlist

const styles = StyleSheet.create({
    
    surface: {  
    width: '48%',
    height:250,
    padding: 3,
    backgroundColor: "white",
    margin: 3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 0,
    borderTopLeftRadius:10,
    borderBottomRightRadius:10,
    elevation:10,
    marginVertical:10,
    marginHorizontal:5
  },
  image:
  {
     width: 115,
     height: 130 ,
     bottom:7,
    
  },
  docname:{
     color: Colors.darkblue ,
     fontSize: 16,
     fontWeight: "700",
     width:'100%',
     alignSelf:'center',
     paddingLeft:5 ,
    },

  profession:{ 
      color: Colors.darkblue,
      fontSize: 14,
      fontWeight: "700" ,
      width:'100%' ,
      alignItems:'center',
      padding:5
    },
    
  years:{ 
      color: Colors.black,
      fontSize: 12, 
      fontWeight: "700" , 
      alignSelf:'flex-start',
      paddingLeft:2, 
      width:'50%', 
      paddingTop:10
    },
     
  more:{
      borderWidth:1,
      height:30,
      width:70, 
      borderColor:Colors.lightblue,
      borderRadius:10,
      alignItems:"center",
      justifyContent:'center', 
      top:5,
      right:5
   },
  
})
