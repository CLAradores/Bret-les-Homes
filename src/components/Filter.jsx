import { useState } from 'react';
import { filterData, getFilterValues } from '../utils/filterData';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export const Filter = () => {
  const [filters, setFilters] = useState(filterData);

  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues);
    values.forEach((value) => {
      query[item.name] = item.value;
    });

    router.push({ pathname: path, query });
  };

  return (
    <div
      className="bg-white  w-auto h-auto flex flex-wrap justify-center child"
      style={{ width: '100%' }}
    >
      {filters &&
        filters.map((filter) => (
          <FormControl
            sx={{ m: 2, minWidth: 200, minHeight: 20 }}
            key={filter.queryName}
          >
            <InputLabel variant="info" htmlFor="uncontrolled-native">
              {filter.placeholder}
            </InputLabel>
            <NativeSelect
              // defaultValue={30}
              inputProps={{
                name: 'age',
                id: 'uncontrolled-native',
              }}
              onChange={(e) =>
                searchProperties({ [filter.queryName]: e.target.value })
              }
            >
              {/* <option>{''}</option> */}
              {filter &&
                filter?.items?.map((item) => (
                  <option value={item.value}> {item.name}</option>
                ))}
            </NativeSelect>
          </FormControl>
        ))}
    </div>
  );
};

{
  /* <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
<InputLabel id="demo-select-small-label">Age</InputLabel>
<Select
  labelId="demo-select-small-label"
  id="demo-select-small"
  label="Age"
>
  <MenuItem value="">
    <em>None</em>
  </MenuItem>
  <MenuItem value={10}>Ten</MenuItem>
  <MenuItem value={20}>Twenty</MenuItem>
  <MenuItem value={30}>Thirty</MenuItem>
</Select>
</FormControl> */
}
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
// import Stack from '@mui/material/Stack';

// export const Filter = () => {
//   return (
//     <div className="bg-white child lg:w-2/3 h-32 ">
//       <Box
//         sx={{
//           display: 'flex ',
//           alignItems: 'center',
//           justifyContent: 'center',
//           marginTop: '1.7rem',
//           margin: '1.7rem 2rem',

//           '& > :not(style)': { m: 1 },
//         }}
//       >
//         <TextField id="standard-basic" label="Search ID" variant="standard" />

//         <Stack direction="row" spacing={2}>
//           <Button
//             style={{ backgroundColor: '#333', maxWidth: '100%' }}
//             variant="contained"
//             endIcon={<SendIcon />}
//           >
//             Search
//           </Button>
//         </Stack>
//       </Box>
//     </div>
//   );
// };
