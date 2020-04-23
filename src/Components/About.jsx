import React, { Component } from 'react';
import { Row, Container } from 'react-bootstrap';
import './main.css';
import './home.css';

import Timer from './Timer';

export default class About extends Component {
    constructor() {
        super();
        this.state = {
            width: window.innerWidth,
        };
    }

    render() {
        document.title = 'About Día de Dilla';

        return (
            <Container style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-56px' }} >
                <Row className='align-items-center justify-content-space-evenly'>
                    <Timer timeTillDate='04 25 2020, 7:00 pm' timeFormat='MM DD YYY, h:mm a' />
                </Row>
            </Container>
        )
    }
}