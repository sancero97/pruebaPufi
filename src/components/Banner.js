import React from 'react'
import "./Banner.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCaretDown, faCouch, faMattressPillow, faUmbrella,  } from '@fortawesome/free-solid-svg-icons'

function Banner() {

  return (
    <div>
        <div className="banner">
        <p className="title">Pufi</p>
        <div className='icons'>
        <button className= "couch"><FontAwesomeIcon icon={faCouch}></FontAwesomeIcon> </button>
        <button className= "umbrella"><FontAwesomeIcon icon={faUmbrella}></FontAwesomeIcon> </button>
        <button className= "shop"><FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon> </button>
        <button className= "nap"><FontAwesomeIcon icon={faMattressPillow}></FontAwesomeIcon> </button>
        </div>
        <p className= "account">MI CUENTA <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></p>
        <p className= "buy">MI COMPRA </p>
        <h1>ESTÁR CÓMODO,<br></br>NUNCA FUE TAN FÁCIL.</h1>
        <button className='shopping'>SHOP</button>
        </div>
    </div>
  );
}

export default Banner;