import { useMemo } from "react";
import mockData from "../assets/mockData";
import { ArtCategories } from "../config";

const usePriced = () => {
  const availableItems = useMemo(() => {
    return mockData
      .map((category) => {
        const categoryData = ArtCategories.find(
          (item) => item.category === category.category
        );
        const label = categoryData ? categoryData.label : "Unknown Category";

        const pricedItems = category.children.filter(
          (object) => object.price && object.price.length > 0
        );

        if (pricedItems.length > 0) {
          return {
            label,
            pricedItems,
          };
        }
        return null;
      })
      .filter(Boolean);
  }, []);

  return availableItems;
};

export default usePriced;
