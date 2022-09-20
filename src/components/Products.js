import React from 'react'
import "./Products.scss";

const product=[
    {
      id:"1",
      name:"Pufi RAIN",
      imageUrl:"https://img.freepik.com/foto-gratis/chica-guapa-rubia-festival-brasileno-frevo-mirando-paraguas-arco-iris_140725-165359.jpg?w=900&t=st=1663622885~exp=1663623485~hmac=471dfbfbc083c2441e0b39e2af5080eb926bf407d51212998447837899d5d8c9",
      productUrl:"https://thumbs.dreamstime.com/b/paraguas-del-arco-iris-en-el-fondo-blanco-21468020.jpg",
      description:"Descripción del producto. Este es un texto simulado",
  
    },
    {
      id:"2",
      name:"Pufi PUFF",
      imageUrl:"https://i.ebayimg.com/images/g/6mkAAOSw74VZjrSn/s-l500.jpg",
      productUrl:"https://http2.mlstatic.com/D_NQ_NP_901985-MCO48473989779_122021-Y.webp",
      description:"Descripción del producto. Este es un texto simulado",
  
    },
    {
      id:"3",
      name:"Pufi CART",
      imageUrl:"https://img.freepik.com/foto-gratis/variedad-frutas-pomelo-kiwi-platano-naranja-bolsa-lino-rosa-sobre-fondo-gris-vista-superior-espacio_501050-479.jpg?w=900&t=st=1663623863~exp=1663624463~hmac=52d72fc261c07b0ee6e5f37f4b7d5049605f195ec329af22ae1cd91190a89af9",
      productUrl:"https://img.freepik.com/vector-premium/coleccion-bolsas-compra-reutilizables-azul-blanco-aislado-sobre-fondo-blanco_212889-4963.jpg",
      description:"Descripción del producto. Este es un texto simulado",
  
    },
    {
      id:"4",
      name:"Pufi NAP",
      imageUrl:"https://st4.depositphotos.com/1003989/19892/i/600/depositphotos_198921260-stock-photo-smiling-beautiful-woman-with-travel.jpg",
      productUrl:"https://img.freepik.com/vector-gratis/conjunto-iconos-vectoriales-realistas-almohadas-viaje-cuello-vista-frontal-color-gris-azul-rojo_134830-1340.jpg?w=1060&t=st=1663624251~exp=1663624851~hmac=230eedf3ca4eb7bc20bf712f17747e2fb2f1dab6ec1c45d9f3c0de8c3895b91b",
      description:"Descripción del producto. Este es un texto simulado",
     

  
    }
  ]

const Products = () => {
  
  return (
   
    <div>
      {
        product.map((product, index)=>(
          <article key={index} className= "products">
          <div  className = "articleImg">
            <img  src={product?.imageUrl} />
          </div>
          
          <div className="product">
          
              <img style={{maxHeight:"100px",margin:"auto"}} src={product?.productUrl} />
              <h3>{product?.name}</h3>
              <p>{product?.description}</p>
              
            </div>
           </article>
            
        ))
      }
          
      </div>
      
    
  )
}
export default Products;