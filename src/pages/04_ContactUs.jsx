import { Form } from '../components';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
export const ContactUs = () => {
  return (
    <div>
      <main className="">
        <section
          className="flex justify-center items-center self-center "
          style={{ height: '100vh' }}
        >
          <div className="text-left w-1/2 ms-10">
            <h3 className="text-2xl font-medium mb-4">Craft Your Dream</h3>
            <h3 className="text-4xl font-bold mb-4">
              Bret'les Premier Real Estate
            </h3>
            <h3 className="text-2xl font-base mb-4">
              Leading Property Broker in Abu Dhabi
            </h3>
            <p>
              Welcome to Parker Premier Real Estate, your premium destination
              for all your real estate needs. Whether you’re looking to buy,
              sell, or invest in properties, we are here to guide you every step
              of the way.
            </p>
          </div>
          <div>
            <Form />
          </div>
        </section>
      </main>
      <div className="flex flex-col justify-center items-center mt-12">
        <h2 className="text-3xl mb-3 ">Get in Touch</h2>
        <div className="mt-10 mb-8 w-2/4 text-center flex justify-center  space-x-12">
          <div className="flex flex-col justify-center items-center text-center space-x-5">
            <EmailIcon style={{ fontSize: '3rem' }} />
            <h2 className="font-base text-xl mt-8 ">bretles67@gmail.com</h2>
          </div>
          <div className="flex flex-col justify-center items-center text-center space-x-5">
            <LocalPhoneIcon style={{ fontSize: '3rem' }} />
            <h2 className="font-base text-xl mt-8 ">+1 234 567 890</h2>
          </div>
          <div className="flex flex-col justify-center items-center text-center space-x-5">
            <div className="flex space-x-5 ">
              <FacebookIcon style={{ fontSize: '2.5rem' }} />
              <InstagramIcon style={{ fontSize: '2.5rem' }} />
              <TwitterIcon style={{ fontSize: '2.5rem' }} />
            </div>
            <h2 className="font-base text-xl mt-8 ">Connect with Us</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
