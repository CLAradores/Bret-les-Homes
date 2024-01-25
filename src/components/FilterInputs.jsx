import { useState } from 'react';
import { filterData, getFilterValues } from '../utils/filterData';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { useSearchParams } from 'react-router-dom';

export const FilterInputs = ({ getReceivedData }) => {
  const [filters, setFilters] = useState(filterData);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilterChange = (filterValues, name) => {
    getReceivedData(filterValues);

    // ________________display to url ________________
    const updatedSearchParams = new URLSearchParams(searchParams.toString());
    updatedSearchParams.set(filterValues, name);
    setSearchParams(filterValues, name);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {filters &&
        filters.map((filter) => (
          <FormControl
            sx={{ m: 2, minWidth: 200, minHeight: 20 }}
            key={filter.queryName}
          >
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              {filter.placeholder}
            </InputLabel>
            <NativeSelect
              inputProps={{
                name: filter.queryName,
                id: `select-${filter.queryName}`,
              }}
              onChange={(e) =>
                handleFilterChange({ [filter.queryName]: e.target.value })
              }
            >
              <option value="">{''}</option>
              {filter &&
                filter?.items?.map((item) => (
                  <option key={item.name} value={item.value}>
                    {item.name}
                  </option>
                ))}
            </NativeSelect>
          </FormControl>
        ))}
    </div>
  );
};
