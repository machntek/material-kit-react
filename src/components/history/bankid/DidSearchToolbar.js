import {
  Box,
  Button,
  TextField,
  InputAdornment,
  SvgIcon, Typography
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DidSearchToolbar = ({ onSearch }) => {
  const [value, setValue] = useState();
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box>
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
          value={value}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          onClick={() => { onSearch({ value }); }}
        >
          조회
        </Button>
      </Box>
    </Box>
  );
};

DidSearchToolbar.propTypes = {
  onSearch: PropTypes.func
};

export default DidSearchToolbar;
