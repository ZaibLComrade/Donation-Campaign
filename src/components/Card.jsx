import PropTypes from "prop-types";

export default function Card({ card }) {
	const { 
		title, 
		image, 
		text_color, 
		category, 
		card_bg, 
		category_bg,
	} = card;

	return <div className="rounded-lg">
		<img src={ image } className="w-full rounded-t-lg object-fit" alt=""/>
		<div className="p-4 rounded-b-lg" 
			style={{ backgroundColor: card_bg, color: text_color }}>
			<p className="text-sm font-medium w-max py-1 px-[10px] rounded"
			style={{ backgroundColor: category_bg }}>{ category }</p>
			<h3 className="mt-2 text-xl font-semibold">{ title }</h3>
		</div>
	</div>
}

Card.propTypes = {
	card: PropTypes.object.isRequired,
}
