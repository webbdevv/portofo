import React from 'react'
import './Edu.css'

function Edu() {
    return (
        <div>
            <div className="container w-100 Edu_main">
                <div className="text-center p-1">
                    <h2 className="display-3">Education</h2>
                    <p className="lead">University of California Los Angeles</p>
                    <p className="lead">Bachelor of Science - Cognitive Science 2019-2023 </p>
                </div>
                <hr/>
                <div className="container">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum suspendisse ultrices gravida dictum fusce. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Nunc id cursus metus aliquam eleifend. Viverra mauris in aliquam sem. Imperdiet dui accumsan sit amet nulla. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Scelerisque viverra mauris in aliquam. Sed arcu non odio euismod lacinia at quis risus. Justo nec ultrices dui sapien eget mi proin sed libero. Semper viverra nam libero justo laoreet.</p>

                    <div className="extracurricular">
                        <h4 className="text-info">Heading One —<span className="text-muted"> What Am I</span></h4>
                        <p className="text-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <hr className="mx-1"/>
                    
                    <div className="extracurricular">
                        <h4 className="text-info">Heading Two —<span className="text-muted"> What Am I</span></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <hr className="mx-1"/>

                    <div className="extracurricular">
                        <h4 className="text-info">Heading Three —<span className="text-muted"> What Am I</span></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edu
