import PropTypes from "prop-types";
import { Link } from "react-router-dom"

export default function Card({ card }) {
	const { 
		id,
		title, 
		image, 
		text_color, 
		category, 
		card_bg, 
		category_bg,
	} = card;

	return <Link to={`/details/${id}`} className="rounded-lg">
		<img src={ image } className="object-cover w-full rounded-t-lg md:h-[194px]" alt=""/>
		<div className="p-4 rounded-b-lg" 
			style={{ backgroundColor: card_bg, color: text_color }}>
			<p className="text-sm font-medium w-max py-1 px-[10px] rounded"
			style={{ backgroundColor: category_bg }}>{ category }</p>
			<h3 className="mt-2 text-xl font-semibold">{ title }</h3>
		</div>
	</Link>
}

Card.propTypes = {
	card: PropTypes.object.isRequired,
}
