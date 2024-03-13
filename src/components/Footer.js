import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

function Footer(){

    return(
        <div className="footerHolder">
            <p>Suivez nous sur :</p>
            <a href="https://www.facebook.com/profile.php?id=100068903702013" className="iconsFollowUs iconFacebook"><FontAwesomeIcon className="icon" icon={faFacebook} /></a>
            <a href="https://www.youtube.com/@bachibouzouk4656" className="iconsFollowUs iconYoutube"><FontAwesomeIcon className="icon" icon={faYoutube} /></a>
        </div>
    )
}

export default Footer