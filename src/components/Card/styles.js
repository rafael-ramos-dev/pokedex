import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        flexGrow: 1,
        marginVertical: 10,
        padding: 15,
        borderRadius: 20,
        backgroundColor: '#62B957'
    },

    textContainer:{
        color: 'white',
        textTransform: 'capitalize',
        paddingLeft: 10,
        paddingBottom: 0
    },

    title:{
        fontSize: 30,
        color: 'white',
        textTransform: 'capitalize',
        fontWeight: '500'
    },

    pokeNumber:{
        fontSize: 18,
        color: 'black',
        fontWeight: '700'
    },

    typeContainer:{
        flexDirection:'row',
        paddingTop: 5
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
    },
    
    imageContainer:{
        position: 'absolute',
        right: 20,
        top: -18
    },

    image:{
      width: 130,
      height: 130  
    },

    

});

export default styles;