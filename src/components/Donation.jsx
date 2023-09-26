import { useOutletContext, useLoaderData } from "react-router-dom";
import DonationCard from "./DonationCard";

export default function Donation() {
	const {donations} = useOutletContext();
	const loadedDonations = useLoaderData()
	const donationList = () => {
		const list = [];
		for(let i = 0; i < donations.length; i++) {
			const foundData = loadedDonations.find(objElem => objElem.id === donations[i]);
			list.push(foundData)
		}
	}
	console.log(donationList);
	return <div className="mt-[80px]">
		{

		}
	</div>
}
