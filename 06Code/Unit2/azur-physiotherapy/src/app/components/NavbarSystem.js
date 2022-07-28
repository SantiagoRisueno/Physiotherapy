import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
	render() {
		return (
			<React.Fragment>
				<nav
					className="navbar navbar-expand-lg navbar-light  bg-primary"
					id="ftco-navbar"
				>
					<div className="container">
						<Link to="/report" className="text-light align-items-center">
							<span  className="navbar-brand text-light">Azur Fisioterapia</span>
							<span  className=" fw-light text-light">
							ADMIN
							</span>
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
								<li className="nav-item cta">
									<Link
										to="/	"
										className="nav-link text-light"
										data-toggle="modal"
										data-target="#modalRequest"
									>
										<span>Salir</span>
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
