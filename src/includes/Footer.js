import React from 'react';
import {Link} from 'react-router-dom';


function Footer() {
    return(
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Company Information</h6>
                        <hr/>
                        <p className="text-white">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h6>Quick Links</h6>
                        <hr/>
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/about">About</Link></div>
                        <div><Link to="/contact">Contact</Link></div>
                    </div>
                    <div className="col-md-4">
                        <h6>Contact Information</h6>
                        <hr/>
                        <div><p className="text-white mb-1">Beirut, Bouchriye Lebanon</p></div>
                        <div><p className="text-white mb-1">+961 76 870 245</p></div>
                        <div><p className="text-white mb-1">E-mail:simonreasho@gmail.com</p></div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Footer;