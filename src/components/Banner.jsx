import banner from "../assets/banner.jpeg";
export default function Banner() {
	return <section>
				<div className="relative top-0 z-0 h-full">
					<img src={ banner } className="object-cover opacity-5 w-screen h-[600px]" alt=""/>
					<div className="absolute w-full text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
						<h1 className="text-3xl font-bold lg:text-5xl md:text-4xl">I grow by helping people in need</h1>
						<form className="mx-auto mt-10 rounded-lg w-max">
							<input type="search" name="search" placeholder="Search here..." className="block py-2 pl-2 border-2 pr-auto md:pr-[360px] rounded-l-lg rounded-r-lg md:inline md:rounded-r-none md:py-4 md:pl-4 pr-auto md:border-r-transparent"/>
							<input type="submit" value="Search" className="block px-5 py-2 mx-auto mt-4 font-semibold text-white border-2 rounded-lg cursor-pointer md:py-4 md:inline md:rounded-l-none md:px-7 bg-custom-red hover:bg-transparent hover:text-custom-red border-custom-red"/>
						</form>
					</div>
				</div>
			</section>
}
