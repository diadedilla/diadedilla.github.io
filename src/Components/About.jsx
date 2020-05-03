import React, { Component } from 'react';
import { Row, Container, Alert, Button } from 'react-bootstrap';
import './main.css';
import './about.css';

import Timer from './Timer';
import { HISTORY, COVID, ETYMOLOGY, MISSION } from '../strings'

export default class About extends Component {
    constructor() {
        super();

        this.state = {
            show: true
        }
    }

    render() {
        document.title = 'About Día de Dilla';
        const handleClose = () => this.setState({ show: false })

        return (
            <>
                <Container style={{ height: '100vh', maxWidth: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-56px'}} >
                    <Row>
                    <div className='col-12'>
                        <Alert show={this.state.show} variant="danger" onClose={handleClose} style={{ width: '80vw', marginLeft: 'auto', marginRight: 'auto' }}dismissible>
                            <Alert.Heading>{ COVID.title }</Alert.Heading>
                            <p>
                                { COVID.body }
                            </p>
                        </Alert>
                    </div>
                    <div className='col-12 col-xs-2'>
                        <Timer timeTillDate='2021-03-24 3:00' timeFormat='YYYY-MM-DD, hh:mm' />
                    </div>
                    {/* <div className='col-12' style={{alignItems: 'center'}}> */}
                        <Button className='home-btn' href='/recipes' style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                                View Recipes
                        </Button>
                    {/* </div> */}
                    </Row>
                </Container>
                <div className='center-column'>
                    <FadeInSection className='description'>
                        <p className='header'>{HISTORY.title}</p>
                        <p>{HISTORY.body}</p>
                    </FadeInSection>
                    <FadeInSection className='description'>
                        <p className='header'>{ETYMOLOGY.title}</p>
                        <p>{ETYMOLOGY.body}</p>
                    </FadeInSection>
                    <FadeInSection className='description'>
                        <p className='header'>{MISSION.title}</p>
                        <p>{MISSION.body}</p>
                    </FadeInSection>
                </div>
                <div style={{ paddingBottom: '50px' }} />
            </>
        )
    }
}

function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
      const thing = domRef.current;
      return () => observer.unobserve(thing);
    }, []);
    return (
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }