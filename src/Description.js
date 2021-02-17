import React from 'react';
import './Description.css';


function Description() {
    return (
        <section className="background_one">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-lg-2">
                            <div className="p-5">
                                <img className="rounded-circle img-fluid" src="./imgs/placeholder.png"/>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <div className="p-5">
                                    <h2 className="display-4">Who I Am</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam eget felis eget nunc. Neque egestas congue quisque egestas diam. Nec ullamcorper sit amet risus nullam eget felis eget. Leo a diam sollicitudin tempor id eu. Vel facilisis volutpat est velit egestas dui.</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="background_two">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-lg-1">
                        <div className="p-5">
                            <img src="./imgs/placeholder.png" className="rounded-circle img-fluid">
                        </div>
                        <div className="col-lg-6 order-lg-2">
                            <div className="p-5">
                                <h2 class="display-4">
                                    What I Do
                                </h2>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Description
