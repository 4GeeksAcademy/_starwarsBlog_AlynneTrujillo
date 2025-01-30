import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-expand-lg bg-light">
			<div className="container-fluid">
				<Link to="/">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" alt="logo" width="100px" height="50px" />
				</Link>
				<button className="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
			</div>
			<div className="collapse navbar-collapse bg-primary" id="navbarSupportedContent">
				<ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
					<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</a>
						<ul className="dropdown-menu">
							<ul className="dropdown-fav">
								{store.favorites.length === 0 ?
									<li className="fav">
										<p className="dropdown-item">No Favorites yet :(</p>
									</li> :
									store.favorites.map((fav, index) => {
										console.log(store.favorites)
										return (
											<li className="dropdown-fav" key={index}>
												<div className="col-9">
													<a className="dropdown-fav">{fav.index}</a>
												</div>
												<div className="col-3">
													<div>
														<i
															className="delete"
															onClick={() => actions.deleteFavorite(fav)}
														>
														</i>
													</div>
												</div>
											</li>
										)
									})}
							</ul>
						</ul>
					</li>
				</ul>
			</div>
		</nav>
	);
};


// drop down needs to be fixed to show within a large screen
// need to connect to store?
// add trash can button icon to delete 