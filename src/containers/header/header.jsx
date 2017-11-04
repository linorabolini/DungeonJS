import React from 'react'
import './header.sass'

function Header(props) {
    let src = props.pharo || "https://www.tenvinilo.com/vinilos-decorativos/img/preview/vinilo-decorativo-faro-marinero-5538.png"
    return (
        <div className="Header">
            <img className="Pharo" src={src}></img>
            <div className="Water"></div>
        </div>
    )
}

export default Header
