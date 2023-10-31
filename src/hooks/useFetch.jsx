import { useState, useEffect } from 'react';

export const useFetch = (URL, OPTIONS) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(URL, OPTIONS);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result.hits);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProperties();
  }, [URL, OPTIONS]);

  return { data };
};
