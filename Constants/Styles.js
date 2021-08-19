import { StyleSheet, Dimensions } from "react-native";

export const Colors = {
    grey : "#D8E3E7",
    lightblue : "#51C4D3",
    darkblue : "#126E82",
    black : "#132C33"
};

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export const Size = {
    padding : 10,
    margin : 10,
    height : height,
    width : width,
}

export const Font = StyleSheet.create({

    header:{
        fontSize:20,
        fontWeight:'bold',
        color: Colors.grey,
    },

    title: {
        color: Colors.primary,
        fontWeight: "bold",
        fontSize: 14,
    },

    subtitle: {
        color: Colors.secondary,
        fontSize: 12,
    },

})