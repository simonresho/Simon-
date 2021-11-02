import React from 'react'; 
import {FacebookFilled , InstagramFilled, GithubFilled} from '@ant-design/icons';



function Contactus() {
    return(
        <div>
                        
        <section className="py-4 bg-info">
        <div className="container">
            <div className="row">
                <div className="col-md-4 my-auto">
                    <h4>Contact Us</h4>
                </div>
                <div className="col-md-8 my-auto">
                    <h6 className="float-end">
                        Home / Contact Us
                    </h6>
                </div>
            </div>
        </div>
    </section>
            <br/> 
            <div className="santer">
            <h5>call me on:</h5>
            <p>+961 7687 0245</p>
            <br/>
            <h5>E-mail Adress:</h5>
            <a href="mailto:E-mail:simonreasho@gmail.com" target="_blank" rel="noreferrer"><p>E-mail:simonreasho@gmail.com</p></a>
        <br/>
        <h5>You can follow me on</h5>
        <div className="col-md-12 text-center">
                                <a href="https://www.facebook.com/simon.re.3762" target="_blank" rel="noreferrer" style={{margin:"10px"}}><FacebookFilled  style={{color:'#8A8A8A' ,fontSize:30 ,}} /></a> 
                                <a href="https://www.instagram.com/simonre123" target="_blank" rel="noreferrer" style={{margin:"10px"}}><InstagramFilled style={{color:'#8A8A8A' ,fontSize:30}}/></a>
                                <a href="https://github.com/simonresho" target="_blank" rel="noreferrer" style={{margin:"10px"}}><GithubFilled  style={{color:'#8A8A8A' , fontSize:30}} /></a>
                                </div>
        </div>
        <br/>
        
                        </div>                      
                       
    );
}
export default Contactus;