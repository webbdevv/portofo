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
                    <p>Hi, I'm a second year cognitive science student specializing in computing. In class, I mainly study programming, interface design principles, quantitative analysis, and general psychology. I work to develop a better understanding how people interact with technology, improving the ways create user interfaces to make them more responsive, flexible, intuitive, and hopefully responsible as well. Here are some of the things I'm involved in at UCLA.</p>

                    <div className="extracurricular">
                        <h4 className="text-info">Glendale Learning Program —<span className="text-muted"> Tutor</span></h4>
                        <p className="text-body">I was inspired to volunteer here by one of the gen-ed classes at UCLA, CESC 50XP, which focuses primarily on community outreach and studies on social inequality in Los Angeles. Each week, I help guide students through their assignments and help answer questions about their questions, whether related to school or their lives in general. I realize that these circumstances have made it tremendously difficult for students to engage with their learning and apply their knowledge, so we develop lesson plans that help give students a chance to participate with interactive experiments online. Finally, we at GLP hope to establish relationships with students to best serve these students despite the online format.</p>
                    </div>

                    <hr className="mx-1"/>
                    
                    <div className="extracurricular">
                        <h4 className="text-info">Bruin Mental Health Advisory Committee —<span className="text-muted"> Member</span></h4>
                        <p>As a member of the committee, I assist CAPS, the main mental health services available on campus, in making decisions and general community outreach. As a student driven committee, we inform campus staff of how they can more efficiently serve the needs of students on campus. We spread awareness and create media to promote healthy lifestyle practices and mental health.</p>
                    </div>

                    <hr className="mx-1"/>

                    <div className="extracurricular">
                        <h4 className="text-info">UCLA Memory and Cognition Lab —<span className="text-muted">Research Assistant</span></h4>
                        <p>The Memory Lab aims at understanding the mechanisms of healthy aging. At the lab, I assistant in data collection and analysis for experiments. When necessary, I conduct experiments and assist participants in properly working through their assigned tasks.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edu
