import {useParams, useLoaderData} from "react-router-dom"

export default function CardDetails() {
	const cardData = useLoaderData();
	const { cardId } = useParams();
	const cardIdInt = parseInt(cardId)
	const card = cardData.find(curr => curr.id === cardIdInt);
	const { title, image, description, price } = card
	
	return <div>
		<div className="relative">
			<img className="w-full rounded-lg max-h-[700px] object-cover" src={ image } alt=""/>
			<div className="absolute bottom-0 w-full py-10 pl-10 rounded-b-lg bg-custom-black/50">
				<button className="px-6 py-4 text-xl font-semibold text-white border rounded border-custom-red hover:bg-transparent hover:text-custom-red bg-custom-red">Donate ${ price }</button>
			</div>
		</div>
		
		<div className="mt-14 space-y-6">
			<h2 className="text-[40px] font-bold">{ title }</h2>
			<p className="opacity-70">{ description }</p>
		</div>
	</div>
}
