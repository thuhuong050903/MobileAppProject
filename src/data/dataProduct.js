import React, { useEffect, useState } from 'react';

const DataProduct = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://6471cfab6a9370d5a41ab469.mockapi.io/menu', { method: "GET" });
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return data;
};

export default DataProduct;
