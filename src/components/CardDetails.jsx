import {useParams, useOutletContext} from "react-router-dom"
import { ToastContainer } from "react-toastify";

export default function CardDetails() {
	const { cards, handleDonation } = useOutletContext();
	const { cardId } = useParams();
	const cardIdInt = parseInt(cardId)
	const card = cards.find(curr => curr.id === cardIdInt);
	// const { title, image, description, price, id } = card;
	
	return <div>
		<div className="relative mt-10 md:mt-[80px]">
			<img className="w-full rounded-lg max-h-[700px] object-cover" src={ card.image } alt=""/>
			<div className="absolute bottom-0 w-full py-4 pl-4 rounded-b-lg md:py-10 md:pl-10 bg-custom-black/50">
				<button onClick={ () => handleDonation(card.id) } className="px-4 py-2 text-base font-semibold text-white border rounded md:text-xl md:px-6 md:py-4 border-custom-red hover:bg-transparent hover:text-custom-red bg-custom-red">Donate ${ card.price }</button>
			</div>
		</div>
		
		<div className="mt-14 space-y-6">
			<h2 className="md:text-[40px] text-3xl font-bold">{ card.title }</h2>
			<p className="opacity-70">{ card.description }</p>
		</div>
		<ToastContainer/>
	</div>
}
