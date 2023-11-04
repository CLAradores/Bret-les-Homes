import { useState } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import { FilterInputs } from './FilterInputs';

export const FilterTitle = ({ receiveData }) => {
  const [showMenu, setshowMenu] = useState(false);
  //   const [receivedData, setreceivedData] = useState(null);

  const getData = (data) => {
    receiveData(data);
  };

  return (
    <div>
      <div
        className="flex justify-center bg-blue-gray-300 p-2 text-xl font-bold"
        onClick={() => setshowMenu((prevState) => !prevState)}
      >
        <h2 className="mr-5">Search by Filter</h2>
        <FilterListIcon />
      </div>
      {showMenu && <FilterInputs getReceivedData={getData} />}
    </div>
  );
};
