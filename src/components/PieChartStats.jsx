import {PieChart, Pie, Cell, ResponsiveContainer} from "recharts"
import PropTypes from "prop-types"

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.4;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
  <text className="text-xl font-bold md:text-3xl lg:text-4xl" x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

export default function PieChartStats({ data }) {
	return <ResponsiveContainer>
	<PieChart className="mx-auto" width="100%" height="100%">
		<Pie 
			data={ data }
			cx={"50%"}
			cy={"50%"}
			labelLine={ false }
			outerRadius={ "100%" }
			label={ renderCustomizedLabel }
			fill="#8884D8"
			dataKey="value"
		>
			{data.map((entry, index) =>
				<Cell key={`cell-${index}`} fill={entry.color}/>
			)}
		</Pie>
	</PieChart>
	</ResponsiveContainer>
}

PieChartStats.propTypes = {
	data: PropTypes.array,
}
