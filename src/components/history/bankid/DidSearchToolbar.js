import {
  Box,
  Button,
  TextField,
  InputAdornment,
  SvgIcon, Typography
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import React from 'react';

const DidSearchToolbar = (props) => (
  <Box
    {...props}
  >
    <Typography
      color="textPrimary"
      variant="h4"
      sx={{
        float: 'left',
      }}
    >
      DID조회
    </Typography>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SvgIcon
                fontSize="small"
                color="action"
              >
                <SearchIcon />
              </SvgIcon>
            </InputAdornment>
          )
        }}
        placeholder="고객번호"
        variant="outlined"
        size="small"
      />
      <Button
        variant="contained"
      >
        조회
      </Button>
    </Box>
  </Box>
);

export default DidSearchToolbar;
