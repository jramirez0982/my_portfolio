import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="nav-difuminado navbar mx-5">
			<div className="container ">

				<span className="navbar-brand mb-0 h1 fs-4 fst-italic">Ing. Julián Andrés Ramírez R.</span>

				<div className="ml-auto">
					<ul class="nav">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">Active</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Link</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Link</a>
						</li>
						<li class="nav-item">
							<a class="nav-link disabled" aria-disabled="true">Disabled</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};