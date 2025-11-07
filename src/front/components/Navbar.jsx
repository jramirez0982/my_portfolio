import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		
		<nav className="nav-difuminado navbar mx-5  fixed-top">
			<div className="d-flex container">

				<span className="navbar-brand mb-0 h1 fs-5 fst-italic text-wrap">Ing. Julián Andrés Ramírez R.</span>

				<div className="ml-auto">
					<ul className="nav">
						<Link to="/demo" style={{textDecoration: "none"}}>
						<li className="nav-item">
							<p className="nav-link active mb-0" aria-current="page">Perfil</p>
						</li>
						</Link>
						<Link to="/blog" style={{textDecoration: "none"}}>
						<li className="nav-item">
							<p className="nav-link active mb-0" aria-disable="false">Habilidades</p>
						</li>
						</Link>
						<Link to="/blog" style={{textDecoration: "none"}}>
						<li className="nav-item">
							<p className="nav-link active mb-0" aria-disable="false">Educación</p>
						</li>
						</Link>
						<Link to="/blog" style={{textDecoration: "none"}}>
						<li className="nav-item">
							<p className="nav-link active mb-0" aria-disable="false">Certificaciones</p>
						</li>
						</Link>
						<Link to="/blog" style={{textDecoration: "none"}}>
						<li className="nav-item">
							<p className="nav-link active mb-0" aria-disable="false">Experiencia</p>
						</li>
						</Link>
					</ul>
				</div>
			</div>
		</nav>
	);
};