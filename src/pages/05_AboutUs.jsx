import { SemiFooter } from '../components';
import { useFetch } from '../hooks/useFetch';
import { useEffect } from 'react';
import photo from '../assets/teamwork2.webp';
import photo1 from '../assets/sasa.jpeg';
import { Link } from 'react-router-dom';
import charles from '../assets/charles.jpg';
import jhonbret from '../assets/jhonbret.jpeg';

export const AboutUs = () => {
  const url =
    'https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020';

  const { data: logos } = useFetch(url, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    },
  });
  console.log(logos);

  return (
    <div>
      <div className="about">
        <main>
          <h1
            style={{ height: '75vh' }}
            className="text-white font-bold ms-20 text-5xl flex text-center items-center justify-start"
          >
            About Us
          </h1>
        </main>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <div className="my-20">
          <h2 className="text-4xl font-medium mb-12 text-center">Who We Are</h2>
          <p className=" text-lg font-base w-3/4 m-auto text-center">
            "At Bret'les Homes, we understand the magnitude of buying or selling
            a property—it's not just a transaction, it's a life-changing
            decision. This is why we've gathered a dedicated team of seasoned
            professionals to stand by your side every step of the way, making
            the experience smooth and rewarding. Our foundation is built on
            trust, commitment, and a deep understanding of the real estate
            market. Whether you're taking the first step onto the property
            ladder, diversifying an investment portfolio, or positioning your
            property for the best market value, our expertise is tailored to fit
            your unique journey. What truly sets us apart isn't just our
            impressive track record—it's the trust and satisfaction our clients
            place in us. Our commitment to excellence is reflected in the
            lasting relationships we've built and the positive feedback we
            continually receive. For a real estate experience defined by
            expertise, dedication, and personalized care, choose Parker Premier
            Real Estate. Connect with us today and let's turn your real estate
            aspirations into reality."
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="bg-black text-white w-1/2">
          <div className="flex flex-col justify-center items-baseline text-center">
            <div
              className="flex flex-col justify-center text-center items-center  mx-10 "
              style={{ height: '33vh', width: '80%' }}
            >
              <h2 className="font-bold text-2xl">Mission</h2>
              <p>
                "To empower individuals and families to find their dream homes
                and secure their financial future through a trusted and
                innovative real estate platform. We are committed to simplifying
                the property buying and selling process, providing expert
                guidance, and fostering a sense of community within the real
                estate market."
              </p>
            </div>
            <div
              className="flex flex-col justify-center text-center items-center mx-10 "
              style={{ width: '80%' }}
            >
              <h2 className="font-bold text-2xl">Vision</h2>
              <p>
                "To become the leading online destination for real estate
                transactions, known for our unwavering commitment to
                transparency, reliability, and customer satisfaction. We
                envision a future where everyone can easily find and secure
                their ideal property, enabling them to achieve their
                homeownership and investment goals with confidence."
              </p>
            </div>
          </div>
          <div
            className="flex flex-col justify-center items-center mt-10"
            style={{ width: '90%' }}
          >
            <Link
              type="button"
              className="text-black focus:ring-4 focus:outline-none  font-bold  text-sm px-4 py-2 text-center mr-3 md:mr-0 bg--color "
            >
              Subscribe to Newsletter
            </Link>
          </div>
        </div>

        <img
          style={{ height: '70vh', width: '50%' }}
          src={photo}
          alt="teamworkIMG"
        />
      </div>

      <h3 className="flex flex-col justify-center items-center text-center text-4xl font-semibold mt-20">
        Meet Our Team
      </h3>
      <div className="flex max-w-7xl m-auto mt-10" height={'100%'}>
        <div className=" flex flex-col  items-center w-1/2">
          <img
            src={charles}
            style={{ width: '30%', height: '80%' }}
            alt="ceoIMG"
          />
          <h3 className="text-xl font-semibold">Charles Lester Radores</h3>
          <p className="font-semibold">(Owner)</p>
        </div>
        <div className=" flex flex-col  items-center w-1/2">
          <img src={jhonbret} style={{ width: '30%' }} alt="co-ceoIMG" />
          <h3 className="text-xl font-semibold">Jhonbret Tangaha</h3>
          <p className="font-semibold">(Co-owner)</p>
        </div>
      </div>

      <SemiFooter />
    </div>
  );
};

{
  /* <img
  style={{ width: '40px', height: '40px' }}
  className="rounded-full"
  src={image?.agency?.logo?.url}
  alt="agency logo"
/> */
}

{
  <div
    style={{ height: '50vh' }}
    className="flex flex-col justify-center items-center text-center"
  >
    <div>
      <h2 className="text-6xl font-medium mb-20">Why Us</h2>
      <p className=" text-lg font-base w-3/4 m-auto">
        the intricate landscape of real estate, brokerage firms serve as beacons
        of expertise and reliability. At Parker Premier Real Estate, we do more
        than just list properties; we offer a comprehensive suite of services
        designed to elevate and simplify your property journey. Here’s why
        choosing us makes all the difference: Tailored Solutions: Especially
        when it comes to new developments, we ensure that every detail aligns
        with your vision and needs. Unparalleled Inventory: Our vast selection
        streamlines your search, ensuring you find the property that feels like
        home or the perfect investment opportunity. Seamless Mediation: Acting
        as your dedicated intermediary, we ensure that every transaction is
        transparent, smooth, and stress-free. Financing Guidance: Navigate the
        complexities of property financing with our expertise, ensuring you
        secure the best loan terms. Financial Mastery: Our in-depth
        understanding of the market guarantees that you’re always presented with
        the most favorable and suitable financing options. With Parker Premier
        Real Estate by your side, you’re not just engaging with a brokerage;
        you’re partnering with a firm that’s invested in your success.”
      </p>
    </div>
  </div>;
}
