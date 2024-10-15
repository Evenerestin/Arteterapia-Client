// import axios from "axios";
import { useEffect, useState } from "react";
import mockData from "../assets/mockData";
import { BASE_URL } from "../config";

const useFetch = (useMockData = true) => {
  const [categories, setCategories] = useState([]); // Store all categories
  const [totalObjects, setTotalObjects] = useState(0); // Store total number of objects
  const [categoryCount, setCategoryCount] = useState(0); // Store total number of categories
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        if (useMockData) {
          const data = mockData;
          const totalCategories = data.length;

          const totalObjectsCount = data.reduce(
            (sum, category) => sum + category.children.length,
            0
          );

          // Set state with calculated values
          setCategories(data);
          setCategoryCount(totalCategories);
          setTotalObjects(totalObjectsCount);
        } else {
          // const response = await axios.get(`${BASE_URL}/albums`);
          // const data = response.data;
          const response = await fetch(`${BASE_URL}/albums`);

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const data = await response.json();

          if (!data || data.length === 0) {
            console.log("No data from API");
            return;
          }

          // Assuming `data` is an array of categories
          const totalCategories = data.length;
          const totalObjectsCount = data.reduce(
            (sum, category) => sum + category.children.length,
            0
          );

          // Set state with fetched and calculated data
          setCategories(data);
          setCategoryCount(totalCategories);
          setTotalObjects(totalObjectsCount);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [useMockData]);

  return { categories, totalObjects, categoryCount, loading, error };
};

export default useFetch;
