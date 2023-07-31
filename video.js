import React from "react";
import b4 from './components/images/b4.jpg';
import b3 from './components/images/b3.jpg';
import b2 from './components/images/b2.jpg';
import b1 from './components/images/b1.jpg';
import flower from './components/video/flower.mp4';

import './video.css';
class Video extends React.Component{
    render(){
        return(
            <div>
                <div class="x">
                    <img className="b1" src={b1} class="a"/>
                    <img className="b2" src={b2} class="b"/>
                 </div>
                    <div class="e">
                    <center>
                    <video src={flower} width="600" height="300" controls="controls" autoplay="true" className="video/"/>
                    </center>
                    </div>
                    <div class="y">
                    <img className="b3" src={b3} class="c"/>
                    <img className="b4" src={b4} class="d"/>
                </div>
            </div>
        );
    }
}

export default Video;

