import React, { useContext, useEffect } from "react";

import { Context } from "../store/appContext.js"

import "../../styles/templates/semiformal-vertical-template.css";

export const SemiFormalVerticalTemplate = () => {

    const { store, actions } = useContext(Context)

    useEffect(()=>{
        actions.getInfoPost()  
    },[])

    const { auxColor, contactData, identity, mainColor, mainText, price, secondaryColor, secondaryText, cta, logo } = store.infoPost

    return (
    <div id="vsft-wrapper">
        <div id="vsft" className="vsft" style={{backgroundColor: `${auxColor}`}}>
            <div id="vsft-main-wrapper" style={{ backgroundColor: `${secondaryColor}` }}>
                <div id="vsft-top-margin" style={{ backgroundColor: `${mainColor}` }}>
                    <div id="vsft-top-margin-accent" style={{ backgroundColor: `${secondaryColor}`}}></div>
                </div>
                <div id="vsft-main-inner-wrapper" style={{ backgroundColor: `${mainColor}`}}>
                    <div id="vsft-offer-tag" style={{ backgroundColor: `${auxColor}`, color: `${secondaryColor}` }}>{price}</div>
                    <div id="vsft-photo-wrapper">
                        <img src={localStorage.mainImage} />
                    </div>
                </div>
            </div>
            <div id="vsft-logo-tag">
                <img src={localStorage.logo} />
            </div>
            <div id="vsft-right-margin" style={{ backgroundColor: `${mainColor}`, color: `${secondaryColor}`, wordSpacing:"5px" }}>
                <div id="vsft-identity">{identity}</div>
            </div>
            <div id="vsft-secondary-wrapper">
                <div id="vsft-h1" style={{ color: `${secondaryColor}` }}>{mainText}</div>
                <p id="vsft-secondary-text" style={{color: `${secondaryColor}`}}>{secondaryText}</p>
                <div id="vsft-cta-container">
                    <div id="vsft-cta" style={{ backgroundColor: `${mainColor}`}}>
                        <span id="vsft-cta" style={{ color: `${secondaryColor}` }}>{cta}</span>
                    </div>
                    <div id="vsft-cta-contact-data">
                        <p style={{ color: `${secondaryColor}`}}>{contactData}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}