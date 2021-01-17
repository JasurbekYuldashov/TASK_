import React from "react"
import {Text} from "react-native"
import {textCenter} from "../components/Styles";
import Container from "../components/Container";

export default function Message(){
    return(
        <Container>
            <Text style={textCenter}>
                Message
            </Text>
        </Container>
    )
}
