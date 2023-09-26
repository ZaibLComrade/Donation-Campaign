import PropTypes from "prop-types";

export default function DonationCard({ card }) {
	const { title, image } = card
	return <div className="">
		<img src={ image } alt=""/>
	</div>
}

DonationCard.propTypes = {
	card: PropTypes.object.isRequired,
}
