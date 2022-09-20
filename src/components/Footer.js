import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode, faShield } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <div ClassName="footer">
        <div className="footerList">
          <p>Pufi</p>
          <ul>
            <li>PUFI RAIN</li>
            <li>PUFI PUFF</li>
            <li>PUFI CART</li>
            <li>PUFI NAP</li>
          </ul>
          <ul>
            <li>Contacto</li>
            <li>AYUDA</li>
            <li>CÓMO COMPRAR</li>
            <li>TÉRMINOS Y CONDICIONES</li>
          </ul>
          <ul>
            <li>COMRA 100% SEGURA</li>
            <li className="footerIcons">
              <FontAwesomeIcon icon={faQrcode}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faShield}></FontAwesomeIcon>
            </li>
            <li>COMPRA CON LA GARANTIA DE PUFI</li>
          </ul>
          <ul>
              <li className="footerIcons"><p>SEGUINOS EN</p>
              <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </li>
          </ul>
        </div>
        <div>
            <p className ="copyright"> PUFFI copyright 2017-Todos los derechos reservados</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;