import React from 'react';
import SoulHeader from './Header'
import {Container, Segment} from 'semantic-ui-react'
import './Header/index.css';
import Particles from 'react-particles-js';

function SoulHome(){
    return(
        <Container fluid>
            <SoulHeader></SoulHeader>
            <div className='bg'>
                <Container>
                    <Segment basic inverted>
                    <Particles   />
                    </Segment>
                </Container>
            </div>
        </Container>
    )
}
export default SoulHome