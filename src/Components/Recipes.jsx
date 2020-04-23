import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import './main.css';
import './recipes.css';

import Recipe from './Recipe';

import { SMORE, OREO, POLLO, CALI, TRIPE, CARNE } from '../strings'

export default class Recipes extends Component {
    render() {
        document.title = 'Recipes'

        return (
            <Container className='nav-offset center-column'>
                <div className='section'>
                    <Row>
                        <p className='section-header'>the classics</p>
                    </Row>
                    <Row style={{marginTop:'-15px', marginBottom:'10px'}}>
                        <p className='section-desc'>timeless tastes to tickle your tongue</p>
                    </Row>
                    <Row>
                        <Recipe info={ SMORE } />
                        <Recipe info={ POLLO } />
                    </Row>
                </div>
                <div className='section'>
                    <Row>
                        <p className='section-header'>our favorites</p>
                    </Row>
                    <Row style={{marginTop:'-15px', marginBottom:'10px'}}>
                        <p className='section-desc'>you can't go wrong with any of these choices</p>
                    </Row>
                    <Row>
                        <Recipe info={ OREO } />
                        <Recipe info={ CARNE } />
                    </Row>
                </div>
                <div className='section'>
                    <Row>
                        <p className='section-header'>ernest's chow</p>
                    </Row>
                    <Row style={{marginTop:'-15px', marginBottom:'10px'}}>
                        <p className='section-desc'>gourmet.</p>
                    </Row>
                    <Row>
                        <Recipe info={ CALI } />
                        <Recipe info={ TRIPE } />
                    </Row>
                </div>
            </Container>
        )
    }
}
