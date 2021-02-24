import React from 'react'
import './End.css';

function End() {
    return (
        <div className="container-fluid last-section">
            <div className="container">
                <div className="d-flex flex-row">
                    <h5 className="thought thoughtmarg">Thank you for visiting</h5>
                </div>
                <div className="d-flex flex-row-reverse">
                    <h5 className="thought thoughtmarg">I hope you've enjoyed your stay</h5>
                </div>
            </div>

            <div className="container stairs">
                <div>
                    <div className="d-flex row align-self-start justify-content-start">
                        <h5 className="thought thoughtmarg">Check out the bottom of this page</h5>
                    </div>
                    <div className="d-flex row align-self-center justify-content-center">
                        <h5 className="thought thoughtmarg">For links to get around</h5>
                    </div>
                    <div className="d-flex row align-self-end justify-content-end">
                        <h5 className="thought thoughtmarg">And send me an email to talk!</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default End
