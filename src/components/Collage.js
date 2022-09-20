import React from "react";
import "./Collage.scss";
const picture = [
  {
    url: "https://http2.mlstatic.com/D_NQ_NP_837206-MCO48473971895_122021-O.jpg",
  },
  {
    url: "https://i.pinimg.com/originals/8a/d5/c2/8ad5c288ccd29d7aa9e6d26bec36a87d.jpg",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6_Paoi9VKbOXqO_Zodgcuohc4I3MRjYwyOw&usqp=CAU",
  },
  {
    url: "https://i.pinimg.com/originals/8a/d5/c2/8ad5c288ccd29d7aa9e6d26bec36a87d.jpg",
  },
  
 
 
];
const Collage = () => {
  return (
    <div>
      <div className="media">
         <span>INSTAGRAM</span>
        <p>#ESPUFFI</p>
        <div className="grid-container">
          {picture.map((picture, index) => (
            <article key={index} className="pictures">
              <img className="grid-item" src={picture?.url} />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collage;