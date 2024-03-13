import logo from '../assets/img/logo-bachibouzouk-instruments.png'
import '../styles/carousel.css'
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player'


function LandingContainer(){

    return (
        <div id="home">            
            <div className="text-overlay">
                <div className="logo-holder">
                    <img src={logo} alt="" className="logo" />
                </div>                
                <Carousel 
                    showThumbs={false}
                    infiniteLoop
                    showArrows={true}
                    showStatus={false}
                >
                    <ReactPlayer width="100%" url='https://www.youtube.com/watch?v=2QN4Mv4YXww' controls={false} height={'480px'} />                    
                    <ReactPlayer width="100%" url='https://www.youtube.com/watch?v=qEs63jcUGQ0' controls={false} height={'480px'} />
                    <ReactPlayer width="100%" url='https://www.youtube.com/watch?v=rq7LHslIVsU' controls={false} height={'480px'} />
                    
                </Carousel>
            </div>
        </div>
    )
}

export default LandingContainer