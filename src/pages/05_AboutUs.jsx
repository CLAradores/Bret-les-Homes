import { SemiFooter } from '../components';
import photo from '../assets/teamwork2.webp';
import charles from '../assets/charles.jpg';
import jhonbret from '../assets/jhonbret.jpeg';
import { Rating } from '@material-tailwind/react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const AboutUs = () => {
  return (
    <div>
      <div className="about">
        <main>
          <h1
            style={{ height: '55vh' }}
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
                innovative real estate platform. "
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
                their ideal property."
              </p>
            </div>
          </div>
          <div
            className="flex flex-col justify-center items-center mt-10"
            style={{ width: '90%' }}
          >
            <a
              // onClick={handleScroll(5, 5)}
              href="#scroll"
              type="button"
              className="text-black focus:ring-4 focus:outline-none  font-bold  text-sm px-4 py-2 text-center mr-3 md:mr-0 bg--color "
            >
              Subscribe to Newsletter
            </a>
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
          <p className="flex justify-center items-center font-semibold text-lg mt-5 mb-3">
            Contact Info
          </p>
          <div className="flex space-x-4  mb-10">
            <a href="https://facebook.com/">
              <FacebookIcon />
            </a>
            <a href="https://instagram.com/">
              <InstagramIcon />
            </a>
            <a href="https://twitter.com/">
              <TwitterIcon />
            </a>
            <a href="https://linkedin.com/">
              <LinkedInIcon />
            </a>
          </div>
        </div>
        <div className=" flex flex-col  items-center w-1/2">
          <img
            src={jhonbret}
            style={{ width: '30%', height: '80%' }}
            alt="co-ceoIMG"
          />
          <h3 className="text-xl font-semibold">Jhonbret Tangaha</h3>
          <p className="font-semibold">(Co-owner)</p>
          <p className="flex justify-center items-center font-semibold text-lg mt-5 mb-3">
            Contact Info
          </p>
          <div className="flex space-x-4  mb-10">
            <a href="https://facebook.com/">
              <FacebookIcon />
            </a>
            <a href="https://instagram.com/">
              <InstagramIcon />
            </a>
            <a href="https://twitter.com/">
              <TwitterIcon />
            </a>
            <a href="https://linkedin.com/">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
      <main
        style={{ height: '90vh' }}
        className="flex flex-col items-center  text-center justify-center  overflow-hidden max-w-7xl"
      >
        <h1 className="text-4xl mb-10">WHAT CLIENTS ARE SAYING</h1>
        <div className="mb-44">
          <Rating value={5} />
        </div>
        <div className="flex dispaly--inline">
          <div className="animate--slide">
            <div className="flex space-x-10 text-gray-900">
              <div>
                <p className="mb-24 w-96 text-gray-900 text-start">
                  "Working with Sarah was a breeze! She found us our dream home
                  within our budget. Thank you, Sarah!"
                </p>
                <p className="font-bold"> John W.</p>
              </div>
              <div>
                <p className="mb-24 w-96 text-gray-700 text-start">
                  "Tom's expertise and dedication made selling our house a
                  smooth experience. Highly recommended!"
                </p>
                <p className="font-bold">Emily S.</p>
              </div>
              <div>
                <p className="mb-24 w-96 text-gray-700 text-start">
                  "I can't thank Lisa enough for her patience and guidance
                  throughout our home search. She's the best!"
                </p>
                <p className="font-bold">Michael R</p>
              </div>
              <div>
                <p className="mb-24 w-96 text-gray-700 text-start">
                  "Nancy's attention to detail and market knowledge ensured we
                  got top dollar for our property. A true professional!"
                </p>
                <p className="font-bold">Susan B.</p>
              </div>
            </div>
          </div>
          <div className="animate--slide">
            <div className="flex space-x-10">
              <div>
                <p className="mb-24 w-96 text-gray-700 text-start">
                  "David made the whole buying process stress-free. He's a great
                  communicator and always had our best interests in mind."
                </p>
                <p className="font-bold">Mark C.</p>
              </div>
              <div>
                <p className="mb-24 w-96 text-gray-700 text-start">
                  "We're so grateful to Lisa for helping us find our first home.
                  Her support and knowledge made it a fantastic journey."
                </p>
                <p className="font-bold"> Mary and Steve M.</p>
              </div>
              <div>
                <p className="mb-24 w-96 text-gray-700 text-start">
                  "Thank you, Robert, for your exceptional service. You turned a
                  complicated sale into a smooth transaction. We're thrilled
                  with the results!"
                </p>
                <p className="font-bold">Linda and James D.</p>
              </div>
              <div>
                <p className="mb-24 w-96 text-gray-700 text-start">
                  "Working with Jessica was a pleasure. She found us the perfect
                  investment property. We couldn't be happier!"
                </p>
                <p className="font-bold">Amanda and Michael H.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div>
        <main>
          <Box
            id="scroll"
            sx={{
              display: 'flex flex-column',
              alignItems: 'center',
              maxWidth: '50vw',
              padding: '2rem',
              margin: 'auto',

              '& > :not(style)': { m: 1 },
            }}
          >
            <h1 className="text-4xl text-center p-8">Our Newsletter</h1>
            <div className="flex justify-center items-center  space-x-4 w-auto">
              <TextField
                fullWidth
                id="demo-helper-text-misaligned"
                label="Firstname"
              />
              <TextField
                fullWidth
                id="demo-helper-text-misaligned"
                label="Lastame"
              />
            </div>
            <TextField fullWidth label="E-mail" id="fullWidth" />
            <TextField fullWidth label="Contact Number" id="fullWidth" />
            <TextField
              fullWidth
              id="outlined-select-currency"
              select
              label="Select"
            >
              <MenuItem>Buyer</MenuItem>
              <MenuItem>Seller</MenuItem>
            </TextField>
            <TextField
              fullWidth
              id="standard-multiline-static"
              label="Message"
              multiline
              rows={4}
              variant="standard"
            />
            <button
              style={{ width: '100%', backgroundColor: '#e5b136' }}
              className=" py-2  text-md"
            >
              Subscribe
            </button>
          </Box>
        </main>
      </div>
      <div className="flex flex-col text-center items-center text-xl">
        <h3>CONNECT WITH US</h3>
        <div className="flex space-x-4 my-5 mb-10">
          <a href="https://facebook.com/">
            <FacebookIcon />
          </a>
          <a href="https://instagram.com/">
            <InstagramIcon />
          </a>
          <a href="https://twitter.com/">
            <TwitterIcon />
          </a>
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

// {
//   <div
//     style={{ height: '50vh' }}
//     className="flex flex-col justify-center items-center text-center"
//   >
//     <div>
//       <h2 className="text-6xl font-medium mb-20">Why Us</h2>
//       <p className=" text-lg font-base w-3/4 m-auto">
//         the intricate landscape of real estate, brokerage firms serve as beacons
//         of expertise and reliability. At Parker Premier Real Estate, we do more
//         than just list properties; we offer a comprehensive suite of services
//         designed to elevate and simplify your property journey. Here’s why
//         choosing us makes all the difference: Tailored Solutions: Especially
//         when it comes to new developments, we ensure that every detail aligns
//         with your vision and needs. Unparalleled Inventory: Our vast selection
//         streamlines your search, ensuring you find the property that feels like
//         home or the perfect investment opportunity. Seamless Mediation: Acting
//         as your dedicated intermediary, we ensure that every transaction is
//         transparent, smooth, and stress-free. Financing Guidance: Navigate the
//         complexities of property financing with our expertise, ensuring you
//         secure the best loan terms. Financial Mastery: Our in-depth
//         understanding of the market guarantees that you’re always presented with
//         the most favorable and suitable financing options. With Parker Premier
//         Real Estate by your side, you’re not just engaging with a brokerage;
//         you’re partnering with a firm that’s invested in your success.”
//       </p>
//     </div>
//   </div>;
// }
