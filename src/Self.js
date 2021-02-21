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
                    <h2 className="display-4">What I Do In My Spare Time</h2>
                    <p className="lead text-muted">I've expanded upon many of my hobbies during quarantine, and I have really enjoyed picking up new skills during my free time</p>
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
                                <img className="d-block w-100" src="/Climbing.png" alt="First slide"/>
                            <MDBMask overlay="black-light"/>
                            </MDBView>
                            <MDBCarouselCaption>
                                <h3 className="h3-responsive">Rock Climbing</h3>
                                {/* <p>First text</p> */}
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <MDBView>
                                <img className="d-block w-100" src="/Weights.png" alt="Second slide"/>
                            <MDBMask overlay="black-light"/>
                            </MDBView>
                            <MDBCarouselCaption>
                                <h3 className="h3-responsive">Fitness</h3>
                                {/* <p>Second slide text...</p> */}
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                            <MDBView>
                                <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg" alt="Third slide"/>
                            <MDBMask overlay="black-slight"/>
                            </MDBView>
                            <MDBCarouselCaption>
                                <h3 className="h3-responsive">Photography</h3>
                                {/* <p>Third Slide Text</p> */}
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
            </MDBContainer>
                <div className="row last_row">
                    <div className="col-md-4 py-4">
                        <Card className="bg-secondary text-light">
                            <Card.Body>
                            <Card.Title>Reading</Card.Title>
                                <Card.Text className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam eget felis eget nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4 py-4">
                        <Card className="bg-secondary text-light">
                            <Card.Body>
                            <Card.Title>Video Games</Card.Title>
                                <Card.Text className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam eget felis eget nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Text>
                            </Card.Body>
                        </Card>
                    </div> 

                    <div className="col-md-4 py-4">
                        <Card className="bg-secondary text-light">
                            <Card.Body>
                            <Card.Title>Investing</Card.Title>
                                <Card.Text className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam eget felis eget nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>    
            </div>
            <div class="custom-shape-divider-bottom-1613760855">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>
    </div>
    )
}

export default Self
