import {PieChart, Pie, Cell} from "recharts"

const data = [
	{ name: 'Group A', value: 4 },
	{ name: 'Group B', value: 3 },
];

const COLORS = ["#FF444A", "#00C49F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text className="text-4xl font-bold" x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

export default function PieChartStats() {
	return <PieChart width={500} height={500}>
		<Pie 
			data={ data }
			cx={"50%"}
			cy={"50%"}
			labelLine={ false }
			outerRadius={ 230 }
			label={ renderCustomizedLabel }
			fill="#8884D8"
			dataKey="value"
		>
			{data.map((entry, index) =>
				<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
			)}
		</Pie>
	</PieChart>
}
