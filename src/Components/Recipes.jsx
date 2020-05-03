import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import './main.css';
import './recipes.css';

import Recipe from './Recipe';

import { BARBACOA, BARRY, CALI, CARNE, JAMBALAYA, KOREA, OREO, POLLO, SMORE, TRIPE } from '../strings'

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
                        <Recipe info={ JAMBALAYA } />
                        <Recipe info={ BARBACOA } />
                        <Recipe info={ KOREA } />
                        <Recipe info={ BARRY } />
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
                {/* <div className='section'>
                    <Row>
                        <p className='section-header'></p>
                    </Row>
                    <Row style={{marginTop:'-15px', marginBottom:'10px'}}>
                        <p className='section-desc'>gourmet.</p>
                    </Row>
                    <Row>
                        <Recipe info={ CALI } />
                        <Recipe info={ TRIPE } />
                    </Row>
                </div> */}
            </Container>
        )
    }
}
