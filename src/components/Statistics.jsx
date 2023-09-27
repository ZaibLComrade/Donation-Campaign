import { useOutletContext } from "react-router-dom"
import PieChartStats from "./PieChartStats"

export default function Statistics() {
	const { allCards, selectedCards } = useOutletContext();
	const data = [
		{ id: 1, name: 'Total Donation', value: allCards, color:"#FF444A" },
		{ id: 2, name: 'Your Donation', value: selectedCards, color:"#00C49F"},
	];
	
	return <div>
		<div className="h-[250px] md:h-[400px] lg:h-[500px] mt-10">
				<PieChartStats data={ data }/>
			
			<div className="md:flex space-y-2 md:space-y-0 mx-auto gap-14 w-max mt-10 md:mt-[70px]">
				{
					data.map(fracs => <div key={fracs.id} className="flex items-center gap-4">
						<p>{ fracs.name }</p>
						<div className="w-[100px] h-3" 
						style={ {backgroundColor: fracs.color} }></div>
					</div>)
				}
			</div>
		</div>
	</div>
}
