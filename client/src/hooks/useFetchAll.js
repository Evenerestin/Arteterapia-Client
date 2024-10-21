import { useEffect, useState } from "react";
import mockData from "../assets/mockData";
import { ArtCategories, BASE_URL } from "../config";

const useFetchAll = (useMockData = true) => {
  const [data, setData] = useState([]);
  const [totalObjects, setTotalObjects] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let fetchedData;

        if (useMockData) {
          fetchedData = mockData;
        } else {
          const response = await fetch(`${BASE_URL}/albums`);
          fetchedData = await response.json();

          if (!fetchedData || fetchedData.length === 0) {
            console.log("No data from API");
            return;
          }
        }

        const enrichedData = fetchedData.map((category) => {
          const labelData = ArtCategories.find(
            (label) => label.category === category.category
          );
          const pathData = ArtCategories.find(
            (path) => path.category === category.category
          );
          return {
            ...category,
            label: labelData ? labelData.label : "Unknown",
            path: pathData ? pathData.path : "Unknown",
          };
        });

        const totalObjectsCount = enrichedData.reduce(
          (sum, category) => sum + category.children.length,
          0
        );

        setData(enrichedData);
        setTotalObjects(totalObjectsCount);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [useMockData]);

  return { data, totalObjects, loading, error };
};

export default useFetchAll;
