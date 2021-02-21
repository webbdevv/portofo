import React from 'react'
import './Projects.css'
function Projects() {
    return (
        <div>
            <div className="projects-clean">
                <div className="container">
                    <div className="intro">
                        <h2 className="text-center">Projects</h2>
                        <p className="text-center">What I've Been Working On</p>
                    </div>
                    <div className="row projects">
                        <div className="col-sm-6 col-lg-4 item">
                            <img src="/pppaddles.png" alt="Ping Pong Website" className="img-fluid"/>
                            <h3 className="name">Ping Pong Website</h3>
                            <p className="description">Web app that tracks relevant ping pong statistics for local tournaments using MongoDB, express, and more. Holds and updates data in response to new entries each day.</p>
                        </div>
                        <div className="col-sm-6 col-lg-4 item">
                            <img src="/home-bg.jpg" alt="Blog" className="img-fluid"/>
                            <h3 className="name">Blog</h3>
                            <p className="description">My own blog titled This is Water, where I write about philosophical, political, and discourse from books I read and current events.</p>
                        </div>
                        <div className="col-sm-6 col-lg-4 item">
                            <img src="/photo_album.png" alt="Travel Blog/Photo Album" className="img-fluid"/>
                            <h3 className="name">Photography Album</h3>
                            <p className="description">Current work of progress that is half history and documentation of my travels and half photo album. Hopefully after traveling is made possible once again I can truly flesh this out.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
