// import { useState } from 'react';
// import { PropertyDetails } from '../pages/03_PropertyDetails';

// const API_KEY = '44ed021340mshdbb1146f5fe1d18p17b071jsn3689b64edc37';

// export const fetchPropertyDetails = async (externalID) => {
//   const [data, setData] = useState([]);
//   const url = `https://bayut.p.rapidapi.com/properties/detail?externalID=${externalID}`;

//   const response = await fetch(url, {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': API_KEY,
//       'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
//     },
//   });

//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }

//   const result = await response.json();

//   if (result.hits.length === 0) {
//     throw new Error('Property not found');
//   }

//   setData(result.hits);
//   console.log(data.title);

//   return (
//     <div>
//       <PropertyDetails property={result.hits} />
//     </div>
//   );
// };
