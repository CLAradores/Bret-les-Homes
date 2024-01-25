import React from 'react';
import { Typography } from '@material-tailwind/react';

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
export const SemiFooter = () => {
  return (
    <div>
      <div className="relative max-w-7xl m-auto mt-12">
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
                      target="_blank"
                      href="https://www.cision.com/resources/articles/real-estate-news-sites/"
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
    </div>
  );
};
