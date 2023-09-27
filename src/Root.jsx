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
	const [searchValue, setSearchValue] = useState("")
	const [donations, setDonations] = useState(getInitDonations());
	const cards = useLoaderData();
	const location = useLocation();
	const isHome = location.pathname === "/";
	const filterDonations = cards.filter(card => 
		donations.includes(card.id)
	)

	// For statistics
	const allCards = cards.length;
	const selectedCards = filterDonations.length;
	
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
	
	const handleSubmit = e => {
		e.preventDefault();
		setSearchValue(e.target.search.value.toLowerCase());
	}
	
	return <div className="px-4 mb-12 lg:px-0">
		<Navbar/>
		
		{isHome && 
		<div>
			<Banner handleSubmit={ handleSubmit }/>
			<Cards data={ cards } searchValue = { searchValue }/>
		</div>
		}
		<div className="container mx-auto">
			<Outlet context={ {
				filterDonations,
				handleDonation,
				allCards,
				selectedCards,
			} }/>
		</div>
	</div>
}
