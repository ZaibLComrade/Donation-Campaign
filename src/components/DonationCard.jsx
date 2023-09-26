import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export default function DonationCard({ card }) {
	const { title, image, card_bg, category, category_bg, text_color, price, id } = card
	return <div className="md:flex">
		<div className="rounded-l-lg shrink-0">
			<img className="md:w-[220px] rounded-t-lg md:rounded-l-lg md:rounded-r-none h-full object-cover" src={ image } alt=""/>
		</div>
		<div className="w-full py-6 pl-6 rounded-b-lg md:rounded-l-none md:rounded-r-lg" 
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
			<button to={`/${id}`} className="mt-5 px-4 py-[9px] rounded text-white text-lg font-semibold"
				style= { {backgroundColor: text_color} }
			><Link to={ `/${id}` }>View Details</Link></button>
				
		</div>
	</div>
}

DonationCard.propTypes = {
	card: PropTypes.object.isRequired,
}
