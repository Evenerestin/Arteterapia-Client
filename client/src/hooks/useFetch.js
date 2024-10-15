import axios from "axios";
import { useEffect, useState } from "react";
import mockData from "../assets/mockData";
import { BASE_URL } from "../config";

const useFetch = (category, useMockData = true) => {
  // const useFetch = (category) => {
  const [objects, setObjects] = useState([]);
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchObjects = async () => {
      try {
        if (useMockData) {
          const mockObjects =
            mockData.find((item) => item.category === category)?.children || [];
          setObjects(mockObjects);

          //3rd method
          const mockOrder =
            mockData.find((item) => item.category === category)?.order || [];

          const allObjectsId = mockObjects.map((obj) => obj.id);
          const definedOrder = new Set(mockOrder);
          const undefinedIds = allObjectsId.filter(
            (id) => !definedOrder.has(id)
          );
          
          const finalOrder = [...mockOrder, ...undefinedIds];
          setOrder(finalOrder);

          //2nd method
          //   const mockOrder =
          //     mockData.find((item) => item.category === category)?.order || [];

          //   if (mockOrder.length > 0) {
          //     setOrder(mockOrder); // Use the order array from mock data
          //   } else {
          //     setOrder(mockObjects.map((obj) => obj.id)); // Default to object ids if no order array is present
          //   }
          //1st method
          //   setOrder(mockObjects.map((obj) => obj.id));
        } else {
          const response = await axios.get(
            `${BASE_URL}/albums?type=${category}`
          );
          if (response.data === null || response.data.length === 0) {
            console.log("No data from API");
          } else {
            setObjects(response.data.children);
            setOrder(response.data.order);
          }
        }
        //   try {
        //     const response = await axios.get(`${BASE_URL}/albums?type=${category}`);
        //     if (response.data === null || response.data.length === 0) {
        //       console.log("No data from API");
        //     } else {
        //       setObjects(response.data.children); // Assuming `children` is where the objects are stored
        //       setOrder(response.data.order); // Assuming `order` is an array of ids for ordering
        //     }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchObjects();
  }, [category, useMockData]);
  //   }, [category]);

  return { objects, order, loading, error };
};

export default useFetch;
