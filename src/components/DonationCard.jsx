import PropTypes from "prop-types";

export default function DonationCard({ card }) {
	const { title, image, card_bg, category, category_bg, text_color, price } = card
	return <div className="md:flex">
		<div className="rounded-l-lg shrink-0">
			<img className="w-[220px] rounded-l-lg h-full object-cover" src={ image } alt=""/>
		</div>
		<div className="w-full py-6 pl-6 rounded-r-lg" 
			style={ {
				backgroundColor: card_bg,
			} }>

			<p className="w-max px-[10px] py-1 rounded" 
				style={ {
					backgroundColor: category_bg,
					color: text_color
				} }
			>{ category }</p>
			
			<h4 className="mt-2 text-2xl font-semibold">{ title }</h4>
			<p className="mt-2 font-semibold" style={ {color: text_color} }>${ price }</p>
			<button className="mt-5 px-4 py-[9px] rounded text-white text-lg font-semibold"
				style= { {backgroundColor: text_color} }
			>View Details</button>
		</div>
	</div>
}

DonationCard.propTypes = {
	card: PropTypes.object.isRequired,
}
