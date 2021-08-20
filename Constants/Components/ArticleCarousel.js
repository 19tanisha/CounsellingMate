import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, View ,Dimensions,TouchableOpacity} from 'react-native'
import Carousel, {Pagination} from 'react-native-snap-carousel';

const ArticleCarousel = () => {
    const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
   const [index, setIndex] = React.useState(0);
    const [data, setData] = useState([
        {
            img: {uri:'https://images6.fanpop.com/image/photos/39100000/History-one-direction-39168234-577-1024.jpg'},
            title:'Cancer Risk',
            id:'1'
        },

        {
            img: {uri:'https://images6.fanpop.com/image/photos/39100000/History-one-direction-39168234-577-1024.jpg'},
            title:'Columbus Risk',
            id:'2'
        },

        {
            img: {uri:'https://images6.fanpop.com/image/photos/39100000/History-one-direction-39168234-577-1024.jpg'},
            title:'strangers Risk',
            id:'3'
        },

        {
            img: {uri:'https://images6.fanpop.com/image/photos/39100000/History-one-direction-39168234-577-1024.jpg'},
            title:'XYZ Risk',
            id:'4'
        }
    ]);

       const isCarousel = React.useRef(null)
   
       return (
        <View>
           <Carousel
            layout = 'default'
            layoutCardOffset = {0}
            ref = {isCarousel}
            data = {data}
            renderItem = {({item, index}) => {
                return(
                    <View style={{
                paddingTop: 10,
                alignItems: "center",
                justifyContent: "center",
              }}>
                       <TouchableOpacity activeOpacity = {0.5} >
              <ImageBackground
                source={item.img}
                blurRadius={2}
                style={{
                  width: windowWidth*0.7,
                  height: 160,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                imageStyle={{ borderRadius: 30 }}
              >
                <Text
                  style={{ fontSize: 25, fontWeight: "bold", color: "white", marginTop:95 , bottom:50}}
                >
                  {item.title}
                </Text>
              </ImageBackground>
              </TouchableOpacity>
                    </View>
                )
            }}
            sliderWidth={windowWidth}
            itemWidth={windowWidth * 0.7}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
        enableSnap={true}
        loop={true}
        autoplay={true}
        enableMomentum={true}
        lockScrollWhileSnapping={true}
        autoplayDelay={1000}
        autoplayInterval={2000}
            />

            <Pagination
        dotsLength={data.length}
        dotColor="#202aa8"
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: "red",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotColor="#e92b81"
        inactiveDotScale={1}
        tappableDots={true}
        containerStyle={{}}
      />
            
        </View>
    )
}

export default ArticleCarousel

const styles = StyleSheet.create({})
