import React, { useEffect, useState } from 'react';

function Api({ setProducts }) {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProducts(data.products);
    };

    fetchData();
  }, [setProducts]);

  return null;
}

export default Api;
