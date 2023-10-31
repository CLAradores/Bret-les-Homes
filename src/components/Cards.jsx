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

export function Cards({ property, location, category, coverPhoto }) {
  const { price, id, title, area, product } = property;

  function makeShort() {
    if (title.length > 40 || title.length < 40) {
      return title.slice(0, 37);
    }
  }

  function putComma(number) {
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <Card className="w-full max-w-[23rem] shadow-lg m-3 ">
      <CardHeader floated={false} color="blue-gray">
        <img
          style={{ height: '200px', width: '100%' }}
          src={coverPhoto}
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
      <CardBody className="flex flex-col">
        <div className="mb-3 flex justify-between ">
          <Typography
            variant="lead"
            color="blue-gray"
            className="font-bold text-xl my-3"
          >
            $ {putComma(price)}
          </Typography>

          <Typography
            color="blue-gray"
            className="flex items-center gap-1 font-normal justify-end "
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

        <Typography
          variant="h3"
          color="blue-gray"
          className="font-meduim text-md my-3"
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
          <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
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
            <Tooltip content={area}>
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
          <Link to="propertyDetails" className="mt-8">
            <Tooltip content="See more details">
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70 flex">
                <MoreHorizIcon />
              </span>
            </Tooltip>
          </Link>
        </div>
      </CardBody>
      <CardFooter className="pt-3 mt-auto">
        <Link to="contactUs">
          <Button size="lg" fullWidth={true}>
            Booked a Viewing
          </Button>
        </Link>
      </CardFooter>
    </Card>

    // <div
    //   style={{ width: '26%' }}
    //   className="m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    // >
    //   <Link to="/">
    //     <img
    //       style={{ height: '200px', width: '100%' }}
    //       src={coverPhoto}
    //       alt="ui/ux review check"
    //     />
    //   </Link>
    //   <div className="p-5">
    //     <div className="flex justify-between">
    //       <h3 className="text-xl font-medium">$ {putComma(price)}</h3>
    //       <Typography
    //         color="blue-gray"
    //         className="flex items-center gap-1 font-normal justify-end "
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 24 24"
    //           fill="currentColor"
    //           className="-mt-0.5 h-5 w-5 text-yellow-700"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
    //             clipRule="evenodd"
    //           />
    //         </svg>
    //         5.0
    //       </Typography>
    //     </div>

    //     <h3 className="text-xl">Property ID: {id}</h3>
    //     <p>{title}</p>

    //     {/* ----- */}
    //     <div className="align-baseline">
    //       <div className="flex justify-between mt-3">
    //         <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
    //           <Tooltip content={location}>
    //             <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
    //               <LocationOnIcon />
    //             </span>
    //           </Tooltip>
    //           <Tooltip content={category}>
    //             <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
    //               <MapsHomeWorkIcon />
    //             </span>
    //           </Tooltip>
    //           <Tooltip content={area}>
    //             <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
    //               <CropLandscapeIcon />
    //             </span>
    //           </Tooltip>
    //           <Tooltip content={product}>
    //             <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 24 24"
    //                 fill="currentColor"
    //                 className="h-5 w-5"
    //               >
    //                 <path
    //                   fillRule="evenodd"
    //                   d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
    //                   clipRule="evenodd"
    //                 />
    //               </svg>
    //             </span>
    //           </Tooltip>
    //         </div>
    //         <Link to="propertyDetails" className="mt-8">
    //           <Tooltip content="See more details">
    //             <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70 flex">
    //               <MoreHorizIcon />
    //             </span>
    //           </Tooltip>
    //         </Link>
    //       </div>

    //       {/* ------------------ */}
    //       <Link
    //         to="/"
    //         className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //       >
    //         Read more
    //         <svg
    //           className="w-3.5 h-3.5 ml-2"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 14 10"
    //         >
    //           <path
    //             stroke="currentColor"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="M1 5h12m0 0L9 1m4 4L9 9"
    //           />
    //         </svg>
    //       </Link>
    //     </div>
    //     {/* ---- */}
    //   </div>
    // </div>
  );
}
