import React from 'react'; 
import Slider from '../includes/Slider';
import {Link} from 'react-router-dom';
import Service1 from '../images/Slider-3.webp';
import Service2 from '../images/Slider-2.jpg';
import Service4 from '../images/Slider-1.jpg'
import {   CardGroup,Card,} from 'react-bootstrap'

function Home() {
    return(
        <div>
            <Slider />
            <section className="section"> 
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3>Welcombndndgndhfndfhh to the website</h3>
                            <hr />
                            <Link to="/about"  className="btn btn-warning shadow">Read More</Link>  
                        </div>
                    </div>
                </div>
            </section>

            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading">Skills</h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div>

                    <CardGroup>                            
                            <Card className="cardone">
                                <img src={Service1} className="target2" alt="Services" />                                   <Card.Body>
                                <Card.Title>PhotoGraphy:</Card.Title>
                                <Card.Text>
                                I love photography because I love to take pictures and work on social media and i practice this as a hobby.
                                </Card.Text>
                                </Card.Body>
                            </Card>


                            <Card className="cardtwo">
                                <img src={Service2} className="target1" alt="Services" />   
                                <Card.Body>
                                <Card.Title>Electro-Mechanic Engineering:</Card.Title>
                                <Card.Text>
                                    Also i have experience in cars and since i was learning Mechanic Engineering but i do this as a hobby also.
                                </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card className="cardthree">
                                 <img src={Service4} className="target" alt="Services" />   
                                <Card.Body>
                                <Card.Title>Full Stack Developing:</Card.Title>
                                <Card.Text>
                                    Iam also learning Web Developing and its been six month learning and practicing and this is my first webstie.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>

                        </div>
                    </div>
                </div>
            </section>
                    {/*Our Service*/} 
        </div>
    );
}
export default Home;