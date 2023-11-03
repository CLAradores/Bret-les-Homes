import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { SemiFooter } from '../components';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import CheckIcon from '@mui/icons-material/Check';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import BedIcon from '@mui/icons-material/Bed';
import ShowerTwoToneIcon from '@mui/icons-material/ShowerTwoTone';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
  },
};

export default function PropertyDetails() {
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
  function showSpinner() {
    document.querySelector('.spinner').classList.add('show');
  }

  function hideSpinner() {
    document.querySelector('.spinner').classList.remove('show');
  }

  if (!property) {
    return showSpinner();
  } else {
    hideSpinner();
  }

  const {
    title,
    id,
    price,
    description,
    amenities,
    photos,
    geography,
    location,
    area,
    agency,
    product,
  } = property;

  // useEffect(() => {
  //   const iframeData = document.createElement('iframeId');
  //   const lat = geography.lat;
  //   const lon = geography.lng;
  //   iframeData.src = `https://maps.google.com/maps?q=${lat},${lon}=es;&outpud=embed`;
  // });

  return (
    <div>
      <main>
        <h1 className=" mt-32 text-2xl font-medium mb-12">{title}</h1>

        <Carousel className="rounded-xl">
          {photos && //pasakit saking utak
            photos.map((photo) => (
              <img
                key={photo.url}
                src={photo.url}
                alt="image 2"
                className=" h-96 w-full object-cover"
              />
            ))}
        </Carousel>

        <div className="  flex flex-row mt-20 text-medium font-medium">
          <div className="basis-1/2 flex justify-between">
            <h2>Property ID:{id}</h2>
            <h2>Property Type:</h2>
          </div>
        </div>
        <h2 className="text-3xl font-medium mt-5"> $ {putComma(price)}</h2>
        <div className="flex justify-between">
          <div className="flex ">
            <div className="flex flex-col  font-base justify-center items-center ">
              <LocationOnIcon
                style={{ fontSize: '3rem', marginBottom: '1rem' }}
              />
              <h3 className="flex flex-wrap w-40  justify-center items-center font-medium">
                {location &&
                  location.map((loc) => (
                    <span key={loc.name}>{loc.name} , </span>
                  ))}
              </h3>
            </div>
            <div className="flex flex-col  font-base justify-center items-center ml-20">
              <CropOriginalIcon
                style={{ fontSize: '3rem', marginBottom: '1rem' }}
              />
              <h3 className="flex  justify-center items-center font-medium">
                {area.toFixed(2)} &nbsp;{' '}
                <span className="font-semibold">sqmt</span>
              </h3>
            </div>
            <div className="flex flex-col  font-base justify-center items-center ml-28">
              <WorkspacePremiumIcon
                style={{ fontSize: '3rem', marginBottom: '1rem' }}
              />
              <h3 className="flex  justify-center items-center font-medium">
                {product} property
              </h3>
            </div>
            <div className="flex flex-col  font-base justify-center items-center ml-28">
              <BedIcon style={{ fontSize: '3rem', marginBottom: '1rem' }} />
              <h3 className="flex  justify-center items-center font-medium">
                Bedroom
              </h3>
            </div>
            <div className="flex flex-col  font-base justify-center items-center ml-28">
              <ShowerTwoToneIcon
                style={{ fontSize: '3rem', marginBottom: '1rem' }}
              />
              <h3 className="flex  justify-center items-center font-medium">
                Bedroom
              </h3>
            </div>
          </div>
          <div className="flex flex-col  text-center">
            <img src={agency?.logo?.url} className=" w-48 m-4 rounded" alt="" />
            <h3 className="text-center text-xl font-medium">{agency?.name}</h3>
          </div>
        </div>

        <div className="flex mt-10 text-bases font-base  justify-between">
          <p className="w-1/2">{description}</p>
          <div className=" w-72 text-center p-10 bg-black text-white flex flex-col justify-center ">
            <h3 className="font-semibold text-xl">
              Interested in this property?
            </h3>
            <p className="my-5">
              Our listings are in high demand, so don’t wait until your chance
              is over. Talk to one of our agents now to schedule a viewing.
            </p>
            <Link
              to="properties/contactUs"
              type="button"
              className="text-black focus:ring-4 focus:outline-none w font-bold  text-sm px-4 py-2 text-center mr-3 md:mr-0 bg--color"
            >
              Booked a Viewing
            </Link>
          </div>
        </div>
        <div className="flex justify-between">
          <ul className="text-medium font-medium mt-10">
            {amenities && // pasakit sakin utak
              amenities.map((amenity) => (
                <li key={amenity.text}>
                  <CheckIcon /> &nbsp;
                  {amenity.text}
                </li>
              ))}
          </ul>
          <div className="mt-10 flex flex-col justify-center items-center text center">
            <h2 className="text-center text-2xl font-seibold">Get in Touch</h2>
            <div className="flex space-x-10 mt-10">
              <div className="flex flex-col text-center items-center">
                <EmailIcon style={{ fontSize: '2rem' }} />
                <h3 className="mt-3">bretles67@gmail.com</h3>
              </div>
              <div className="flex flex-col text-center items-center">
                <LocalPhoneIcon style={{ fontSize: '2rem' }} />
                <h3 className="mt-3">+1 234 567 890</h3>
              </div>
              <div className="flex flex-col justify-center text-center items-center">
                <div className="flex space-x-5 mb-3 justify-center">
                  <FacebookIcon style={{ fontSize: '2rem' }} />
                  <InstagramIcon style={{ fontSize: '2rem' }} />
                  <TwitterIcon style={{ fontSize: '2rem' }} />
                </div>
                <h2>Connect with Us</h2>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SemiFooter />
    </div>
  );
}
