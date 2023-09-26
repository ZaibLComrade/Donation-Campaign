import { useState } from 'react'
import Banner from "./components/Banner";
import { Outlet, useLocation, useLoaderData } from "react-router-dom";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";

export default function Root() {
	const [donations, setDonations] = useState([]);
	const cards = useLoaderData();
	const location = useLocation();
	const isHome = location.pathname === "/";
	
	const handleDonation = newDonation => {
		console.log("Button works")
	}
	
	
	return <div className="px-4 mb-12 lg:px-0">
		<Navbar/>
		
		{isHome && 
		<div>
			<Banner/>
			<Cards data={ cards }/>
		</div>
		}
		<div className="container mx-auto">
			<Outlet context={ {donations, handleDonation} }/>
		</div>
	</div>
}
