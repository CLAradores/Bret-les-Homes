import { useState, useEffect } from 'react';

export const useLists = (URL, OPTIONS) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(URL, OPTIONS);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setItems(result.hits);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProperties();
  }, [URL, OPTIONS]);

  return { items };
};
