import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    detailsBody:{
        height: '100%',
        padding: 15,
        alignItems: 'center',
        // justifyContent: 'center',
    },

    imageContainer:{
        // position: 'absolute',
        marginTop: 40
    },

    image:{
      width: 280,
      height: 280  
    },

    title:{
        fontSize: 50,
        color: 'white',
        textTransform: 'capitalize',
        fontWeight: '500',
        marginTop: 20
    },

    typeContainer:{
        flexDirection:'row',
        paddingTop: 5,
    },

    pokeType:{
        fontSize: 18,
        color: 'white',
        // backgroundColor: 'blue',
        borderRadius: 10,
        margin: 5,
        padding: 5,
        fontSize: 20,
        alignContent: 'center',
        textTransform: 'capitalize',
        marginVertical: 20
    },

    textContainer:{
        flexDirection: 'row',
        margin: 5,
        textTransform: 'capitalize',
    },

    plainText:{
        marginHorizontal: 5,
        textTransform: 'capitalize',        
    },



});

export default styles;