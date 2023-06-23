import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProuducts] = useState<string[]>([]);
  useEffect(() => {
    console.log("Fetching proudcts in ", category);
    setProuducts(["Colthing", "Household"]);
  }, [category]);
  return <div>ProductList</div>;
};

export default ProductList;
