import PropTypes from "prop-types"


export const EstudiosCard = (props) => {
    return (
        
        <div className="d-flex border border-1 border-secondary card mb-3 card-elevable w-75 mx-auto">
            <div className="row g-0 align-items-center">
                <div className="col-md-4">
                    <img src={props.logo} className="img-fluid rounded-start m-2 p-2" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body ">
                        <h3 className="card-title fst-italic">{props.universidad}</h3>
                        <h5 className="card-text">{props.titulo}</h5>
                        <p className="card-text">{props.lugar}</p>
                        <p className="card-text"><small className="text-body-secondary">{props.fecha}</small></p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}