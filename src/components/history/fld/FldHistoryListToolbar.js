import {
  Button,
  TextField,
  InputAdornment,
  SvgIcon, Typography, Box,
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import Stack from '@material-ui/core/Stack';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import DatePicker from '@material-ui/lab/DatePicker';
import TimePicker from '@material-ui/lab/TimePicker';
import React from 'react';
import PropTypes from 'prop-types';

const FldHistoryListToolbar = ({ onSearch }) => {
  const [value, setValue] = React.useState(null);
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Typography
          color="textPrimary"
          variant="h4"
          sx={{
            paddingRight: 1
          }}
        >
          금결원 전문번호
        </Typography>
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
          placeholder="금결원 전문번호"
          variant="outlined"
          size="small"
        />
      </Box>
      <Stack
        direction="row"
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          pt: 2
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <Typography
            color="textPrimary"
            variant="h4"
            sx={{
              paddingRight: 1
            }}
          >
            거래일시
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
            <Box sx={{ width: 10 }} />
            <TimePicker
              ampm={false}
              openTo="hours"
              views={['hours', 'minutes', 'seconds']}
              inputFormat="HH:mm:ss"
              mask="__:__:__"
              label="With seconds"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
            <Typography
              color="textPrimary"
              variant="h4"
              sx={{
                paddingLeft: 1,
                paddingRight: 1,
                alignItems: 'center'
              }}
            >
              ~
            </Typography>
            <TimePicker
              ampm={false}
              openTo="hours"
              views={['hours', 'minutes', 'seconds']}
              inputFormat="HH:mm:ss"
              mask="__:__:__"
              label="With seconds"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
        <Button
          variant="contained"
          onClick={onSearch}
        >
          조회
        </Button>
      </Stack>
    </Box>
  );
};

FldHistoryListToolbar.propTypes = {
  onSearch: PropTypes.func
};

export default FldHistoryListToolbar;
