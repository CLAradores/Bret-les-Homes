import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { BorderColor } from '@mui/icons-material';

export const Filter = () => {
  return (
    <div className="bg-white child lg:w-2/3 h-32 ">
      <Box
        sx={{
          display: 'flex ',
          alignItems: 'center',
          marginTop: '1.7rem',
          margin: '1.7rem 2rem',

          '& > :not(style)': { m: 1 },
        }}
      >
        <TextField
          fullWidth
          id="demo-helper-text-misaligned"
          label="Property ID"
        />
        {/* <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        /> */}
        {/*  <TextField
          select
          fullWidth
          id="demo-helper-text-misaligned"
          label="Type"
        > */}
        {/* <option value=""></option> */}
        {/*  </TextField>
        <TextField
          select
          fullWidth
          id="demo-helper-text-misaligned"
          label="Location"
        > */}
        {/* {currencies.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))} */}
        {/*  </TextField>
        <TextField
          select
          fullWidth
          id="demo-helper-text-misaligned"
          label="Min-price"
        > */}
        {/* {currencies.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))} */}
        {/*   </TextField>
        <TextField
          select
          fullWidth
          id="demo-helper-text-misaligned"
          label="Max-price"
        > */}
        {/* {currencies.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))} */}
        {/* </TextField> */}
        <Stack direction="row" spacing={2}>
          <Button
            style={{ color: '#333', borderColor: '#333' }}
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            Clear
          </Button>
          <Button
            style={{ backgroundColor: '#333' }}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </Stack>
      </Box>
    </div>
  );
};
