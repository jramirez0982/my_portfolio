import logoB from "../assets/img/julian-ramirez.png";

export const Footer = () => (

	<footer style={{ backgroundColor: "#003366" }} className="text-white py-3">
		<div className="container">
			<div className="row text-center text-md-start align-items-center">


				<div className="col-md-3 mb-2 mb-md-0">
					<h5 className="mb-0 d-flex align-items-center">
						<img className="rounded-circle" src={logoB} alt="Logo" width={200} />
					</h5>
				</div>


				<div className="col-md-3 mb-2 mb-md-0">
					<h6 className="fw-bold"><i class="fa-solid fa-phone"></i>  Teléfono: +57 3113770557</h6>
					<p className="d-flex mb-0 justify-content center"><strong><i className="fa-solid fa-envelope"></i> Email</strong></p>
					<a className="d-flex justify-content start" target="blank" href="mailto: julian.ramirez2507@gmail.com">julian.ramirez2507@gmail.com</a>
				</div>

				<div className="col-md-3 mb-2 mb-md-0">
					<h6 className="fw-bold">Github</h6>
					<p className="d-flex mb-0 justify-content center"><strong><i className="fa-brands fa-github"></i> Perfil de Github</strong></p>
					<a className="d-flex justify-content start" target="blank" href="https://github.com/jramirez0982">jramirez0982/</a>

				</div>


				<div className="col-md-3">
					<h6 className="fw-bold">Redes</h6>
					<p className="d-flex mb-0 justify-content center"><strong><i class="fa-brands fa-linkedin"></i> Perfil de Linkedin</strong></p>
				<a className="d-flex justify-content start" target="blank" href="https://www.linkedin.com/in/julian-andres-ramirez-ramirez/">/in/julian-andres-ramirez-ramirez/</a>

				</div>
			</div>
		</div>
	</footer>
);


