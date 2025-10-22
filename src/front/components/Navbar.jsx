import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="nav-difuminado navbar mx-5">
			<div className="container ">

				<span className="navbar-brand mb-0 h1 fs-4 fst-italic text-wrap">Ing. Julián Andrés Ramírez R.</span>

				<div className="ml-auto">
					<ul className="nav">
						<Link to="/demo" style={{textDecoration: "none"}}>
						<li className="nav-item">
							<p className="nav-link active mb-0" aria-current="page">Curriculum</p>
						</li>
						</Link>
						<Link to="/blog" style={{textDecoration: "none"}}>
						<li className="nav-item">
							<p className="nav-link active mb-0" aria-disable="false">My blog</p>
						</li>
						</Link>
					</ul>
				</div>
			</div>
		</nav>
	);
};