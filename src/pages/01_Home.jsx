import { useFetch } from '../hooks/useFetch';
// import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../components';
import { Cards } from '../components';
import { Form } from '../components';
import { SemiFooter } from '../components';
import photo1 from '../assets/villa.webp';
import photo2 from '../assets/apartment.webp';
import photo3 from '../assets/penth.webp';
import photo4 from '../assets/town.webp';
import img1 from '../assets/buy.jpg';
import img2 from '../assets/sell.jpg';

import { Tooltip } from '@material-tailwind/react';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const url =
  'https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-sale&hitsPerPage=9&page=0&lang=en&categoryExternalID=25&priceMin=1000000';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0afd97d6e6msh163ebab7b5a9ed5p172e9ejsn844f732d5dee',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
  },
};
export const Home = () => {
  // const [properties, setProperties] = useState([]);
  const { data: properties } = useFetch(url, options);

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
  //   fetchProperties(url, options);
  // }, [url, options]);

  return (
    <div>
      <div>
        <HeroSection />
        <main>
          <h1
            className="font-bold text-2xl text-center  "
            style={{ marginTop: '5rem' }}
          >
            Featured Property
          </h1>
          <section className="max-w-7xl m-auto py-7">
            <div className="flex flex-wrap justify-center m-10 ">
              {properties.map((property) => (
                <Cards
                  key={property.id}
                  property={property}
                  location={property.location[1].name}
                  category={property.category[1].name}
                  coverPhoto={property.coverPhoto.url}
                />
              ))}
              {/* <Cards /> */}
            </div>
          </section>
          <main className="bg-red-50">
            <section
              className="flex justify-center items-center self-center "
              style={{ height: '100vh' }}
            >
              <div className="text-left w-1/2 ms-10">
                <h3 className="text-3xl font-medium mb-4">Craft Your Dream</h3>
                <h3 className="text-5xl font-bold mb-4">
                  Bret'les Premier Real Estate
                </h3>
                <h3 className="text-2xl font-base mb-4">
                  Leading Property Broker in Abu Dhabi
                </h3>
                <p>
                  Welcome to Parker Premier Real Estate, your premium
                  destination for all your real estate needs. Whether you’re
                  looking to buy, sell, or invest in properties, we are here to
                  guide you every step of the way.
                </p>
              </div>
              <div>
                <Form />
              </div>
            </section>
          </main>
          <main>
            <div
              className="flex flex-col justify-center"
              style={{ height: '100vh' }}
            >
              <div className="flex flex-col text-center">
                <h3 className="text-lg mb-28">We're Here To Help You</h3>
                <h1 className="mb-36 text-4xl font-medium">
                  What Are You Looking For?
                </h1>
              </div>
              <div className="flex flex-nowrap  justify-center space-x-10">
                <Link
                  to="/"
                  className="flex flex-col justify-center items-center text-center  "
                >
                  <img className="w-44 rounded-lg h-20" src={photo2} alt="" />
                  <p className="mt-8 font-semibold text-2xl">Apartments</p>
                </Link>
                <Link
                  to="/"
                  className="flex flex-col justify-center items-center text-center  "
                >
                  <img
                    className="w-44 rounded-lg h-20"
                    src={photo4}
                    alt="Townhouses picute"
                  />
                  <p className="mt-8 font-semibold text-2xl">Townhouse</p>
                </Link>
                <Link
                  to="/"
                  className="flex flex-col justify-center items-center text-center  "
                >
                  <img
                    className="w-44 rounded-lg h-20"
                    src={photo3}
                    alt="Penthouses picute"
                  />
                  <p className="mt-8 font-semibold text-2xl">Penthouses</p>
                </Link>
                <Link
                  to="/"
                  className="flex flex-col justify-center items-center text-center  "
                >
                  <img
                    className="w-44 rounded-lg h-20"
                    src={photo1}
                    alt="Villas picute"
                  />
                  <p className="mt-8 font-semibold text-2xl">Villas</p>
                </Link>
                <Link
                  to="propertyList"
                  className="flex flex-col justify-center items-center text-center  "
                >
                  <Tooltip content="Click for More:">
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      <AddCircleIcon />
                    </span>
                  </Tooltip>
                  <p className="mt-8 font-semibold text-2xl">Add More</p>
                </Link>
              </div>
            </div>
          </main>
          <main>
            <div
              style={{ height: '100vh' }}
              className="flex flex-col text-center items-center justify-center"
            >
              <h2 className="text-6xl font-medium mb-14">
                HOW CAN WE HELP YOU?
              </h2>
              <p className="mb-32 font-medium">
                We at Presello are committed to deliver the best brokering
                service in the market. Whether you are looking to sell your
                property or purchase your next investment, we are here to assist
                you.
              </p>
              <div className="flex space-x-24">
                <div>
                  <img
                    className="w-72 h-72 p-1 bg-black rounded-md"
                    src={img1}
                    alt=""
                  />
                  <h2 className="text-3xl font-semibold mt-10 ">
                    Buy a Property
                  </h2>
                </div>
                <div>
                  <img
                    className="w-72 h-72 p-1 bg-black rounded-md"
                    src={img2}
                    alt=""
                  />
                  <h2 className="text-3xl font-semibold mt-10">
                    Sell a Property
                  </h2>
                </div>
              </div>
            </div>
          </main>
        </main>
      </div>
      <SemiFooter />
    </div>
  );
};
