import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import noIMG from '../assets/wa.png';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
} from '@material-tailwind/react';
import CropLandscapeIcon from '@mui/icons-material/CropLandscape';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export function Cards({ property, location, category, coverPhoto }) {
  const { price, id, title, area, product, agency, rentFrequency } = property;
  const navigate = useNavigate();

  function makeShort() {
    if (title.length > 1000 || title.length < 1000) {
      return title.slice(0, 30) + '...';
    }
  }

  function putComma(number) {
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <Card className="w-full max-w-[23rem] shadow-lg m-3 rounded-none">
      <CardHeader floated={false} color="blue-gray">
        <img
          className=" hover:opacity-70 cursor-pointer transition-transform rounded-none"
          style={{ height: '200px', width: '100%' }}
          src={coverPhoto ? coverPhoto : noIMG}
          alt="ui/ux review check"
          onClick={() => navigate(`/properties/${id}`)}
        />
      </CardHeader>
      <CardBody className="flex flex-col">
        <div className="mb-3 flex justify-between ">
          <Typography
            variant="lead"
            color="blue-gray"
            className="font-bold text-xl "
          >
            AED {putComma(price)} {rentFrequency && `/ ${rentFrequency}`}
          </Typography>

          <img
            style={{ width: '40px', height: '40px' }}
            className="rounded-full"
            src={agency?.logo?.url}
            alt="agency logo"
          />
        </div>

        <Typography
          variant="h3"
          color="blue-gray"
          className="font-meduim text-md mb-2"
        >
          Property ID: {id}
        </Typography>

        <Typography
          variant="h5"
          color="blue-gray"
          className="font-medium text-base col-span-2"
        >
          {makeShort(title)}
        </Typography>

        <div className="flex justify-between mt-3">
          <div className="group  inline-flex flex-wrap items-center gap-3">
            <Tooltip content={location}>
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                <LocationOnIcon />
              </span>
            </Tooltip>
            <Tooltip content={category}>
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                <MapsHomeWorkIcon />
              </span>
            </Tooltip>
            <Tooltip content={`${area.toFixed(2)} sqmt`}>
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                <CropLandscapeIcon />
              </span>
            </Tooltip>
            <Tooltip content={product}>
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Tooltip>
          </div>
          <Link to={`/properties/${property.externalID}`} className="mt-3">
            <Tooltip content="See more details">
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70 flex">
                <MoreHorizIcon />
              </span>
            </Tooltip>
          </Link>
        </div>
      </CardBody>
      <CardFooter className="pt-3 ">
        <div onClick={() => navigate('/properties/contactUs')}>
          <Button
            className=" bg--color1 rounded-none"
            size="lg"
            fullWidth={true}
          >
            Booked a Viewing
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
