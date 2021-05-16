import {
  Box,
  Button,
  TextField,
  InputAdornment,
  SvgIcon, Typography
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import React from 'react';

const BankIdHistoryListToolbar = (props) => (
  <Box {...props}>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Typography
        color="textPrimary"
        variant="h4"
      >
        DID조회
      </Typography>
      <Box
        sx={{
          float: 'right'
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
          sx={{
            alignItems: 'right'
          }}
        />
        <Button
          variant="contained"
        >
          조회
        </Button>
      </Box>
    </Box>
  </Box>
);

export default BankIdHistoryListToolbar;
