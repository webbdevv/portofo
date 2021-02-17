import React from 'react'
import './Main.css';
import Container from 'react-bootstrap/container'
function Main() {
    return (
        
<header className="masthead text-center text-white landing">
        <div className="masthead-content">
            <div className="container">
                <h2 className="masthead-subheading mb-0"></h2>
            </div>
        </div>
        <h1 className="masthead-heading mb-0 featured">Hi!! I'm Kyle Xu</h1>
        <div className="container">
            <div className="row stacked">
                <div className="col-4 justify-content-start align-self-start statements">
                    Web Developer
                </div>

                <div className="col-4 justify-content-center align-self-center statements"> {/* Placeholder */}</div>

                <div className="col-4 justify-content-end statements align-self-end statements">
                    UCLA Class of 2023
                </div>
            </div>
        </div>
    </header>
    )
}

export default Main
