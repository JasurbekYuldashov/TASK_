import React from "react"
import {View,StyleSheet} from "react-native"

export default function Container(props) {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#98d082"
    }
})
