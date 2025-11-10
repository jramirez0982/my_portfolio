import React from 'react'

export const HabilidadesCard = () => {
    return (
        <div className="card" style={{width: "20rem"}}>
            <div className="card-img-top"><img className="img-fluid" src="../assets/img/gallery/g1.jpg" alt="Card image cap" /></div>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p><a class="btn btn-primary btn-sm" href="#!">Go somewhere</a>
            </div>
        </div>

    )
}
