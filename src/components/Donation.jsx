import {useState} from "react";
import { useOutletContext, useLoaderData } from "react-router-dom";
import DonationCard from "./DonationCard";

export default function Donation() {
	const [seeAllEnabled, setSeeAllEnabled] = useState(false);
	const maxLen = 4;
	const {donations} = useOutletContext();
	const loadedDonations = useLoaderData();
	const filterDonations = loadedDonations.filter(elem => 
		donations.includes(elem.id)
	)
	const donationsMade = filterDonations.map(card => <DonationCard key={ card.id } card={ card }/>)
	
	const btn = <button onClick={ () => {setSeeAllEnabled(!seeAllEnabled)} } className="bg-[#009444] px-7 py-[14px] w-max mt-10 block text-white font-semibold rounded-lg mx-auto">See All</button>

		return <div> 
		<div className="mt-[80px] grid grid-cols-1 lg:grid-cols-2 gap-6">
			{ donationsMade.slice(0, !seeAllEnabled ? maxLen : filterDonations.length) }
		</div>
			<div>{!seeAllEnabled  && btn}</div>
	</div>
}
