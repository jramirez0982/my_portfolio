import logoB from "../assets/img/julian-ramirez.png";

export const Footer = () => (

	<footer style={{ backgroundColor: "#003366" }} className="text-white py-4">
  <div className="container">
    
    <div className="row text-center text-lg-start align-items-center g-4">

      
      <div className="col-12 col-sm-6 col-lg-3">
        <div className="d-flex justify-content-center justify-content-lg-start">
          <img className="rounded-circle" src={logoB} alt="Logo" style={{ maxWidth: "100%", height: "auto" }} width={200} />
        </div>
      </div>

      
      <div className="col-12 col-sm-6 col-lg-3">
        <h6 className="fw-bold"><i className="fa-solid fa-phone"></i> Teléfono: +57 3113770557</h6>
        <p className="mb-0"><strong><i className="fa-solid fa-envelope"></i> Email</strong></p>
        <a className="text-white text-decoration-none" target="_blank" rel="noreferrer" href="mailto:julian.ramirez2507@gmail.com">
          julian.ramirez2507@gmail.com
        </a>
      </div>

      
      <div className="col-12 col-sm-6 col-lg-3">
        <h6 className="fw-bold">Github</h6>
        <p className="mb-0"><strong><i className="fa-brands fa-github"></i> Perfil</strong></p>
        <a className="text-white text-decoration-none" target="_blank" rel="noreferrer" href="https://github.com/jramirez0982">
          jramirez0982/
        </a>
      </div>

      
      <div className="col-12 col-sm-6 col-lg-3">
        <h6 className="fw-bold">Redes</h6>
        <p className="mb-0"><strong><i className="fa-brands fa-linkedin"></i> LinkedIn</strong></p>
        <a className="text-white text-decoration-none" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/julian-andres-ramirez-ramirez/">
          /in/julian-andres-ramirez-ramirez/
        </a>
      </div>

    </div>
  </div>
</footer>
);


