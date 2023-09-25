import PropTypes from "prop-types";
import Card from "./Card";

export default function Cards({ data }) {
	return <div className="container mx-auto grid gap-6 md:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 mt-[100px]">
		{
			data.map(card => <Card key={ card.id } card={ card }/>)
		}
	</div> 
}

Cards.propTypes = {
	data: PropTypes.array.isRequired,
}
