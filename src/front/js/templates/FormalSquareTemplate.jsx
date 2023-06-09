import React, { useContext, useEffect } from "react";
import "../../styles/templates/formal-square-template.css";
import { Context } from "../store/appContext";



export const FormalSquareTemplate = () => {
   
  const { store, actions } = useContext(Context)

  useEffect(()=>{
    actions.getInfoPost()  
},[])

const { auxColor, contactData, identity, mainColor, mainText, price, secondaryColor, secondaryText, cta, logo } = store.infoPost


      return (
      <>
      <div className="container-fluid CuadroQueContiene" >
        <div className="CuadradoExterior" id="vsft">
          <img className="logoPFF" src={localStorage.logo} alt=""/>
          <div className="border-bottom divTextoPrincipal">
            <h3  className="TextoPrincipal text-uppercase font-weight-bold">{mainText}</h3>
          </div>
          <h5 className="TextoSecundario">{secondaryText}</h5>
          <div className="rounded-circle circulo overflow-hidden" style={{backgroundColor:`${mainColor}`}}></div>
          <div className="CuadradoBorde border border-5" style={{borderColor:`${auxColor}`}}></div>
          <div className="CuadradoColor2" style={{backgroundColor:`${secondaryColor}`}}></div>
          <img src={localStorage.mainImage} alt="" className="ImagenCargada shadow-lg p-3 mb-5 bg-body-tertiary rounded"style={{borderColor:`${auxColor}`}}/>
          <div className="oferta p-2 text-center text-light"><p>{price}</p></div>
          <h3 className="TextoPrincipalb text-uppercase font-weight-bold text-right fw-bold align-bottom">{identity}</h3>
          <h3 className="ContactData text-uppercase font-weight-bold text-right ">{contactData}</h3>
          <div className="Cuadricula1" style={{backgroundColor:`${auxColor}`}}></div>
          <div className="Cuadricula2" style={{backgroundColor:`${auxColor}`}}></div>
        </div>
        <div className="recorte1"></div>
        <div className="recorte2"></div>
      </div>
    </>
    )
};
