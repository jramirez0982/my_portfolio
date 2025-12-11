import { Link } from "react-router-dom";

export const Navbar = () => {

	return (

		<nav className="nav-difuminado navbar navbar-expand-lg fixed-top mx-5" style={{ backgroundColor: "#003366" }}>
			<div className="container d-flex ">

				{/* Brand / Marca */}
				<span className="navbar-brand mb-0 h1 fs-5 fst-italic text-light text-wrap">Ing. Julián Andrés Ramírez R.</span>

				{/* 1. Botón Toggler para Móviles */}
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarMenu"
					aria-controls="navbarMenu"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				{/* 2. Contenedor Colapsable (Incluye la lista de enlaces) */}
				{/* Usamos ms-auto en lugar de ml-auto para alinear a la derecha en Bootstrap 5 */}
				<div className="collapse navbar-collapse" id="navbarMenu">
					<div className="ms-auto">
						{/* NOTA: He cambiado <p> por <a> en tus enlaces, ya que <p> no es semánticamente correcto para una navegación. */}
						<ul className="navbar-nav">

							<li className="nav-item">
								<a className="nav-link active mb-0 text-light" href="#perfil">Perfil</a>
							</li>
							
							<li className="nav-item">
								<a className="nav-link active mb-0 text-light" href="#educacion">Educación</a>
							</li> 
							
														
							<li className="nav-item">
								<a className="nav-link active mb-0 text-light" href="#habilidades">Habilidades</a>
							</li>
							

							<li className="nav-item">
								<a className="nav-link active mb-0 text-light" href="#certificaciones">Certificaciones</a>
							</li>
							
							<li className="nav-item">
								<a className="nav-link active mb-0 text-light" href="#experiencia">Experiencia</a>
							</li>

							<Link to="/blog" style={{ textDecoration: "none" }}>
								<li className="nav-item">
									<a className="nav-link active mb-0 text-light">Blog</a>
								</li>
							</Link>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};