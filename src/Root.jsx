import logo from "./assets/logo.png";
import Banner from "./components/Banner";
import { NavLink, Outlet, useLocation, useLoaderData } from "react-router-dom";
import Cards from "./components/Cards";

export default function Root() {
	const cards = useLoaderData();
	const location = useLocation();
	const isHome = location.pathname === "/";
	return <div className="">
		{/* Background Image */}
		{isHome && 
		<div>
			<Banner/>
			<Cards data={ cards }/>
		</div>
		}
		
		{/* Navbar */}
		<div className="container absolute top-0 z-10 flex items-center justify-between py-12 mx-auto left-1/2 -translate-x-1/2 ">
			<div>
				<img src={ logo } alt=""/>
			</div>
			<div>
				<nav className="flex text-lg gap-12">
					<NavLink to="/">Home</NavLink>
					<NavLink to="/donation">Donation</NavLink>
					<NavLink to="/statistic">Statistic</NavLink>
				</nav>
			</div>
		</div>
		<Outlet/>
	</div>
}
