import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from '@material-tailwind/react';
import { SemiFooter } from '../components';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '44ed021340mshdbb1146f5fe1d18p17b071jsn3689b64edc37',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
  },
};

export const PropertyDetails = () => {
  const params = useParams();
  const [property, setProperty] = useState(null); // Initialize as null // pasakit sakin utak

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(
          `https://bayut.p.rapidapi.com/properties/detail?externalID=${params.externalID}`, //pasakiy sakin utak
          options
        );
        if (!response.ok) {
          throw new Error(`Could not fetch property details`);
        }
        const result = await response.json();
        setProperty(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProperties();
  }, [params.externalID]);

  function putComma(number) {
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  }

  if (!property) {
    // Handle the case when property is still loading or undefined
    return <div>Loading...</div>;
  }

  const { title, id, price, description, amenities, photos } = property;

  return (
    <div>
      <main>
        <h1 className=" mt-32 text-4xl mb-12">{title}</h1>

        <Carousel className="rounded-xl">
          {photos && //pasakit saking utak
            photos.map((photo) => (
              <img
                src={photo.url}
                alt="image 2"
                className=" h-96 w-full object-cover"
              />
            ))}
        </Carousel>

        <div className="  flex flex-row mt-20 text-2xl font-medium">
          <div className="basis-1/2 flex justify-between">
            <h2>Property ID:{id}</h2>
            <h2>Property Type:</h2>
          </div>
          <div className="basis-1/2 flex flex-col text-center">
            <h3>Location:</h3>
            <p className="text-xl font-bold">
              {/* {
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61762.591132526606!2d121.06346307193945!3d14.646746876153252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b9a2777a00f9%3A0x6d36c8f429a12fc6!2sMarikina%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1698844246936!5m2!1sen!2sph"
                  width="400"
                  height="300"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              } */}
            </p>
          </div>
        </div>
        <h2 className="text-4xl font-medium mt-10"> $ {putComma(price)}</h2>

        <ul className="text-3xl font-medium mt-10">
          {amenities && // pasakit sakin utak
            amenities.map((amenity) => (
              <li key={amenity.text}>{amenity.text}</li>
            ))}
        </ul>
        <div className="mt-20 text-xl font-base">
          <p>{description}</p>
        </div>
      </main>
      <SemiFooter />
    </div>
  );
};
