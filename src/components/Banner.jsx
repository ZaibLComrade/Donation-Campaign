import banner from "../assets/banner.jpeg";
export default function Banner() {
	return <section className="">
				<div className="relative top-0 z-0 h-full">
					<img src={ banner } className="object-cover opacity-5 w-screen h-[600px]" alt=""/>
					<div className="absolute w-full text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
						<h1 className="text-5xl font-bold">I grow by helping people in need</h1>
						<form className="mx-auto mt-10 rounded-lg w-max">
							<input type="search" name="search" placeholder="Search here..." className="py-4 pl-4 pr-[340px] rounded-l-lg border-2 border-r-transparent"/>
							<input type="submit" value="Search" className="py-4 font-semibold text-white border-2 rounded-r-lg cursor-pointer px-7 bg-custom-red hover:bg-transparent hover:text-custom-red border-custom-red"/>
						</form>
					</div>
				</div>
			</section>
}
