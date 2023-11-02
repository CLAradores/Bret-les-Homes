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

        <Stack direction="row" spacing={2}>
          {/* <Button
            style={{ color: '#333', borderColor: '#333' }}
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            Clear
          </Button> */}
          <Button
            style={{ backgroundColor: '#333' }}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Search
          </Button>
        </Stack>
      </Box>
    </div>
  );
};
