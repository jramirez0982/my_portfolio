import PropTypes from "prop-types"


export const EstudiosCard = (props) => {
    return (
        
        <div className="d-flex card mb-3 card-elevable w-75 mx-auto">
            <div className="row g-0 align-items-center">
                <div className="col-md-4">
                    <img src={props.logo} className="img-fluid rounded-start m-2 p-2" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body ">
                        <h5 className="card-title">{props.universidad}</h5>
                        <p className="card-text">{props.titulo}</p>
                        <p className="card-text"><small className="">{props.lugar}</small></p>
                        <p className="card-text"><small className="text-body-secondary">{props.fecha}</small></p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}