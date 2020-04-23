import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './main.css'
import './recipes.css'

export default class Recipe extends Component {
    render() {           
        const info = this.props.info;

        return (
            <Button className='recipe'>
                <img src={info.image} className='recipe-img' alt='icon'></img>
                <p className='recipe-label'>{info.label}</p>
                <p className='recipe-category'>{info.categ}</p>
            </Button>
        )
    }
}