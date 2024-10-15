import { useEffect, useState } from "react";
import { Cell, Pie, PieChart } from "recharts";
import mockData from "../assets/mockData";
import { ArtCategories } from "../config";

const COLORS = [
  // "rgb(2, 15, 27)",
  "rgb(19, 45, 68)",
  // "rgb(36, 66, 92)",
  "rgb(44, 81, 113)",
  // "rgb(75, 102, 126)",
  "rgb(92, 125, 153)",
  "rgb(173, 196, 217)",
];

const GraphDisplay = () => {
  const [data, setData] = useState([]);
  const useMockData = "true";

  useEffect(() => {
    if (useMockData) {
      console.log(mockData);
      const dataArray = mockData.map((category) => {
        const foundCategory = ArtCategories.find(
          (artCategory) => artCategory.category === category.category
        );
        return {
          label: foundCategory ? foundCategory.label : category.category,
          category: category.category,
          count: category.children.length,
        };
      });
      const orderedArray = dataArray.sort((a, b) => b.count - a.count);
      setData(orderedArray);
      // setData(dataArray);
    } else {
      const fetchData = async () => {
        const response = await fetch("your-api-endpoint");
        const result = await response.json();
        setData(result.categories);
      };
      fetchData();
    }
  }, []);

  const maxCount = Math.max(...data.map((category) => category.count));

  return data.length === 0 ? (
    <p>Brak danych</p>
  ) : (
    <div className="flex">
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          dataKey="count"
          nameKey="category"
          cx="45%"
          cy="50%"
          // outerRadius={120}
          outerRadius={100}
          innerRadius={60}
          startAngle={140}
          endAngle={500}
          paddingAngle={0}
          strokeWidth={2}
          label
          labelLine={false}
        >
          {data.map((category, index) => (
            <Cell
              key={index}
              strokeWidth={(1 - category.count / maxCount) * 40}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
      </PieChart>
      <div className="graphLegend flexColumn">
        <h1>Legenda</h1>
        {data.map((category, index) => (
          <div key={index} className="legendItem flex">
            <span className={`box ${category.category}`} />
            <span className="name">
              {category.label}: {category.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GraphDisplay;
