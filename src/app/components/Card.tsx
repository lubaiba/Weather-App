import * as React from 'react';
import { Container } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function BasicCard({handleInputChange,onSubmit}:any) {
  return (
  <>
      <Container
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400,gap:'10px' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Enter city name"
        inputProps={{ 'aria-label': 'enter city' }}
        onChange={handleInputChange}
      />
     <IconButton type="button" sx={{ p: '10px' }} aria-label="search" >
        <SearchIcon onClick={onSubmit}/>
      </IconButton> 
    </Container>
    </>
  );
}

