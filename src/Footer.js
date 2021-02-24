import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.css'
function Footer() {
    return (
        <MDBFooter color="bg-dark" className="font-small pt-4 pg_footer">
            <MDBContainer className="text-center text-md-left">
                <MDBRow className="mt-4 pb-4">
                    <MDBCol md="4" lg="4">
                        <h5 className="text-uppercase mb-4">
                        Thank You for Visiting!
                        </h5>
                        <p>
                        If you have any questions or inquries, use the links and information provided to the right to contact me or navigate to another page. Please suggest any improvements and changes that you think might help.{" "}
                        </p>
                    </MDBCol>
                    <hr className="clearfix w-100 d-md-none" />
                    <MDBCol md="2" lg="2" className="ml-auto">
                        <h5 className="text-uppercase mb-4">Helpful Links</h5>
                        <ul className="list-unstyled">
                        <p>
                            <a href="/">Home</a>
                        </p>
                        <p>
                            <a href="/technical">My Skills</a>
                        </p>
                        <p>
                            <a href="/contact">Contact Me</a>
                        </p>
                        <p>
                            <a href="#!" disabled={true}>Travel...</a>
                        </p>
                        </ul>
                    </MDBCol>
                    {/* <hr className="clearfix w-100 d-md-none" /> */}
                    <MDBCol md="5" lg="3">
                        <h5 className="text-uppercase mb-4">Contact Info</h5>
                        <p>
                        <i className="fa fa-home mr-3" /> Nowhereville, CA 12345, US
                        </p>
                        <p>
                        <i className="fa fa-envelope mr-3" /> kyle.xu4@gmail.com
                        </p>
                        <p>
                        <i className="fa fa-phone mr-3" /> + 01 618 550 8029
                        </p>
                        <p>
                        <i className="fa fa-print mr-3" /> + 01 618 550 8029
                        </p>
                    </MDBCol>
                    </MDBRow>
                </MDBContainer>
        </MDBFooter>
    )
}

export default Footer
