import PropTypes from "prop-types";
import Card from "./Card";

export default function Cards({ data, searchValue }) {
	const filteredData = searchValue ? 
		data.filter(entry => entry.category.toLowerCase() === searchValue):
		[...data];
	return <div>
		{
		filteredData.length ?
			<div className="container mx-auto mt-8 grid gap-6 md:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:mt-[100px]">
			{
				filteredData.map(card => 
					<Card key={ card.id } card={ card }/>
				)
			}
		</div>
		
		:<div className="mx-auto mt-20 text-xl text-5xl font-bold text-center md:text-3xl opacity-30">{`"${searchValue}"`} category not found</div>
		}
	</div> 
}

Cards.propTypes = {
	data: PropTypes.array.isRequired,
	searchValue: PropTypes.string,
}
