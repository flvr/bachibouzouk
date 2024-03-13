import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

function ContactUs(){
    //const [inputValue, handleInput] = useState('')
    //const [subjectValue, handleSubject] = useState('')
    const [message, handleMailAddressMessage] = useState('')

    function checkSenderMailAddress(inputValue) {

        const specialCharactersRegex = /[;,?!$*+-]/;

		if ((!inputValue.includes('@')) && (inputValue.trim().length !== 0)) {
			handleMailAddressMessage("Sans @, ceci n'est un email valide 😥")
		}
        else if (specialCharactersRegex.test(inputValue)) {
			handleMailAddressMessage("Votre adresse email contient un caractère invalide 😥")
		}else{
            handleMailAddressMessage("")
        }
	}

    function handleSubmit(e){
        e.preventDefault()
        console.log(e)
        noEmptyPost(e)
    }

    function noEmptyPost(inputValue){
        if (!inputValue.trim().length === 0) {
			alert("😥 Le sujet de votre mail ne peut pas être vide")
		}
    }

    /*function checkInputData(){

    }*/
/*
    onChange={(e) => handleInput(e.target.value)}
    value={inputValue}

    onChange={handleInput}
    value={subjectValue}
*/
    return (
        <div id="contact" className="greyHolder">
            <form className="contactFormHolder">
                <h2>Contact</h2>
                Toulouse<br />
                <FontAwesomeIcon icon={faPhone} /> +00 (0)6 02 06 02 06<br />
                <p className="w3-opacity w3-center">
                    <FontAwesomeIcon icon={faEnvelope} />
                    &nbsp;
                    <i>Par mail</i>
                </p>
                <input type="text" name="email" 
                    placeholder='Votre @dresse e-mail'
                    onBlur={(e) => checkSenderMailAddress(e.target.value)} />
                    <div>{message}</div>
                <input type="text" name="mailSubject" 
                    placeholder='Sujet de votre mail'
                    onBlur={(e) => noEmptyPost(e.target.value)} />
                <textarea name="msg" onBlur={(e) => noEmptyPost(e.target.value)}>

                </textarea>
                <button className="w3-button w3-black" onClick={handleSubmit} disabled="disabled">Envoyer</button>
            </form>
        </div>
    )
}

export default ContactUs
