import { useState, } from 'react'
import Banner from "./components/Banner";
import { Outlet, useLocation, useLoaderData } from "react-router-dom";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";

export default function Root() {
	const initDonations = localStorage.getItem("donationId");
	const initDonationsArray = initDonations.split(',');
	const initDonationsIntArray = initDonationsArray.map(elem => JSON.parse(elem));
	const [donations, setDonations] = useState(initDonationsIntArray);
	const cards = useLoaderData();
	const location = useLocation();
	const isHome = location.pathname === "/";
	
	const handleDonation = newDonation => {
		const newDonationArray = [...donations, newDonation];
		console.log(newDonationArray)
		localStorage.setItem("donationId", newDonationArray)
		setDonations(newDonationArray);
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
