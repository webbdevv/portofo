import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.css'
function Footer() {
    return (
        <MDBFooter color="bg-dark" className="font-small pt-4">
            <MDBContainer className="text-center text-md-left">
                <MDBRow className="mt-4 pb-4">
                    <MDBCol md="4" lg="4">
                        <h5 className="text-uppercase mb-4 font-weight-bold">
                        MDBFooter Content
                        </h5>
                        <p>
                        Here you can use rows and columns here to organize your footer
                        content.
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                        error amet numquam iure provident voluptate esse quasi,
                        veritatis totam voluptas nostrum.{" "}
                        </p>
                    </MDBCol>
                    <hr className="clearfix w-100 d-md-none" />
                    <MDBCol md="2" lg="2" className="ml-auto">
                        <h5 className="text-uppercase mb-4 font-weight-bold">About</h5>
                        <ul className="list-unstyled">
                        <p>
                            <a href="#!">PROJECTS</a>
                        </p>
                        <p>
                            <a href="#!">ABOUT US</a>
                        </p>
                        <p>
                            <a href="#!">BLOG</a>
                        </p>
                        <p>
                            <a href="#!">AWARDS</a>
                        </p>
                        </ul>
                    </MDBCol>
                    {/* <hr className="clearfix w-100 d-md-none" /> */}
                    <MDBCol md="5" lg="3">
                        <h5 className="text-uppercase mb-4 font-weight-bold">Address</h5>
                        <p>
                        <i className="fa fa-home mr-3" /> New York, NY 10012, US
                        </p>
                        <p>
                        <i className="fa fa-envelope mr-3" /> info@example.com
                        </p>
                        <p>
                        <i className="fa fa-phone mr-3" /> + 01 234 567 88
                        </p>
                        <p>
                        <i className="fa fa-print mr-3" /> + 01 234 567 89
                        </p>
                    </MDBCol>
                    </MDBRow>
                </MDBContainer>
        </MDBFooter>
    )
}

export default Footer
