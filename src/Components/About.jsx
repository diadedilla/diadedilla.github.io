import React, { Component } from 'react';
import { Row, Container, Alert } from 'react-bootstrap';
import './main.css';
import './about.css';

import Timer from './Timer';
import { HISTORY, COVID, ETYMOLOGY } from '../strings'

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
            <>
                <Container style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-56px' }} >
                    <div className='overlay'>
                        <Alert variant="danger" className='center-column'>
                            <Alert.Heading>{ COVID.title }</Alert.Heading>
                            <p>
                                { COVID.body }
                            </p>
                        </Alert>
                    </div>
                    <Row>
                        <Timer timeTillDate='2020-04-25 3:00' timeFormat='YYYY-MM-DD, hh:mm' />
                    </Row>
                </Container>
                <div className='center-column'>
                    <div className='description'>
                        <p className='header'>{HISTORY.title}</p>
                        <p>{HISTORY.body}</p>
                    </div>
                    <div className='description'>
                        <p className='header'>{ETYMOLOGY.title}</p>
                        <p>{ETYMOLOGY.body}</p>
                    </div>
                </div>
                <div style={{ paddingBottom: '50px' }} />
            </>
        )
    }
}