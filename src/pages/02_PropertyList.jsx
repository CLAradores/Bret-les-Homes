import { useState, useEffect } from 'react';
import { Cards } from '../components';
import { HeroSection } from '../components';
import { SemiFooter } from '../components';

const url =
  'https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-sale&lang=en&categoryExternalID=22';
const option = {
  method: ' GET',
  headers: {
    'X-RapidAPI-Key': '0afd97d6e6msh163ebab7b5a9ed5p172e9ejsn844f732d5dee',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
  },
};

export const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  const fetchProperties = async (req, res) => {
    try {
      const response = await fetch(req, res);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setProperties(result.hits);
      console.log(result.hits);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProperties(url, option);
  }, []);

  return (
    <div>
      <HeroSection />
      <main>
        <section className="max-w-7xl m-auto py-7">
          <div className="flex flex-wrap justify-center">
            {properties.map((property) => (
              <Cards
                key={property.id}
                property={property}
                location={property.location[1].name}
                category={property.category[1].name}
                coverPhoto={property.coverPhoto.url}
              />
            ))}
          </div>
        </section>
      </main>
      <SemiFooter />
    </div>
  );
};
