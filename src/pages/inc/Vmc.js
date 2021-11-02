import React from 'react';
import {   CardGroup,Card,} from 'react-bootstrap'




function Vmc() {
    return(
        <section className="section bg-c-light border-top">
                <div className="container">
                <section className="section bg-c-light border-bottom">
                <div className="container">
                    <h5 className="main-heading">Our Company</h5>
                    <div className="underline"></div>
                    <p>Our organization is named as Horizon International its a religious organization that supports churches through educational and training courses for young people in several fields, and I am currently training in Web Developing</p>
                </div>
                </section>
                
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading">Vision Mission values</h3>
                            <div className="underline mx-auto"></div>
                        </div>
                
                <CardGroup>
                        <Card>
                            <Card.Body>
                            <Card.Title className="col-md-12 text-center">Vision</Card.Title>
                            <Card.Text>
                                Our Vision is to learn Full Stack development and start to do projects and work in a company's.
                            </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body>
                            <Card.Title className="col-md-12 text-center">Mission</Card.Title>
                            <Card.Text>
                                Our mission is to finish learning in 6 months and start to work after 6 months on new  projects .{' '}
                            </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body>
                            <Card.Title className="col-md-12 text-center">Core Values</Card.Title>
                            <Card.Text>
                                Is that we are getting a lifetime job with a big experience to start working.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                </CardGroup>




                    </div>
                </div>
            </section>
    )
};

export default Vmc;