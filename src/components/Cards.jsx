import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from '@material-tailwind/react';
import CropLandscapeIcon from '@mui/icons-material/CropLandscape';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

export function Cards() {
  return (
    <Card className="w-full max-w-[23rem] shadow-lg m-3">
      <CardHeader floated={false} color="blue-gray">
        <img
          src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="ui/ux review check"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        <IconButton
          size="lg"
          color="red"
          variant="text"
          className="!absolute top-4 left-4 rounded-full text-xl"
        >
          <BookmarkBorderOutlinedIcon />
        </IconButton>
      </CardHeader>
      <CardBody>
        <div>
          <Typography
            variant="lead"
            color="blue-gray"
            className="font-bold text-3xl my-3"
          >
            $ 1 000 000
          </Typography>
          <Typography
            variant="h3"
            color="blue-gray"
            className="font-meduim text-xl my-3"
          >
            Property ID: 8381283409328
          </Typography>
        </div>
        <div className="mb-3 grid grid-cols-3">
          <Typography
            variant="h5"
            color="blue-gray"
            className="font-medium col-span-2"
          >
            Wooden House, Florida
          </Typography>
          <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal justify-end"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="-mt-0.5 h-5 w-5 text-yellow-700"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            5.0
          </Typography>
        </div>
        <Typography color="gray">wait lang</Typography>
        <div className="flex justify-between ">
          <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
            <Tooltip content="Location : UAE">
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                <LocationOnIcon />
              </span>
            </Tooltip>
            <Tooltip content="Category: Commercial Villa">
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                <MapsHomeWorkIcon />
              </span>
            </Tooltip>
            <Tooltip content="Area: 242 sqmt">
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                <CropLandscapeIcon />
              </span>
            </Tooltip>
            <Tooltip content="premium">
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
          <Link to="/" className="mt-8">
            <Tooltip content="See more details">
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70 flex">
                <MoreHorizIcon />
              </span>
            </Tooltip>
          </Link>
        </div>
      </CardBody>
      <CardFooter className="pt-3">
        <Button size="lg" fullWidth={true}>
          Booked a Viewing
        </Button>
      </CardFooter>
    </Card>
  );
}
