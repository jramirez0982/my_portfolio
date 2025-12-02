import React from 'react'

export const HabilidadesCard = (props) => {
    return (
        <div className="card border border-1 border-secondary m-0 card-elevable mx-0 h-75 w-75">
            <div className="card-img-top mt-2 logo-contenedor">
                <img className="img-fluid logo-ajustado" src={props.logo} alt="Card image cap" />
            </div>
            <div className="d-flex logo-imagen card-body justify-content-center align-items-end p-0">
                <h5 className="card-title">{props.habilidad}</h5>
            </div>
        </div>

    )
}
