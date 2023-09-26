import { useOutletContext, useLoaderData } from "react-router-dom";
import DonationCard from "./DonationCard";

export default function Donation() {
	const {donations} = useOutletContext();
	const loadedDonations = useLoaderData()
	return <div className="mt-[80px] grid grid-cols-1 lg:grid-cols-2 gap-6">
		{/*
		loadedDonations.map(card => <DonationCard key={ card.id } card={ card }/>)
		*/}
	</div>
}
