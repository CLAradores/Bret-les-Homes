import { useState, useEffect, useRef } from 'react';

export const useFetch = (URL, OPTIONS) => {
  const [data, setData] = useState([]);
  const ref = useRef(new Map());
  const cachedName = ref.current;

  useEffect(() => {
    if (cachedName.has('cachedData')) {
      setData(cachedName.get('cachedData'));
      return;
    }
    const fetchProperties = async () => {
      try {
        const response = await fetch(URL, OPTIONS);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result.hits);
        cachedName.set('cachedData', result.hits);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProperties();
  }, [URL, OPTIONS]);

  return { data };
};
