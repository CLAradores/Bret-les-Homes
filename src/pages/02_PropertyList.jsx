import { useFetch } from '../hooks/useFetch';
import { useState, useEffect } from 'react';
import { Pagination } from '../components';
import { Cards } from '../components';
import { HeroSection } from '../components';
import { SemiFooter } from '../components';
import { Link } from 'react-router-dom';

export default function PropertyList() {
  const [move, setMove] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(9);

  const url = `https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-sale&lang=en&categoryExternalID=${move}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    },
  };

  const { data: properties } = useFetch(url, options);
  // -------------------------
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPost = properties.slice(firstPostIndex, lastPostIndex);

  const handlePropertyTypeClick = (newMove) => {
    setMove(newMove);
  };
  // ======================================= ito bago
  /*  function showSpinner() {
    document.querySelector('.spinner').classList.add('show');
  }

  function hideSpinner() {
    document.querySelector('.spinner').classList.remove('show');
  }

  if (!properties) {
    return showSpinner();
  } else {
    hideSpinner();
  } */

  return (
    <div>
      <HeroSection />
      <main className="my-10">
        <div className="mt-16 text-center ">
          <ul className="flex flex-nowrap overflow-x-scroll text-md font-semibold space-x-4 text-center justify-center ">
            <Link to="/properties/propertyList">
              <li
                className="py-2 px-4 rounded mt-5"
                onClick={() => handlePropertyTypeClick(4)}
              >
                Apartment
              </li>
            </Link>
            <Link to="/properties/propertyList">
              <li
                className="py-2 px-4 rounded mt-5"
                onClick={() => handlePropertyTypeClick(16)}
              >
                Townhouses
              </li>
            </Link>
            <Link to="/properties/propertyList">
              <li
                className="py-2 px-4 rounded mt-5"
                onClick={() => handlePropertyTypeClick(3)}
              >
                Villas
              </li>
            </Link>
            <Link to="/properties/propertyList">
              <li
                className="py-2 px-4 rounded mt-5"
                onClick={() => handlePropertyTypeClick(18)}
              >
                Penthouses
              </li>
            </Link>
            <Link to="/properties/propertyList">
              <li
                className="py-2 px-4 rounded mt-5"
                onClick={() => handlePropertyTypeClick(21)}
              >
                Hotel Apartments
              </li>
            </Link>
            <Link to="/properties/propertyList">
              <li
                className="py-2 px-4 rounded mt-5"
                onClick={() => handlePropertyTypeClick(19)}
              >
                Villa Compound
              </li>
            </Link>
            <Link to="/properties/propertyList">
              <li
                className="py-2 px-4 rounded mt-5"
                onClick={() => handlePropertyTypeClick(14)}
              >
                Residential Plot
              </li>
            </Link>
            <Link to="/properties/propertyList">
              <li
                className="py-2 px-4 rounded mt-5"
                onClick={() => handlePropertyTypeClick(12)}
              >
                Residential Floor
              </li>
            </Link>
            <Link to="/properties/propertyList">
              <li
                className="py-2 px-4 rounded mt-5"
                onClick={() => handlePropertyTypeClick(17)}
              >
                Residential Building
              </li>
            </Link>

            <Link to="/properties/propertyList">
              <li
                className="py-2 px-4 rounded mt-5"
                onClick={() => handlePropertyTypeClick(25)}
              >
                Commercial Villa
              </li>
            </Link>

            <Link to="/properties/propertyList">
              <li
                className="py-2 px-4 rounded mt-5"
                onClick={() => handlePropertyTypeClick(15)}
              >
                Commercial Plot
              </li>
            </Link>
            <Link to="/properties/propertyList">
              <li
                className="py-2 px-4 rounded mt-5"
                onClick={() => handlePropertyTypeClick(13)}
              >
                Commercial Floor
              </li>
            </Link>
            <Link to="/properties/propertyList">
              <li
                className="py-2 px-4 rounded mt-5"
                onClick={() => handlePropertyTypeClick(10)}
              >
                Commercial Building
              </li>
            </Link>
            <Link to="/properties/propertyList">
              <li
                className="py-2 px-4 rounded mt-5"
                onClick={() => handlePropertyTypeClick(22)}
              >
                Industrial Land
              </li>
            </Link>

            <Link to="/properties/propertyList">
              <li
                className="py-2 px-4 rounded mt-5"
                onClick={() => handlePropertyTypeClick(11)}
              >
                Other Commercial
              </li>
            </Link>
          </ul>
        </div>
        <section className="max-w-7xl m-auto py-7">
          <div className="flex flex-wrap justify-center">
            {currentPost &&
              currentPost.map((property) => (
                <Cards
                  key={property.id}
                  property={property}
                  location={property.location[1].name}
                  category={property.category[1].name}
                  coverPhoto={
                    property.coverPhoto ? property.coverPhoto.url : ''
                  }
                />
              ))}
          </div>
        </section>
        <Pagination
          totalPosts={properties.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </main>
      <SemiFooter />
    </div>
  );
}
