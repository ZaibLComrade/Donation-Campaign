import { useState, } from 'react'
import Banner from "./components/Banner";
import { Outlet, useLocation, useLoaderData } from "react-router-dom";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import getInitDonations from './utilities/getInitDonations';

const notifyAdded = () => toast.info('Donation added successfully', {
	position: "bottom-right",
	autoClose: 2000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: "colored",
});

const notifyAlreadyAdded = () => toast.error('Donation already made', {
	position: "bottom-right",
	autoClose: 2000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: "colored",
});

export default function Root() {
	const [donations, setDonations] = useState(getInitDonations());
	const cards = useLoaderData();
	const location = useLocation();
	const isHome = location.pathname === "/";
	
	const handleDonation = newDonation => {
		if(donations.includes(newDonation)) {
			notifyAlreadyAdded();
			return;
		}
		const newDonationArray = [...donations, newDonation];
		localStorage.setItem("donationId", newDonationArray)
		setDonations(newDonationArray);
		notifyAdded()
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
