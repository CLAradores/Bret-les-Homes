import { useFetch } from '../hooks/useFetch';
import { useState, useEffect } from 'react';
import { Pagination } from '../components';
import { Cards } from '../components';
import { HeroSection } from '../components';
import { SemiFooter } from '../components';
import { Link } from 'react-router-dom';
import { FilterTitle } from '../components';

export default function PropertyList() {
  const [received, setReceived] = useState('');
  const [move, setMove] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(9);

  const receivedData = (data) => {
    // Use to Received Data
    setReceived(data);
  };

  // -----------------------------------
  const purpose = received.purpose || 'for-sale';
  const rentFrequency = received.rentFrequency || ' ';
  const minPrice = received.minPrice || ' ';
  const maxPrice = received.maxPrice || ' ';
  const roomsMin = received.roomsMin || ' ';
  const bathsMin = received.bathsMin || ' ';
  const sort = received.sort || 'price-desc';
  const areaMax = received.areaMax || '35000';
  const locationExternalIDs = received.locationExternalIDs || '5002';
  const categoryExternalID = received.categoryExternalID || '4';
  const baseUrl = 'https://bayut.p.rapidapi.com';

  const url = `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`;
  // -----------------------------------

  // const url = `https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-sale&lang=en&categoryExternalID=${move}`;
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
  // ------------

  return (
    <div>
      <HeroSection />
      <FilterTitle receiveData={receivedData} />
      <main className="">
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
