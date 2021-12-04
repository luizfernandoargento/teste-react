/* eslint-disable import/no-anonymous-default-export */
import './Card.css'
import React from "react"

export default props =>
    <div className="Card" style={{borderColor:props.color || '#000'}}>
        <div className="Content">
            {props.children}
        </div>
        {/* Footer -> O rodapé de cada Card. */}
        {/* Entre duas chaves é quando queremos passar um objeto, não atributo. */}
        <div className="Footer" style={{backgroundColor:props.color || '#000'}}>
            {props.titulo}
        </div>
    </div>