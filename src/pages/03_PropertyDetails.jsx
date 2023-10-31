import { SemiFooter } from '../components';
import img1 from '../assets/hero4.jpg';
import { Carousel } from '@material-tailwind/react';

export const PropertyDetails = () => {
  function putComma(number) {
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <div>
      <main>
        <h1 className=" mt-32 text-4xl mb-12">
          title:"High-End Designer Penthouse|Full Burj Khalifa View"
        </h1>
        {/* <img src={img1} width={'100%'} alt="Details Picture" /> */}
        {/* ---------------------- */}
        <Carousel className="rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className=" h-96 w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className=" h-96 w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className=" h-96 w-full object-cover"
          />
        </Carousel>

        {/* ----------------------- */}
        <div className="  flex flex-row mt-20 text-2xl font-medium">
          <div className=" basis-1/2 flex justify-between">
            <h2>Property ID:</h2>
            <h2>Property Type:</h2>
          </div>
          <div className="basis-1/2 flex flex-col text-center">
            <h3>Location:</h3>
            <p className="text-xl font-bold">MAP</p>
          </div>
        </div>
        <h2 className="text-6xl font-medium mt-10"> $ {putComma(1000000)}</h2>

        <ul className="text-3xl font-medium mt-10">
          <li>Utilities</li>
          <li>Utilities</li>
          <li>Utilities</li>
        </ul>
        <div className="mt-20 text-xl font-base">
          <p>
            description:"RARE Opportunity to Build a resort on the Palm Jumeirah
            with beach access and panoramic sea view You can build 7 floors
            resort mixed between hotel or hotel apartments What the benefits
            what is the construction cost what is the approximate income for the
            hotel what is the value of the hotel after completion If you are an
            investor or International investment company, contact us for full
            presentation and ready business plan for this opportunity *Note: The
            pictures is sample of what you can build on this plot at the same
            area location Ayham Jbara Manzel Kareem"
          </p>
        </div>
      </main>
      <SemiFooter />
    </div>
  );
};
