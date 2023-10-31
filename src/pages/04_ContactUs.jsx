import { Form } from '../components';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
export const ContactUs = () => {
  return (
    <div>
      <main>
        HeroSection
        <div className="flex mt-16">
          <div className="2/4">
            <Form />
          </div>
          <div className="mt-10 mb-8 w-2/4 text-center">
            <h2 className="text-5xl mb-8 ">Get in Touch</h2>
            <EmailIcon style={{ fontSize: '4rem' }} />
            <h2 className="font-base text-xl mt-8 mb-5">bretles67@gmail.com</h2>
            <LocalPhoneIcon style={{ fontSize: '4rem' }} />
            <h2 className="mt-8 mb-8">+1 234 567 890</h2>
            <h2 className="text-4xl font-bold">Connect with Us</h2>
            <div className="flex space-x-5 mt-12 justify-center">
              <FacebookIcon style={{ fontSize: '3rem' }} />
              <InstagramIcon style={{ fontSize: '3rem' }} />
              <TwitterIcon style={{ fontSize: '3rem' }} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
