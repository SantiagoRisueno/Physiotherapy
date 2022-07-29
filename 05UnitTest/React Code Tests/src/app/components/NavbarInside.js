import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
	render() {
		return (
			<React.Fragment>
				<nav
					className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
					id="ftco-navbar"
				>
					<div className="container">
						<Link to="/" className="navbar-brand">
							Azur<span> Fisioterapia</span>
						</Link>
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#ftco-nav"
							aria-controls="ftco-nav"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="oi oi-menu"></span> Menu
						</button>

						<div className="collapse navbar-collapse" id="ftco-nav">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item active">
									<Link to="/about" className="nav-link">
										About
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/services" className="nav-link">
										Servicios
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/personal" className="nav-link">
										Empleados
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/blog" className="nav-link">
										Blog
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/contact" className="nav-link">
										Contacto
									</Link>
								</li>
								<li className="nav-item cta">
									<Link
										to="/login"
										className="nav-link"
										data-toggle="modal"
										data-target="#modalRequest"
									>
										<span>Ingresar</span>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</React.Fragment>
		);
	}
}
export default Navbar;
