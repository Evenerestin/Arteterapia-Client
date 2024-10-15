import { useMemo } from "react";

const useOrder = (objects = [], order = []) => {
  const orderedObjects = useMemo(() => {
    if (!objects.length || !order.length) return [];
    const objectMap = objects.reduce((map, obj) => {
      map[obj.id] = obj;
      return map;
    }, {});

    return order
      .map((id) => objectMap[id])
      .filter((item) => item !== undefined);
  }, [objects, order]); 

  return orderedObjects;
};

export default useOrder;
