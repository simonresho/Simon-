import React from 'react'; 
import Vmc from './inc/Vmc';

function Aboutus() {
    return(
        <div>
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>About Us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">
                                Home / About Us
                            </h6>
                        </div>
                    </div>
                </div>
            </section>

              {/*our vision, mission and values*/}
              <Vmc />

        </div>
    );
}
export default Aboutus;