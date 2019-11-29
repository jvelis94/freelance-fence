import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faGoogle } from "@fortawesome/free-brands-svg-icons"

const FooterPage = () => {
  return (
    <div>
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left" >
            <MDBRow>
            <MDBCol md="6">
                <h5 className="title">Footer Content</h5>
                <p>
                Here you can use rows and columns here to organize your footer
                content.
                </p>
            </MDBCol>
            <MDBCol md="6">
                <h5 className="title">Links</h5>
                <ul style={{padding: '0'}}>
                <li className="list-unstyled" >
                    <a href="#!"><FontAwesomeIcon icon={faFacebook} /></a>
                </li>
                <li className="list-unstyled">
                    <a href="#!"><FontAwesomeIcon icon={faInstagram} /></a>
                </li>
                <li className="list-unstyled">
                    <a href="#!"><FontAwesomeIcon icon={faGoogle} /></a>
                </li>
                </ul>
            </MDBCol>
            </MDBRow>
        </MDBContainer>
        </MDBFooter>
        <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
        &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
    </div>
  </div>
  );
}

export default FooterPage;