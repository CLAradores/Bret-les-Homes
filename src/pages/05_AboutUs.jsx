import { SemiFooter } from '../components';
import photo from '../assets/teamwork2.webp';

export const AboutUs = () => {
  return (
    <div>
      <div className="about">
        <main>
          <h1
            style={{ height: '75vh' }}
            className="text-white font-bold ms-20 text-7xl flex text-center items-center justify-start"
          >
            About Us
          </h1>
        </main>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <div className="my-20">
          <h2 className="text-6xl font-medium mb-12 text-center">Who We Are</h2>
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
      <img
        style={{ height: '70vh', width: '100%' }}
        src={photo}
        alt="teamworkIMG"
      />
      <div className="flex flex-col justify-center items-center text-center  mt-32">
        <div>
          <h2 className="text-6xl font-medium mb-20">Why Us</h2>
          <p className=" text-lg font-base w-3/4 m-auto">
            the intricate landscape of real estate, brokerage firms serve as
            beacons of expertise and reliability. At Parker Premier Real Estate,
            we do more than just list properties; we offer a comprehensive suite
            of services designed to elevate and simplify your property journey.
            Here’s why choosing us makes all the difference: Tailored Solutions:
            Especially when it comes to new developments, we ensure that every
            detail aligns with your vision and needs. Unparalleled Inventory:
            Our vast selection streamlines your search, ensuring you find the
            property that feels like home or the perfect investment opportunity.
            Seamless Mediation: Acting as your dedicated intermediary, we ensure
            that every transaction is transparent, smooth, and stress-free.
            Financing Guidance: Navigate the complexities of property financing
            with our expertise, ensuring you secure the best loan terms.
            Financial Mastery: Our in-depth understanding of the market
            guarantees that you’re always presented with the most favorable and
            suitable financing options. With Parker Premier Real Estate by your
            side, you’re not just engaging with a brokerage; you’re partnering
            with a firm that’s invested in your success.”
          </p>
        </div>
      </div>
      ;
      <SemiFooter />
    </div>
  );
};
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
