import logo from "../assets/logo.png";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
	const isHome = useLocation().pathname === '/';
	return <div className={`container ${isHome && "absolute left-1/2 -translate-x-1/2 top-0 "} z-10 flex flex-col items-center justify-between pt-12 pb-[80px] mx-auto md:flex-row gap-6`}>
			<div>
				<img src={ logo } alt=""/>
			</div>
			<div>
				<nav className="flex text-lg gap-6 md:gap-12">
					<NavLink to="/">Home</NavLink>
					<NavLink to="/donation">Donation</NavLink>
					<NavLink to="/statistic">Statistic</NavLink>
				</nav>
			</div>
		</div>

}
