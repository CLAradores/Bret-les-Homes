import React from 'react';
import { Typography } from '@material-tailwind/react';
import { Rating } from '@material-tailwind/react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import MenuItem from '@mui/material/MenuItem';

const LINKS = [
  {
    title: 'Product',
    items: ['Overview', 'Features', 'Solutions', 'Tutorials'],
  },
  {
    title: 'Company',
    items: ['About us', 'Careers', 'Press', 'News'],
  },
  {
    title: 'Resource',
    items: ['Blog', 'Newsletter', 'Events', 'Help center'],
  },
];
const currentYear = new Date().getFullYear();
export const SemiFooter = () => {
  return (
    <main>
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
            <div className="flex  space-x-4 w-auto">
              <TextField
                // style={{ backgroundColor: 'white' }}
                fullWidth
                // helperText="Please enter your firstname"
                id="demo-helper-text-misaligned"
                label="Firstname"
              />
              <TextField
                fullWidth
                helperText="Please enter your lastname"
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

      <div className="relative max-w-7xl m-auto ">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2 ">
          <Typography variant="h5" className="mb-6 ">
            Bret'les Homes
          </Typography>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-40"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
