import React from 'react'
import './Main.css';

function Main() {
    return (
        
    <header className="landing">
        <div className="container">
            <div className="row">

                <div className="col-lg-6 introduction">
                    <h2 className="display-3">Kyle Xu<br/>Web Developer</h2>
                </div>

                <div className="col-lg-6">
                    <div className="d-flex justify-content-lg-end">
                        <img src="/landing_newTheme.png" alt="Landing Image Icon"/>
                    </div>
                </div>
            </div>

            <div className="row descrip">
                <div className="d-flex justify-content-lg-start">
                    <p className="lead">UI/UX Research</p>
                </div>
            </div>
        </div>

        <div className="custom-shape-divider-bottom-1613767261">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
        </div>
    </header>
    )
}

export default Main
