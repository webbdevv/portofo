import React from 'react'
import './Self.css';
import Card from 'react-bootstrap/Card';
import img from './imgs/placeholder.png'

function Self() {
    const jboStyle = {
        background: 'transparent',
    }
    return (
        <div className="container-fluid self_section pb-5">

            <section className="jumbotron text-center" style={jboStyle}>
                <div className="container">
                    <h2 className="jumbotron-heading">What I Love</h2>
                    <p className="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </section>

            <div className="container">
                <div className="row">
                    <div className="col-md-4 p-4">
                        <Card className="bg-dark text-light">
                        <Card.Img src={img} variant="top"></Card.Img>
                            <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam eget felis eget nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4 p-4">
                        <Card className="bg-dark text-light">
                        <Card.Img src={img} variant="top"></Card.Img>
                            <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam eget felis eget nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Text>
                            </Card.Body>
                        </Card>
                    </div> 

                    <div className="col-md-4 p-4">
                        <Card className="bg-dark text-light">
                        <Card.Img src={img} variant="top"></Card.Img>
                            <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam eget felis eget nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </div>    
        </div>
    )
}

export default Self
