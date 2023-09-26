import PieChartStats from "./PieChartStats"

export default function Statistics() {
	return <div className="flex items-center mt-[50px] justify-center h-screen">
		<div className="w-max h-max">
			<PieChartStats/>
			
			<div className="flex mx-auto gap-14 w-max mt-[70px]">
				<div className="flex items-center gap-4">
					<p>Your Donation</p>
					<div className="w-[100px] h-3 bg-green-500"></div>
				</div>
				<div className="flex items-center gap-4">
					<p>Total Donation</p>
					<div className="w-[100px] h-3 bg-red-500"></div>
				</div>
			</div>
		</div>
	</div>
}
