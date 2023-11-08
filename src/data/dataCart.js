import React, { useEffect, useState } from 'react';

const DataCart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://6410c403da042ca131fb737e.mockapi.io/Cart', { method: "GET" });
        const jsonData = await response.json();
        setData(jsonData[0].product);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return data;
};

export default DataCart;
