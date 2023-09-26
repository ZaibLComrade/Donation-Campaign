export default function getInitDonations() {
	const initDonations = localStorage.getItem("donationId");
	let initDonationsArray = [];
	if(initDonations) initDonationsArray = initDonations.split(',');
	const initDonationsIntArray = initDonationsArray.map(elem => JSON.parse(elem));
	return initDonationsIntArray;
}
