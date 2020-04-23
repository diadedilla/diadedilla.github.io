import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown'
import './main.css'
import './recipes.css'

export default class Recipe extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        }
    }
    render() {           
        const info = this.props.info;

        const handleClose = () => this.setState({ show: false });
        const handleShow = () => this.setState({ show: true });

        return (
            <>
                <Button className='recipe' onClick={handleShow}>
                    <img src={info.image} className='recipe-img' alt='icon'></img>
                    <p className='recipe-label'>{info.label}</p>
                    <p className='recipe-category'>{info.categ}</p>
                </Button>
                <div onClick={e => e.stopPropagation()}>
                    <Modal show={this.state.show} onHide={handleClose} animation={true} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>{info.label}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <ReactMarkdown source={info.recip} />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className='modal-btn' onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </>
        )
    }
}