import React from 'react'
import './End.css';

function End() {
    return (
        <div className="container-fluid last-section">
            <div className="container">
                <div className="d-flex flex-row">
                    <h5 className="thought thoughtmarg">this is sample text</h5>
                </div>
                <div className="d-flex flex-row-reverse">
                    <h5 className="thought thoughtmarg">And this is sample text too</h5>
                </div>
            </div>

            <div className="container stairs">
                <div>
                    <div className="d-flex row align-self-start justify-content-start">
                        <h5 className="thought thoughtmarg">Top of my stairs</h5>
                    </div>
                    <div className="d-flex row align-self-center justify-content-center">
                        <h5 className="thought thoughtmarg">Middle of my stairs</h5>
                    </div>
                    <div className="d-flex row align-self-end justify-content-end">
                        <h5 className="thought thoughtmarg">End of my stairs</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default End
