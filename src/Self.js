import React from 'react'
import './Self.css';
import Card from 'react-bootstrap/Card';
import img from './imgs/placeholder.png'
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer} from "mdbreact";

function Self() {
    const jboStyle = {
        background: 'transparent',
    }
    return (
        <div className="container-fluid self_section pb-5">
        <div className="container">
            <section className="text-center text-dark" style={jboStyle}>
                <div className="container">
                    <h2 className="display-3">What I Love</h2>
                    <p className="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </section>

            <MDBContainer>
                <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
                >
                    <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                            <MDBView>
                                <img className="d-block w-100" src="/placeholder.png" alt="First slide"/>
                            <MDBMask overlay="black-light"/>
                            </MDBView>
                            <MDBCarouselCaption>
                                <h3 className="h3-responsive">Light mask</h3>
                                <p>First text</p>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <MDBView>
                                <img className="d-block w-100" src="/placeholder.png" alt="Second slide"/>
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                            <MDBView>
                                <img className="d-block w-100" src="/placeholder.png" alt="Third slide"/>
                            </MDBView>
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
            </MDBContainer>
                <div className="row">
                    <div className="col-md-4 py-4">
                        <Card className="bg-dark text-light">
                        <Card.Img src={img} variant="top"></Card.Img>
                            <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam eget felis eget nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4 py-4">
                        <Card className="bg-dark text-light">
                        <Card.Img src={img} variant="top"></Card.Img>
                            <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam eget felis eget nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Text>
                            </Card.Body>
                        </Card>
                    </div> 

                    <div className="col-md-4 py-4">
                        <Card className="bg-dark text-light">
                        <Card.Img src={img} variant="top"></Card.Img>
                            <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam eget felis eget nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>    

                <hr/>
                <div className="container text-center">
                    <h2 className="display-4">Quarantine Favorites</h2>
                    <p className="lead">Things I've really enjoyed doing during the pandemic</p>
                </div>
                <div className="row">
                    <div className="col-md-4 py-4">
                        <Card className="bg-dark text-light">
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4 py-4">
                        <Card className="bg-dark text-light">
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4 py-4">
                        <Card className="bg-dark text-light">
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Self
