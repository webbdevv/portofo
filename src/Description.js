import React from 'react';
import './Description.css';


function Description() {
    return (
        <div>
        <section className="background_des">
            <div className="container py-2">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-lg-2">
                        <div className="p-5"><img className="img-fluid" src="/Profile.png"/></div>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <div className="p-5"><h2 className="display-4">Who I Am</h2>
                                <p>Hi! I am a second year cognitive science student at UCLA specializing in computing. At school, I study research techniques, quantitative analysis, general psychology, and user interactivity and design.&nbsp; In my free time, I love weightlifting, video games, reading, traveling,&nbsp; and rock climbing. This year has definitely been tough because I usually spend most of my time outside the home and adapting to COVID-19 changes has been very hard at times. I care about people deeply, and my urge to connect with others has been shoveled down new pathways since my physical contact with others has dwindled. Regardless, I will resume my regular lifestyle once possible, and I continue to pursue new experiences and knowledge everyday.&nbsp;</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container py-2 pb-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-lg-1">
                        <div className="p-5"><img className="img-fluid" src="/Coding.png"/></div>
                    </div>
                    <div className="col-lg-6 order-lg-2">
                        <div className="p-5"><h2 className="display-4">Coding for a Cause</h2>
                                <p>My interests collide at the intersection between the humanities and technology. I believe modern web applications offer a plethora of solutions to human problems. As such, I aim to code towards answers to issues including climate change, mental health, and connectivity in a COVID impacted world. I started coding because I wanted to create things, new things, cool things. Building upon this original goal, I aim to create technology that interacts with users as real, complicated people, not just data.&nbsp;</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>    
    )
}

export default Description
