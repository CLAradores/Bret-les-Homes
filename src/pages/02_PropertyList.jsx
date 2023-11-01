import { useLists } from '../hooks/useLists';
// import { useState, useEffect } from 'react';
import { Cards } from '../components';
import { HeroSection } from '../components';
import { SemiFooter } from '../components';
import { NavLink, Link } from 'react-router-dom';

export const PropertyList = () => {
  const url =
    'https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-sale&lang=en&categoryExternalID=13';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '44ed021340mshdbb1146f5fe1d18p17b071jsn3689b64edc37',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    },
  };
  // const [properties, setProperties] = useState([]);
  const { items: properties } = useLists(url, options);

  // const fetchProperties = async (req, res) => {
  //   try {
  //     const response = await fetch(req, res);
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     const result = await response.json();
  //     setProperties(result.hits);
  //     console.log(result.hits);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchProperties(url, option);
  // }, []);

  return (
    <div>
      <HeroSection />
      <main>
        {/* <div className="mt-20">
          <ul className="flex flex-wrap text-md font-semibold space-x-6">
            <Link to="properties/propertyList">
              <li className="py-2 px-4 bg-yellow-500 rounded mt-5">
                Apartment
              </li>
            </Link>
            <Link to="properties/propertyList">
              <li className="py-2 px-4 bg-yellow-500 rounded mt-5">
                Townhouses
              </li>
            </Link>
            <Link to="properties/propertyList">
              <li className="py-2 px-4 bg-yellow-500 rounded mt-5">Villas </li>
            </Link>
            <Link to="properties/propertyList">
              <li className="py-2 px-4 bg-yellow-500 rounded mt-5">
                Penthouses{' '}
              </li>
            </Link>
            <Link to="properties/propertyList">
              <li className="py-2 px-4 bg-yellow-500 rounded mt-5">
                Residential Floor{' '}
              </li>
            </Link>
            <Link to="properties/propertyList">
              <li className="py-2 px-4 bg-yellow-500 rounded mt-5">
                Commercial Floor
              </li>
            </Link>
            <Link to="properties/propertyList">
              <li className="py-2 px-4 bg-yellow-500 rounded mt-5">
                Industrial Land
              </li>
            </Link>
            <Link to="properties/propertyList">
              <li className="py-2 px-4 bg-yellow-500 rounded mt-5">
                Other Commercial
              </li>
            </Link>
          </ul>
        </div> */}
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
