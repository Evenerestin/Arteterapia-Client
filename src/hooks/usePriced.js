import { useMemo } from "react";
import galleryData from "../assets/galleryData";
import { artCategories } from "../config";

const usePriced = () => {
  const availableItems = useMemo(() => {
    return galleryData
      .map((category) => {
        const categoryData = artCategories.find(
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
