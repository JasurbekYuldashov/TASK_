import React from "react"
import {Text} from "react-native"
import {textCenter} from "../components/Styles";
import Container from "../components/Container";

export default function Account(){
    return(
        <Container>
            <Text style={textCenter}>
                Account
            </Text>
        </Container>
    )
}
