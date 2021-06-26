import React from 'react'
import {Facebook, Linkedin, Twitter, Whatsapp, Wrapper, Container} from './style'


export default function ShareLink() {
    return (
        <Wrapper>
            <Container>
                <Facebook>
                    Facebook
                </ Facebook>
                <Twitter>
                    Twitter
                </ Twitter>
                <Whatsapp>
                    Whatsapp
                </Whatsapp>
                <Linkedin>
                    Linkedin
                </Linkedin>
            </ Container>
        </ Wrapper>
    )
}
